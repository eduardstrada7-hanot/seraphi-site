param(
  [int]$Port = 3001
)

Write-Host "== SERA PHI dev doctor ==" -ForegroundColor Cyan
Write-Host "PWD: $(Get-Location)"

# Make sure we're in a Next project
if (-not (Test-Path package.json)) { throw "package.json not found. cd into the project root." }

# Ensure core deps (pin major versions)
npm pkg set scripts.dev="next dev" `
  scripts.build="next build" `
  scripts.start="next start" `
  scripts.lint="next lint"

npm i -E next@14 react@18 react-dom@18

# Clean install for consistency
if (Test-Path node_modules) { Remove-Item -Recurse -Force node_modules }
if (Test-Path package-lock.json) { Remove-Item -Force package-lock.json }
npm install

# Ensure minimal required files exist
if (-not (Test-Path app)) { New-Item -ItemType Directory app | Out-Null }
if (-not (Test-Path app/globals.css)) {
  @"
@tailwind base;
@tailwind components;
@tailwind utilities;
:root { color-scheme: dark; }
"@ | Set-Content app/globals.css -Encoding UTF8
}
if (-not (Test-Path app/layout.tsx)) {
@"
// app/layout.tsx
import "./globals.css";
export const metadata = { title: "SERA PHI", description: "Immersive Video Event Venue & Vibroacoustic Music Studio" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang='en'><body style={{background:'#000',color:'#fff'}}>{children}</body></html>);
}
"@ | Set-Content app/layout.tsx -Encoding UTF8
}
if (-not (Test-Path app/page.tsx)) {
@"
// app/page.tsx
export default function Page() {
  return (<main style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>SERA PHI</main>);
}
"@ | Set-Content app/page.tsx -Encoding UTF8
}

# Add a health check API (idempotent)
if (-not (Test-Path app/api/health)) { New-Item -ItemType Directory app/api/health -Force | Out-Null }
@"
// app/api/health/route.ts
import { NextResponse } from 'next/server';
export async function GET() { return NextResponse.json({ ok: true, ts: Date.now() }); }
"@ | Set-Content app/api/health/route.ts -Encoding UTF8

# Clear Next cache
if (Test-Path .next) { Remove-Item -Recurse -Force .next }

# Free the port if occupied
$net = netstat -ano | Select-String ":$Port\s"
if ($net) {
  $pid = ($net -split '\s+')[-1]
  Write-Host "Killing process on port $Port (PID $pid)" -ForegroundColor Yellow
  try { taskkill /PID $pid /F | Out-Null } catch {}
}

# Start Next bound to IPv4 on a clean port
Write-Host "Starting dev server on http://127.0.0.1:$Port ..." -ForegroundColor Green
$env:DEBUG = "next:*"

# Start the dev server in background
$job = Start-Job -ScriptBlock {
  param($port)
  Set-Location $using:PWD
  npx next dev -H 127.0.0.1 -p $port
} -ArgumentList $Port

# Wait a moment then verify the port is listening
Start-Sleep -Seconds 5
$result = Test-NetConnection 127.0.0.1 -Port $Port -InformationLevel Quiet
if (-not $result) {
  Write-Host "Dev server not listening. Job output:" -ForegroundColor Red
  Receive-Job $job
  throw "Server failed to bind."
} else {
  Write-Host "✅ Dev server is listening on http://127.0.0.1:$Port" -ForegroundColor Green
  Write-Host "Health check: http://127.0.0.1:$Port/api/health"
  Write-Host "Press Ctrl+C to stop the server"
  
  # Keep the job running
  try {
    while ($true) {
      Start-Sleep -Seconds 1
      if ($job.State -eq "Failed") {
        Write-Host "Dev server stopped unexpectedly" -ForegroundColor Red
        break
      }
    }
  } finally {
    Stop-Job $job
    Remove-Job $job
  }
}
