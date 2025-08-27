const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  const services = await prisma.$transaction([
    prisma.service.upsert({ where:{id:1}, update:{}, create:{ id:1, name:"Music Studio Session", durationMinutes:60, description:"Recording/mixing in vibroacoustic studio." }}),
    prisma.service.upsert({ where:{id:2}, update:{}, create:{ id:2, name:"Soma Sound Therapy", durationMinutes:90, description:"Vibro-acoustic sound & light therapy." }}),
    prisma.service.upsert({ where:{id:3}, update:{}, create:{ id:3, name:"Venue Tour", durationMinutes:30, description:"Immersive video event venue walkthrough." }})
  ]);

  const start = new Date(); start.setHours(0,0,0,0);
  for (let d = 0; d < 30; d++) {
    const day = new Date(start); day.setDate(day.getDate()+d);
    for (let hour = 10; hour <= 18; hour++) {
      for (const svc of services) {
        const s = new Date(day); s.setHours(hour,0,0,0);
        const e = new Date(s); e.setMinutes(e.getMinutes()+svc.durationMinutes);
        try { await prisma.timeSlot.create({ data:{ serviceId: svc.id, startAt: s, endAt: e, capacity: 1 } }); } catch {}
      }
    }
  }
  console.log("Seeded services & timeslots.");
}
main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect());
