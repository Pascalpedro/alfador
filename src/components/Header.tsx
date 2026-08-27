import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/projects", label: "Projects" },
  { to: "/insights", label: "Insights" },
] as const;

const contact = {
  phone: "+234-803-914-5668",
  phoneHref: "tel:+2348039145668",
  email: "alfador.info@gmail.com",
  emailHref: "mailto:alfador.info@gmail.com",
} as const;

const social = [
  { label: "X (Twitter)", icon: X, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-navy text-white">
        <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-5 lg:px-8">
          {/* Contact Info */}
          <div className="flex h-full items-center divide-x divide-white/20">
            <a
              href={contact.phoneHref}
              className="flex h-full items-center gap-2 px-3 text-xs font-medium text-white/90 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{contact.phone}</span>
              <span className="sm:hidden">Phone</span>
            </a>
            <a
              href={contact.emailHref}
              className="flex h-full items-center gap-2 px-3 text-xs font-medium text-white/90 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{contact.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex h-full items-center divide-x divide-white/20 border-l border-white/20">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="grid h-full w-10 place-items-center text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-10 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
          <Logo />

          <div className="flex items-center gap-1">
            <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-foreground bg-secondary" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button asChild size="sm" className="ml-2 hidden rounded-full px-5 md:inline-flex">
              <Link to="/contact">Contact</Link>
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav aria-label="Mobile" className="border-t border-border bg-background px-5 py-3 md:hidden">
            <ul className="flex flex-col">
              {[...nav, { to: "/contact", label: "Contact" } as const].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-foreground" }}
                    inactiveProps={{ className: "text-muted-foreground" }}
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
    </>
  );
}
