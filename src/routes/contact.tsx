import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Bihar T10 League 2026" },
      { name: "description", content: "Get in touch with the Bihar T10 League team for franchise enquiries, sponsorship, partnerships and media." },
    ],
  }),
});

function Contact() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-xs tracking-[0.3em] text-gold mb-4">GET IN TOUCH</div>
        <h1 className="display text-6xl md:text-8xl mb-4">Let's <span className="text-gradient-gold">talk.</span></h1>
        <p className="text-muted-foreground text-lg max-w-2xl">Franchise enquiries, sponsorship, media or partnerships — reach the Bihar T10 League team directly.</p>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {[
            { icon: Mail, t: "Email", d: "info@bihart10league.com", h: "mailto:info@bihart10league.com" },
            { icon: Phone, t: "Phone", d: "+91 90000 00000", h: "tel:+919000000000" },
            { icon: MapPin, t: "Office", d: "Patna, Bihar, India" },
            { icon: Instagram, t: "Instagram", d: "@bihart10league", h: "https://www.instagram.com/bihart10league" },
          ].map((c) => (
            <a key={c.t} href={c.h ?? "#"} target={c.h?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group bg-card border border-border rounded-2xl p-8 flex items-start gap-5 hover:border-gold/60 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center text-gold-foreground shrink-0">
                <c.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="display text-2xl">{c.t}</div>
                <div className="text-muted-foreground mt-1 group-hover:text-gold transition-colors">{c.d}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
