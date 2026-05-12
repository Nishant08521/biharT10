import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/teams", label: "Franchises" },
  { to: "/match-center", label: "Match Center" },
  { to: "/schedule", label: "Schedule" },
  { to: "/register", label: "Register" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Bihar T10 League" className="h-14 w-auto object-contain" width={56} height={56} />
          <div className="leading-tight hidden sm:block">
            <div className="display text-xl text-gold">BIHAR T10</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground">LEAGUE 2026</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium tracking-wide text-foreground/80 hover:text-gold transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-medium tracking-wide text-gold" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/register"
            className="ml-4 inline-flex items-center bg-gradient-gold text-gold-foreground px-5 py-2.5 rounded-md font-bold text-sm tracking-wider hover:opacity-90 shadow-gold"
          >
            JOIN NOW
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md hover:bg-secondary text-foreground/90"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
