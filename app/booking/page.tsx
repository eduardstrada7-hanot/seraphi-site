"use client";
import { useEffect, useState } from "react";

type Service = { id: number; name: string; durationMinutes: number; description?: string };
type Slot = { id: number; startAt: string; endAt: string; capacity: number; available: boolean };

export default function BookingPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [serviceId, setServiceId] = useState<number | null>(null);
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0,10));
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [msg, setMsg] = useState<string>("");

  useEffect(() => { fetch("/api/services").then(r=>r.json()).then(setServices); }, []);
  useEffect(() => {
    if (!serviceId || !date) return;
    setSelectedSlot(null);
    fetch(`/api/availability?serviceId=${serviceId}&date=${date}`).then(r=>r.json()).then(setSlots);
  }, [serviceId, date]);

  const book = async () => {
    if (!serviceId || !selectedSlot) return;
    setMsg("");
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({ serviceId, slotId: selectedSlot, ...form })
    });
    if (res.ok) setMsg("✅ Booked! We'll email you a confirmation.");
    else {
      const j = await res.json().catch(()=>({}));
      setMsg(j?.error || "Could not book this slot.");
    }
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Book a Session</h1>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="md:col-span-1">
          <label className="block text-sm mb-1">Service</label>
          <select className="w-full bg-white/10 border border-white/20 rounded p-2"
            value={serviceId ?? ""} onChange={e=>setServiceId(Number(e.target.value))}>
            <option value="" disabled>Select service…</option>
            {services.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Date</label>
          <input type="date" className="w-full bg-white/10 border border-white/20 rounded p-2"
            value={date} onChange={e=>setDate(e.target.value)} />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold mb-2">Available times</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {slots.length === 0 && <div className="text-white/70">No slots for this day.</div>}
          {slots.map(s => {
            const start = new Date(s.startAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
            return (
              <button key={s.id} disabled={!s.available}
                onClick={()=>setSelectedSlot(s.id)}
                className={`px-3 py-2 rounded border ${selectedSlot===s.id?'bg-white text-black':'bg-white/5 text-white'} ${s.available?'':'opacity-50 cursor-not-allowed'}`}>
                {start}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-3">
        <div className="grid md:grid-cols-2 gap-3">
          <input placeholder="Your name" className="bg-white/10 border border-white/20 rounded p-2"
            value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
          <input placeholder="Email" type="email" className="bg-white/10 border border-white/20 rounded p-2"
            value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
        </div>
        <input placeholder="Phone (optional)" className="bg-white/10 border border-white/20 rounded p-2"
          value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})}/>
        <textarea placeholder="Notes…" className="bg-white/10 border border-white/20 rounded p-2 min-h-24"
          value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})}/>
        <button onClick={book} className="px-5 py-3 rounded-full bg-white text-black font-medium w-fit">Confirm Booking</button>
        {msg && <p className="mt-2 text-sm">{msg}</p>}
      </div>
    </div>
  );
}
