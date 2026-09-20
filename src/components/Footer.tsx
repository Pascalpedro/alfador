import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import lockup from "@/assets/alfador-lockup.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="min-w-0">
            <img
              src={lockup}
              alt="Alfador Integrated Systems — Bridging business and technology"
              width={627}
              height={406}
              loading="lazy"
              className="h-auto w-72 max-w-full md:w-80"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Bridging the gaps between your business and technology.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">Company</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { to: "/about", label: "About", disabled: false },
                { to: "/solutions", label: "Solutions", disabled: false },
                { to: "/projects", label: "Projects", disabled: true },
                { to: "/insights", label: "Insights", disabled: true },
                { to: "/contact", label: "Contact", disabled: false },
              ].map((l) => (
                <li key={l.to}>
                  {l.disabled ? (
                    <span
                      aria-disabled="true"
                      className="cursor-not-allowed select-none text-primary-foreground/40"
                    >
                      {l.label}
                    </span>
                  ) : (
                    <Link
                      to={l.to}
                      className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {l.label}
                    </Link>
                  )}
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
                <a className="hover:text-primary-foreground" href="mailto:alfador.info@gmail.com">
                  alfador.info@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <a className="hover:text-primary-foreground" href="tel:+2348039145668">
                  +234 803 914 5668
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
          <p>© {new Date().getFullYear()} Alfador Integrated Systems. All rights reserved.</p>
          <p>Alfador Integrated Systems — registered technology company.</p>
        </div>
      </div>
    </footer>
  );
}
