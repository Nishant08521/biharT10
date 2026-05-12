import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Target, Eye, Heart } from "lucide-react";
import crowd from "@/assets/crowd.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Bihar T10 League 2026" },
      { name: "description", content: "Learn about the vision, mission and story behind Bihar T10 League — Bihar's first city-franchise tennis-ball cricket league." },
    ],
  }),
});

function About() {
  return (
    <Layout>
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src={crowd} alt="" className="h-full w-full object-cover opacity-25" width={1600} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="text-xs tracking-[0.3em] text-gold mb-6">ABOUT THE LEAGUE</div>
          <h1 className="display text-6xl md:text-8xl">Bihar's <span className="text-gradient-gold">cricket</span> revolution.</h1>
          <p className="mt-8 text-lg text-muted-foreground">
            Bihar T10 League is a professional, city-franchise tennis-ball cricket tournament built to give every gully cricketer in Bihar a stage worthy of their talent.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-3 gap-6">
        {[
          { icon: Eye, t: "Our Vision", d: "Make Bihar the most exciting tennis-ball cricket destination in India." },
          { icon: Target, t: "Our Mission", d: "Build a transparent, professional pathway from district pitches to the national stage." },
          { icon: Heart, t: "Our Promise", d: "Fair selection, world-class production and pride for every city we play in." },
        ].map((c) => (
          <div key={c.t} className="bg-card border border-border rounded-2xl p-8">
            <c.icon className="h-8 w-8 text-gold mb-6" />
            <h3 className="display text-3xl mb-3">{c.t}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 prose-invert">
        <h2 className="display text-5xl mb-8">The story.</h2>
        <div className="space-y-6 text-foreground/90 text-lg leading-relaxed">
          <p>For decades, the lanes and maidans of Bihar have produced incredible cricketers — yet most never found a stage. Bihar T10 changes that with a structured, eight-city franchise league played in a fast, broadcast-friendly T10 format using tennis ball cricket — the format Bihar plays best.</p>
          <p>Every match is 10 overs a side. Every game finishes in 90 minutes. Every player gets a fair shot through district trials. And every city — from Patna to Purnia — fields a team to call its own.</p>
          <p>This isn't just a tournament. It's the first chapter in a long-overdue story.</p>
        </div>
      </section>
    </Layout>
  );
}
