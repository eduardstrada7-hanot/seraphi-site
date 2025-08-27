import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const serviceId = Number(searchParams.get("serviceId"));
  const dateStr = searchParams.get("date"); // YYYY-MM-DD

  if (!serviceId || !dateStr) return NextResponse.json({ error: "Missing params" }, { status: 400 });

  const dayStart = new Date(`${dateStr}T00:00:00`);
  const dayEnd = new Date(`${dateStr}T23:59:59`);

  const slots = await prisma.timeSlot.findMany({
    where: { serviceId, startAt: { gte: dayStart, lte: dayEnd } },
    orderBy: { startAt: "asc" },
    include: { bookings: true }
  });

  const data = slots.map(s => ({
    id: s.id,
    startAt: s.startAt,
    endAt: s.endAt,
    capacity: s.capacity,
    available: s.bookings.length < s.capacity
  }));

  return NextResponse.json(data);
}
