import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Trophy, Users, Zap, ShieldCheck, Calendar, MapPin, Star } from "lucide-react";
import hero from "@/assets/hero-batsman.jpg";
import crowd from "@/assets/crowd.jpg";
import bowler from "@/assets/bowler.jpg";
import trophy from "@/assets/trophy.jpg";
import ambassador from "@/assets/ambassador.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Bihar T10 League 2026 — City Franchise Cricket" },
      { name: "description", content: "The first professional city-based franchise league bringing Bihar's tennis-ball cricket talent to the national stage. Register now for Bihar T10 League 2026." },
    ],
  }),
});

const cities = ["PATNA", "GAYA", "MUZAFFARPUR", "BHAGALPUR", "DARBHANGA", "PURNIA", "ARA", "BEGUSARAI"];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl animate-float-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs tracking-[0.3em] font-semibold mb-8">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" /> SEASON 1 · 2026
            </div>
            <h1 className="display text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-foreground">
              BIHAR <span className="text-gradient-gold">T10</span><br />
              LEAGUE
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl">
              The first professional city-based franchise league bringing Bihar's tennis-ball talent to the national stage.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/register" className="inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-8 py-4 rounded-md font-bold tracking-wider shadow-gold hover:scale-[1.02] transition-transform">
                REGISTER YOURSELF <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/schedule" className="inline-flex items-center gap-2 border border-foreground/30 px-8 py-4 rounded-md font-bold tracking-wider hover:bg-foreground/5">
                MATCH SCHEDULE
              </Link>
            </div>
          </div>
        </div>

        {/* stripe */}
        <div className="h-1 stripe-divider" />
      </section>

      {/* TICKER */}
      <section className="bg-ink/60 border-y border-border py-5 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...cities, ...cities, ...cities].map((c, i) => (
            <div key={i} className="flex items-center gap-6 px-8">
              <Star className="h-4 w-4 text-gold" />
              <span className="display text-2xl tracking-[0.3em] text-foreground/70">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {[
            { n: "8", l: "City Franchises" },
            { n: "32", l: "League Matches" },
            { n: "10", l: "Overs / Side" },
            { n: "90", l: "Minutes / Match" },
          ].map((s) => (
            <div key={s.l} className="bg-card p-8 md:p-10 text-center hover:bg-secondary transition-colors">
              <div className="display text-6xl md:text-7xl text-gradient-gold">{s.n}</div>
              <div className="mt-2 text-xs tracking-[0.25em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY THIS LEAGUE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-glow">
            <img src={bowler} alt="Tennis-ball cricket bowler" className="h-full w-full object-cover" width={1280} height={1280} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] text-gold mb-4">WHY THIS LEAGUE · WHY NOW</div>
            <h2 className="display text-5xl md:text-6xl">From <span className="text-gradient-gold">galli</span> to glory.</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Bihar has no shortage of talent — only a shortage of opportunities. Bihar T10 turns local hobbies into a professional legacy with a structured city-franchise format, broadcast-grade production and pathways to scout-level visibility.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Standardized T10 rules & professional umpiring",
                "Live broadcast & social-first highlights",
                "Trial camps across every district of Bihar",
                "Prize pool, contracts and pro pathways",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.3em] text-gold mb-4">KEY PILLARS</div>
          <h2 className="display text-5xl md:text-6xl">Built on four foundations.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Trophy, t: "Professionalism", d: "Standardized T10 rules, certified umpires and tournament-grade ops." },
            { icon: Users, t: "Community", d: "City franchises bring cricket back to the streets, stadiums and stands." },
            { icon: Zap, t: "Opportunity", d: "Trials, contracts and a clear path to professional cricket." },
            { icon: ShieldCheck, t: "Integrity", d: "Transparent selection, fair play and safeguarding at every step." },
          ].map((p) => (
            <div key={t} className="group relative bg-card border border-border rounded-2xl p-8 hover:border-gold/60 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center text-gold-foreground mb-6">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="display text-2xl mb-2">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AMBASSADOR */}
      <section className="relative py-24 my-12">
        <div className="absolute inset-0 -z-10">
          <img src={crowd} alt="" className="h-full w-full object-cover opacity-20" width={1600} height={1024} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-gold shadow-gold">
              <img src={ambassador} alt="League Ambassador" className="h-full w-full object-cover" width={1024} height={1280} loading="lazy" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-gold text-gold-foreground px-6 py-3 rounded-md font-bold tracking-wider text-sm">
              LEAGUE AMBASSADOR
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs tracking-[0.3em] text-gold mb-4">WORD FROM THE AMBASSADOR</div>
            <blockquote className="display text-3xl md:text-5xl leading-tight">
              "Bihar has no shortage of <span className="text-gradient-gold">talent</span> — only a shortage of opportunities. Bihar T10 is here to change that."
            </blockquote>
            <div className="mt-8">
              <div className="display text-2xl text-gold">SHRI MANOJ TIWARI</div>
              <div className="text-sm tracking-[0.2em] text-muted-foreground">LEAGUE AMBASSADOR</div>
            </div>
          </div>
        </div>
      </section>

      {/* FRANCHISES PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs tracking-[0.3em] text-gold mb-4">CITY FRANCHISES</div>
            <h2 className="display text-5xl md:text-6xl">Eight cities. <span className="text-gradient-gold">One league.</span></h2>
          </div>
          <Link to="/teams" className="text-sm tracking-wider font-semibold text-gold hover:underline inline-flex items-center gap-2">
            VIEW ALL FRANCHISES <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cities.map((c, i) => (
            <Link to="/teams" key={c} className="group relative aspect-square rounded-2xl overflow-hidden border border-border hover:border-gold/60 transition-all bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-gold/20 opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="relative h-full flex flex-col justify-between p-5">
                <div className="display text-5xl text-gold/80">0{i + 1}</div>
                <div>
                  <div className="display text-2xl">{c}</div>
                  <div className="text-[10px] tracking-[0.3em] text-muted-foreground mt-1">FRANCHISE</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SCHEDULE PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-xs tracking-[0.3em] text-gold mb-4">UPCOMING FIXTURES</div>
        <h2 className="display text-5xl md:text-6xl mb-12">Match <span className="text-gradient-gold">schedule.</span></h2>
        <div className="space-y-3">
          {[
            { d: "FEB 14", t1: "PATNA PIONEERS", t2: "GAYA GLADIATORS", v: "Moin-ul-Haq Stadium, Patna", time: "7:00 PM" },
            { d: "FEB 15", t1: "MUZAFFARPUR MAVERICKS", t2: "BHAGALPUR BLAZE", v: "Bhagalpur Cricket Ground", time: "7:00 PM" },
            { d: "FEB 16", t1: "DARBHANGA DIAMONDS", t2: "PURNIA PANTHERS", v: "Darbhanga Stadium", time: "7:00 PM" },
            { d: "FEB 17", t1: "ARA AVENGERS", t2: "BEGUSARAI BULLS", v: "Begusarai Cricket Ground", time: "7:00 PM" },
          ].map((m) => (
            <div key={m.d} className="grid md:grid-cols-12 gap-4 items-center bg-card border border-border rounded-xl p-5 hover:border-gold/40 transition-colors">
              <div className="md:col-span-2 display text-3xl text-gradient-gold">{m.d}</div>
              <div className="md:col-span-6 flex items-center gap-3 md:gap-6">
                <div className="display text-xl text-right flex-1">{m.t1}</div>
                <div className="text-gold text-xs tracking-[0.3em] px-3 py-1 border border-gold/40 rounded-full">VS</div>
                <div className="display text-xl flex-1">{m.t2}</div>
              </div>
              <div className="md:col-span-3 text-sm text-muted-foreground flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" />{m.v}</div>
              <div className="md:col-span-1 text-sm text-gold flex items-center gap-2 md:justify-end"><Calendar className="h-4 w-4" />{m.time}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative rounded-3xl overflow-hidden border border-gold/30">
          <img src={trophy} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" width={1280} height={896} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
          <div className="relative p-10 md:p-20 max-w-2xl">
            <h2 className="display text-5xl md:text-7xl">Your <span className="text-gradient-gold">trial</span><br />starts today.</h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Register for trials in your district. Selected players will represent their city franchise in the Bihar T10 League 2026.
            </p>
            <Link to="/register" className="mt-10 inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-8 py-4 rounded-md font-bold tracking-wider shadow-gold">
              REGISTER NOW <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
