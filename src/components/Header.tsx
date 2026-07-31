import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/projects", label: "Projects" },
  { to: "/insights", label: "Insights" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary-foreground/10 bg-ink/95 text-primary-foreground backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <Logo />

        <div className="flex items-center gap-1">
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary-foreground bg-primary-foreground/10" }}
                inactiveProps={{ className: "text-primary-foreground/65" }}
                className="rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            asChild
            size="sm"
            className="ml-2 hidden rounded-full bg-electric px-5 text-electric-foreground hover:bg-electric/90 md:inline-flex"
          >
            <Link to="/contact">Contact</Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary-foreground/25 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-primary-foreground/10 bg-ink px-5 py-3 text-primary-foreground md:hidden"
        >
          <ul className="flex flex-col">
            {[...nav, { to: "/contact", label: "Contact" } as const].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary-foreground" }}
                  inactiveProps={{ className: "text-primary-foreground/65" }}
                  className="block rounded-lg px-2 py-3 text-base font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
