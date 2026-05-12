import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/teams")({
  component: Teams,
  head: () => ({
    meta: [
      { title: "Franchises — Bihar T10 League 2026" },
      { name: "description", content: "Meet the eight city franchises competing in Bihar T10 League 2026 — from Patna Pioneers to Begusarai Bulls." },
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

const teams = [
  { name: "PATNA PIONEERS", city: "Patna", color: "from-red-500 to-amber-500", motto: "Capital pride.", logo: patnaLogo },
  { name: "GAYA GLADIATORS", city: "Gaya", color: "from-purple-500 to-rose-500", motto: "Strike to win.", logo: gayaLogo },
  { name: "MUZAFFARPUR MAVERICKS", city: "Muzaffarpur", color: "from-emerald-500 to-cyan-500", motto: "Fearless cricket.", logo: muzaffarpurLogo },
  { name: "BHAGALPUR BLAZE", city: "Bhagalpur", color: "from-orange-500 to-red-600", motto: "Burn bright.", logo: bhagalpurLogo },
  { name: "DARBHANGA DIAMONDS", city: "Darbhanga", color: "from-sky-500 to-indigo-500", motto: "Cut sharp.", logo: darbhangaLogo },
  { name: "PURNIA PANTHERS", city: "Purnia", color: "from-yellow-400 to-amber-600", motto: "Hunt as one.", logo: purniaLogo },
  { name: "ARA AVENGERS", city: "Ara", color: "from-fuchsia-500 to-pink-600", motto: "We fight back.", logo: araLogo },
  { name: "BEGUSARAI BULLS", city: "Begusarai", color: "from-lime-400 to-emerald-600", motto: "Charge forward.", logo: begusaraiLogo },
];

function Teams() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-xs tracking-[0.3em] text-gold mb-4">CITY FRANCHISES</div>
        <h1 className="display text-6xl md:text-8xl mb-4">Eight cities. <span className="text-gradient-gold">One league.</span></h1>
        <p className="text-muted-foreground text-lg max-w-2xl">Every Bihar T10 franchise is rooted in its city — drafted from local trials and led by professional coaches.</p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((t, i) => (
            <div key={t.name} className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-border hover:border-gold/60 transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-between text-foreground">
                <div className="absolute top-6 left-6 display text-7xl text-foreground/30">0{i + 1}</div>
                <div className="flex-1 flex items-center justify-center p-6">
                  <img src={t.logo} alt={`${t.name} Logo`} className="h-40 w-40 md:h-48 md:w-48 object-contain drop-shadow-glow transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <div className="display text-3xl leading-tight">{t.name}</div>
                  <div className="mt-2 text-sm text-foreground/80 italic">"{t.motto}"</div>
                  <div className="mt-4 text-xs tracking-[0.3em] text-foreground/70">{t.city.toUpperCase()} · BIHAR</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
