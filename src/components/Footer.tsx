import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/alfador-logo.png";
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
