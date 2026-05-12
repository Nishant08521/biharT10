import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useState } from "react";
import { CheckCircle2, CreditCard, Loader2 } from "lucide-react";

export const Route = createFileRoute("/register")({
  component: Register,
  head: () => ({
    meta: [
      { title: "Register — Bihar T10 League 2026" },
      { name: "description", content: "Register for Bihar T10 League 2026 trials. Open to players, coaches and franchise applicants across Bihar." },
    ],
  }),
});

const SKILLS = [
  { id: "batsman", label: "Batsman", price: 999 },
  { id: "bowler", label: "Bowler", price: 999 },
  { id: "allrounder", label: "All-rounder", price: 1399 },
] as const;

const PAYU_INVOICE_URL =
  "https://payu.in/invoice/CD871AA90315CA4DE7EA836A2350FF7E7E7188F585220534625FAFB9C5BA7A91/E071194614C688C4154A2CE54512FAD7";

function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [skill, setSkill] = useState<string>("batsman");
  const [loading, setLoading] = useState(false);

  const selected = SKILLS.find((s) => s.id === skill) ?? SKILLS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Persist registration intent locally before redirecting to PayU
    try {
      const data = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries());
      localStorage.setItem("bt10_registration", JSON.stringify({ ...data, amount: selected.price, ts: Date.now() }));
    } catch {}
    setSubmitted(true);
    // Redirect to PayU hosted invoice for payment
    window.location.href = PAYU_INVOICE_URL;
  };

  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-xs tracking-[0.3em] text-gold mb-4">PLAYER REGISTRATION</div>
        <h1 className="display text-6xl md:text-7xl mb-4">Take the <span className="text-gradient-gold">field.</span></h1>
        <p className="text-muted-foreground text-lg max-w-2xl">Fill in your details below and pay the registration fee securely via PayU. Selected players will progress to franchise drafts.</p>

        {submitted ? (
          <div className="mt-12 bg-card border border-gold/40 rounded-2xl p-12 text-center">
            <Loader2 className="h-12 w-12 text-gold mx-auto mb-6 animate-spin" />
            <h2 className="display text-4xl mb-3">Redirecting to payment…</h2>
            <p className="text-muted-foreground mb-6">You're being taken to PayU's secure payment page to complete your ₹{selected.price} registration.</p>
            <a href={PAYU_INVOICE_URL} className="inline-flex items-center gap-2 text-gold underline">
              Click here if not redirected
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full Name" name="name" required />
              <Field label="Date of Birth" name="dob" type="date" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="District" name="district" required />
              <Select label="Batting Style" name="bat" options={["Right-hand", "Left-hand"]} />
            </div>

            <div>
              <label className="block text-xs tracking-[0.2em] text-muted-foreground mb-3">SKILL <span className="text-gold">*</span></label>
              <div className="grid sm:grid-cols-3 gap-3">
                {SKILLS.map((s) => (
                  <label
                    key={s.id}
                    className={`cursor-pointer border rounded-lg p-4 transition-all ${
                      skill === s.id
                        ? "border-gold bg-gold/10 shadow-gold"
                        : "border-border bg-input/30 hover:border-gold/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="skill"
                      value={s.id}
                      checked={skill === s.id}
                      onChange={() => setSkill(s.id)}
                      className="sr-only"
                    />
                    <div className="font-bold">{s.label}</div>
                    <div className="text-gold text-lg font-semibold mt-1">₹{s.price}</div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-[0.2em] text-muted-foreground mb-2">EXPERIENCE</label>
              <textarea name="exp" rows={4} className="w-full bg-input/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold" placeholder="Tournaments played, achievements..." />
            </div>

            <div className="flex items-center justify-between bg-input/30 border border-border rounded-md px-4 py-3">
              <div className="text-sm text-muted-foreground">Total Registration Fee</div>
              <div className="display text-2xl text-gold">₹{selected.price}</div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-gold text-gold-foreground py-4 rounded-md font-bold tracking-wider shadow-gold hover:opacity-95 disabled:opacity-60 inline-flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <CreditCard className="h-5 w-5" />}
              PAY ₹{selected.price} & REGISTER
            </button>
            <p className="text-[11px] text-center text-muted-foreground">Secure payment powered by PayU. You'll be redirected to complete payment.</p>
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
