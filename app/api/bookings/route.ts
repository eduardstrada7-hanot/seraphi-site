import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
const prisma = new PrismaClient();
const CreateBooking = z.object({
  serviceId: z.number().int(),
  slotId: z.number().int(),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  notes: z.string().optional()
});
export async function POST(req: Request) {
  const body = await req.json().catch(()=>null);
  const parsed = CreateBooking.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  const { serviceId, slotId, name, email, phone, notes } = parsed.data;
  try {
    const created = await prisma.booking.create({ data: { serviceId, slotId, name, email, phone, notes } });
    return NextResponse.json({ ok: true, bookingId: created.id });
  } catch {
    return NextResponse.json({ ok: false, error: "Slot unavailable" }, { status: 409 });
  }
}
