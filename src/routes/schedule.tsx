import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/schedule")({
  component: Schedule,
  head: () => ({
    meta: [
      { title: "Schedule — Bihar T10 League 2026" },
      { name: "description", content: "Full match schedule for Bihar T10 League 2026 — all 32 fixtures across eight city franchises." },
    ],
  }),
});

const matches = [
  { d: "FEB 14", t1: "PATNA PIONEERS", t2: "GAYA GLADIATORS", v: "Moin-ul-Haq Stadium, Patna", time: "7:00 PM" },
  { d: "FEB 15", t1: "MUZAFFARPUR MAVERICKS", t2: "BHAGALPUR BLAZE", v: "Bhagalpur Cricket Ground", time: "7:00 PM" },
  { d: "FEB 16", t1: "DARBHANGA DIAMONDS", t2: "PURNIA PANTHERS", v: "Darbhanga Stadium", time: "7:00 PM" },
  { d: "FEB 17", t1: "ARA AVENGERS", t2: "BEGUSARAI BULLS", v: "Begusarai Cricket Ground", time: "7:00 PM" },
  { d: "FEB 18", t1: "PATNA PIONEERS", t2: "MUZAFFARPUR MAVERICKS", v: "Moin-ul-Haq Stadium, Patna", time: "7:00 PM" },
  { d: "FEB 19", t1: "GAYA GLADIATORS", t2: "BHAGALPUR BLAZE", v: "Gaya Cricket Ground", time: "7:00 PM" },
  { d: "FEB 20", t1: "DARBHANGA DIAMONDS", t2: "ARA AVENGERS", v: "Darbhanga Stadium", time: "7:00 PM" },
  { d: "FEB 21", t1: "PURNIA PANTHERS", t2: "BEGUSARAI BULLS", v: "Purnia Sports Complex", time: "7:00 PM" },
  { d: "FEB 22", t1: "PATNA PIONEERS", t2: "BHAGALPUR BLAZE", v: "Moin-ul-Haq Stadium, Patna", time: "7:00 PM" },
  { d: "FEB 23", t1: "GAYA GLADIATORS", t2: "DARBHANGA DIAMONDS", v: "Gaya Cricket Ground", time: "7:00 PM" },
];

function Schedule() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-xs tracking-[0.3em] text-gold mb-4">SEASON 1 · 2026</div>
        <h1 className="display text-6xl md:text-8xl mb-4">Full <span className="text-gradient-gold">schedule.</span></h1>
        <p className="text-muted-foreground text-lg max-w-2xl">Every match. Every venue. Every minute that matters.</p>

        <div className="mt-12 space-y-3">
          {matches.map((m, i) => (
            <div key={i} className="grid md:grid-cols-12 gap-4 items-center bg-card border border-border rounded-xl p-5 hover:border-gold/40 transition-colors">
              <div className="md:col-span-2">
                <div className="display text-3xl text-gradient-gold">{m.d}</div>
                <div className="text-[10px] tracking-[0.3em] text-muted-foreground">2026</div>
              </div>
              <div className="md:col-span-6 flex items-center gap-3 md:gap-6">
                <div className="display text-lg md:text-xl text-right flex-1">{m.t1}</div>
                <div className="text-gold text-xs tracking-[0.3em] px-3 py-1 border border-gold/40 rounded-full">VS</div>
                <div className="display text-lg md:text-xl flex-1">{m.t2}</div>
              </div>
              <div className="md:col-span-3 text-sm text-muted-foreground flex items-center gap-2"><MapPin className="h-4 w-4 text-gold shrink-0" />{m.v}</div>
              <div className="md:col-span-1 text-sm text-gold flex items-center gap-2 md:justify-end"><Clock className="h-4 w-4" />{m.time}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
