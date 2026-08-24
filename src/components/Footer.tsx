import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import lockup from "@/assets/alfador-lockup.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
              <img
                src={lockup}
                alt="Alfador Technologies Ltd — Bridging business and technology"
                width={627}
                height={406}
                loading="lazy"
                className="w-full max-w-xs"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Bridging the gaps between your business and technology — secure, intelligent and
              scalable digital infrastructure for modern enterprises.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { to: "/about", label: "About" },
                { to: "/solutions", label: "Solutions" },
                { to: "/projects", label: "Projects" },
                { to: "/insights", label: "Insights" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <a className="hover:text-primary-foreground" href="mailto:hello@alfador.tech">
                  hello@alfador.tech
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <a className="hover:text-primary-foreground" href="tel:+2348000000000">
                  +234 800 000 0000
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>Lagos, Nigeria — remote-first across EMEA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Alfador Technologies Ltd. All rights reserved.</p>
          <p>Alfador Technologies Ltd — registered technology company.</p>
        </div>
      </div>
    </footer>
  );
}
