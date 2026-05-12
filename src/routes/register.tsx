import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/register")({
  component: Register,
  head: () => ({
    meta: [
      { title: "Register — Bihar T10 League 2026" },
      { name: "description", content: "Register for Bihar T10 League 2026 trials. Open to players, coaches and franchise applicants across Bihar." },
    ],
  }),
});

function Register() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-xs tracking-[0.3em] text-gold mb-4">PLAYER REGISTRATION</div>
        <h1 className="display text-6xl md:text-7xl mb-4">Take the <span className="text-gradient-gold">field.</span></h1>
        <p className="text-muted-foreground text-lg max-w-2xl">Fill in your details below to register for the district trial nearest to you. Selected players will progress to franchise drafts.</p>

        {submitted ? (
          <div className="mt-12 bg-card border border-gold/40 rounded-2xl p-12 text-center">
            <CheckCircle2 className="h-16 w-16 text-gold mx-auto mb-6" />
            <h2 className="display text-4xl mb-3">Registration received.</h2>
            <p className="text-muted-foreground">We'll email your trial schedule and venue within 7 days.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="mt-12 bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full Name" name="name" required />
              <Field label="Date of Birth" name="dob" type="date" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="District" name="district" required />
              <Select label="Preferred Role" name="role" options={["Batter", "Bowler", "All-rounder", "Wicketkeeper"]} required />
              <Select label="Batting Style" name="bat" options={["Right-hand", "Left-hand"]} />
              <Select label="Bowling Style" name="bowl" options={["Right-arm Fast", "Right-arm Medium", "Right-arm Spin", "Left-arm Fast", "Left-arm Spin", "None"]} />
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] text-muted-foreground mb-2">EXPERIENCE</label>
              <textarea name="exp" rows={4} className="w-full bg-input/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold" placeholder="Tournaments played, achievements..." />
            </div>
            <button type="submit" className="w-full bg-gradient-gold text-gold-foreground py-4 rounded-md font-bold tracking-wider shadow-gold hover:opacity-95">
              SUBMIT REGISTRATION
            </button>
          </form>
        )}
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs tracking-[0.2em] text-muted-foreground mb-2">{label.toUpperCase()}</label>
      <input name={name} type={type} required={required} className="w-full bg-input/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold" />
    </div>
  );
}

function Select({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs tracking-[0.2em] text-muted-foreground mb-2">{label.toUpperCase()}</label>
      <select name={name} required={required} className="w-full bg-input/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold">
        <option value="">Select...</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
