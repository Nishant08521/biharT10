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

import patnaLogo from "@/assets/patna.png";
import gayaLogo from "@/assets/gaya.png";
import muzaffarpurLogo from "@/assets/muzaffarpur.png";
import bhagalpurLogo from "@/assets/bhagalpur.png";
import darbhangaLogo from "@/assets/darbhanga.png";
import purniaLogo from "@/assets/purnia.png";
import araLogo from "@/assets/ara.png";
import begusaraiLogo from "@/assets/begusarai.png";

const teamLogos: Record<string, string> = {
  "PATNA PIONEERS": patnaLogo,
  "GAYA GLADIATORS": gayaLogo,
  "MUZAFFARPUR MAVERICKS": muzaffarpurLogo,
  "BHAGALPUR BLAZE": bhagalpurLogo,
  "DARBHANGA DIAMONDS": darbhangaLogo,
  "PURNIA PANTHERS": purniaLogo,
  "ARA AVENGERS": araLogo,
  "BEGUSARAI BULLS": begusaraiLogo,
};

const matches = [
  { id: "1", d: "FEB 14", t1: "PATNA PIONEERS", t2: "GAYA GLADIATORS", v: "Moin-ul-Haq Stadium, Patna", time: "7:00 PM" },
  { id: "2", d: "FEB 15", t1: "MUZAFFARPUR MAVERICKS", t2: "BHAGALPUR BLAZE", v: "Bhagalpur Cricket Ground", time: "7:00 PM" },
  { id: "3", d: "FEB 16", t1: "DARBHANGA DIAMONDS", t2: "PURNIA PANTHERS", v: "Darbhanga Stadium", time: "7:00 PM" },
  { id: "4", d: "FEB 17", t1: "ARA AVENGERS", t2: "BEGUSARAI BULLS", v: "Begusarai Cricket Ground", time: "7:00 PM" },
  { id: "5", d: "FEB 18", t1: "PATNA PIONEERS", t2: "MUZAFFARPUR MAVERICKS", v: "Moin-ul-Haq Stadium, Patna", time: "7:00 PM" },
  { id: "6", d: "FEB 19", t1: "GAYA GLADIATORS", t2: "BHAGALPUR BLAZE", v: "Gaya Cricket Ground", time: "7:00 PM" },
  { id: "7", d: "FEB 20", t1: "DARBHANGA DIAMONDS", t2: "ARA AVENGERS", v: "Darbhanga Stadium", time: "7:00 PM" },
  { id: "8", d: "FEB 21", t1: "PURNIA PANTHERS", t2: "BEGUSARAI BULLS", v: "Purnia Sports Complex", time: "7:00 PM" },
  { id: "9", d: "FEB 22", t1: "PATNA PIONEERS", t2: "BHAGALPUR BLAZE", v: "Moin-ul-Haq Stadium, Patna", time: "7:00 PM" },
  { id: "10", d: "FEB 23", t1: "GAYA GLADIATORS", t2: "DARBHANGA DIAMONDS", v: "Gaya Cricket Ground", time: "7:00 PM" },
];

function Schedule() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-xs tracking-[0.3em] text-gold mb-4">SEASON 1 · 2026</div>
        <h1 className="display text-6xl md:text-8xl mb-4">Full <span className="text-gradient-gold">schedule.</span></h1>
        <p className="text-muted-foreground text-lg max-w-2xl">Every match. Every venue. Every minute that matters.</p>

        <div className="mt-12 space-y-3">
          {matches.map((m) => (
            <Link
              key={m.id}
              to="/match/$matchId"
              params={{ matchId: m.id }}
              className="grid md:grid-cols-12 gap-4 items-center bg-card border border-border rounded-xl p-5 hover:border-gold/40 transition-colors group"
            >
              <div className="md:col-span-2">
                <div className="display text-3xl text-gradient-gold">{m.d}</div>
                <div className="text-[10px] tracking-[0.3em] text-muted-foreground">2026</div>
              </div>
              <div className="md:col-span-5 flex items-center gap-3 md:gap-6">
                <div className="flex items-center gap-3 flex-1 justify-end">
                  <div className="display text-lg md:text-xl text-right">{m.t1}</div>
                  <img src={teamLogos[m.t1]} alt="" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
                </div>
                <div className="text-gold text-xs tracking-[0.3em] px-3 py-1 border border-gold/40 rounded-full">VS</div>
                <div className="flex items-center gap-3 flex-1">
                  <img src={teamLogos[m.t2]} alt="" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
                  <div className="display text-lg md:text-xl">{m.t2}</div>
                </div>
              </div>
              <div className="md:col-span-3 text-sm text-muted-foreground flex items-center gap-2"><MapPin className="h-4 w-4 text-gold shrink-0" />{m.v}</div>
              <div className="md:col-span-2 flex items-center justify-between">
                <div className="text-sm text-gold flex items-center gap-2"><Clock className="h-4 w-4" />{m.time}</div>
                <ArrowRight className="h-4 w-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
