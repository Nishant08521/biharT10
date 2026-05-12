import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import affiliated from "@/assets/affiliated.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-ink/60">
      <div className="h-1 stripe-divider" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-14 w-auto" width={56} height={56} loading="lazy" />
            <div>
              <div className="display text-xl text-gold">BIHAR T10</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground">LEAGUE 2026</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            The first professional city-based franchise league bringing Bihar's tennis-ball talent to the national stage.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <img src={affiliated} alt="Affiliated to ISPL" className="h-20 w-20 object-contain" width={80} height={80} loading="lazy" />
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground leading-relaxed">
              OFFICIALLY<br />AFFILIATED
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.2em] text-gold mb-4">EXPLORE</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/teams" className="hover:text-gold">Franchises</Link></li>
            <li><Link to="/schedule" className="hover:text-gold">Schedule</Link></li>
            <li><Link to="/register" className="hover:text-gold">Register</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.2em] text-gold mb-4">CONTACT</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /><span>Patna, Bihar, India</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /><span>info@bihart10league.com</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.2em] text-gold mb-4">FOLLOW</h4>
          <div className="flex gap-3">
            <a aria-label="Instagram" href="https://www.instagram.com/bihart10league" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-gradient-gold hover:text-gold-foreground transition-all"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Facebook" href="#" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-gradient-gold hover:text-gold-foreground transition-all"><Facebook className="h-4 w-4" /></a>
            <a aria-label="Twitter" href="#" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-gradient-gold hover:text-gold-foreground transition-all"><Twitter className="h-4 w-4" /></a>
            <a aria-label="YouTube" href="#" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-gradient-gold hover:text-gold-foreground transition-all"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2026 Bihar T10 League. All rights reserved.
      </div>
    </footer>
  );
}
