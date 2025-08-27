// components/ContactForm.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState<"idle"|"ok"|"err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });
    setStatus(res.ok ? "ok" : "err");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" required placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10" />
      <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10" />
      <textarea name="message" required placeholder="Tell us about your event/session…" className="w-full min-h-32 px-4 py-3 rounded-xl bg-white/5 border border-white/10" />
      <input name="organization" className="hidden" tabIndex={-1} autoComplete="off" /> {/* honeypot */}
      <div className="flex items-center gap-3">
        <label className="text-sm text-white/70">9 + 9 =</label>
        <input name="captcha" required value={answer} onChange={(e)=>setAnswer(e.target.value)} className="w-24 px-3 py-2 rounded-lg bg-white/5 border border-white/10" />
      </div>
      <button className="px-5 py-3 rounded-full bg-white text-black font-medium">Send</button>
      {status==="ok" && <p className="text-emerald-400">Thanks! We'll be in touch.</p>}
      {status==="err" && <p className="text-rose-400">Something went wrong. Try again.</p>}
    </form>
  );
}
