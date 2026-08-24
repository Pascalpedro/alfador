import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero, Section } from "@/components/layout-primitives";
import { CTABand } from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { solutions } from "@/data/content";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Network, Cloud, Security, Managed IT & AI | Alfador" },
      {
        name: "description",
        content:
          "Explore Alfador solutions: network infrastructure, cloud infrastructure, business security & compliance, managed IT services, AI & business automation, power & energy infrastructure, and strategic technology advisory.",
      },
      { property: "og:title", content: "Alfador Solutions" },
      {
        property: "og:description",
        content:
          "Network infrastructure, cloud infrastructure, business security, managed IT, AI automation, power & energy, and strategic technology advisory.",
      },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: Solutions,
});

const ctaMap: Record<
  string,
  { label: string; variant: "default" | "accent" }
> = {
  network: { label: "Request an Infrastructure Audit", variant: "default" },
  cloud: { label: "Request an Infrastructure Audit", variant: "default" },
  security: { label: "Request an Infrastructure Audit", variant: "default" },
  "managed-it": {
    label: "Schedule an Efficiency Assessment",
    variant: "default",
  },
  automation: {
    label: "Schedule an Efficiency Assessment",
    variant: "default",
  },
  power: { label: "Request an Infrastructure Audit", variant: "default" },
  advisory: {
    label: "Book a Strategic Roadmap Session",
    variant: "accent",
  },
};

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Enterprise technology capabilities, delivered as one integrated system."
        description="From network foundations and cloud platforms to AI automation, physical security, and strategic advisory — every service is designed to work together."
      />

      <Section className="pb-6 pt-10 md:pt-14">
        <nav
          aria-label="Solutions quick navigation"
          className="flex flex-wrap gap-2 md:gap-3"
        >
          {solutions.map((s) => (
            <Link
              key={s.slug}
              to="/solutions"
              hash={s.anchor}
              className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-electric hover:text-electric md:text-sm"
            >
              {s.title}
            </Link>
          ))}
        </nav>
      </Section>

      {solutions.map((s, i) => {
        const cta = ctaMap[s.anchor];
        const isSurface = i % 2 === 1;

        return (
          <Section
            key={s.slug}
            id={s.anchor}
            className={`scroll-mt-24 ${isSurface ? "bg-surface" : "bg-background"}`}
          >
            <div className="mx-auto max-w-5xl">
              {/* Section header */}
              <div className="flex items-start gap-4 md:gap-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ink text-electric shadow-soft md:h-14 md:w-14">
                  <s.icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
                </span>
                <div className="min-w-0">
                  <span className="font-display text-sm font-semibold text-muted-foreground">
                    0{i + 1}
                  </span>
                  <h2 className="mt-1 text-3xl font-semibold leading-tight md:text-4xl">
                    {s.title}
                  </h2>
                </div>
              </div>

              {s.tagline && (
                <p className="mt-4 max-w-3xl text-lg italic leading-relaxed text-electric md:text-xl">
                  {s.tagline}
                </p>
              )}

              {s.description && (
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {s.description}
                </p>
              )}

              {/* Core offerings */}
              <div className="mt-12">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {s.offeringsLabel || "Core Offerings"}
                </h3>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {s.offerings?.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8"
                    >
                      <h4 className="text-lg font-semibold leading-snug md:text-xl">
                        {group.title}
                      </h4>
                      {group.description && (
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                          {group.description}
                        </p>
                      )}
                      <ul className="mt-5 space-y-3">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-relaxed md:text-base"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-electric"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className={
                    cta.variant === "accent"
                      ? "rounded-full bg-electric px-8 text-electric-foreground hover:bg-electric/90"
                      : "rounded-full bg-ink px-8 text-white hover:bg-ink/90"
                  }
                >
                  <Link to="/contact">{cta.label}</Link>
                </Button>
                <span className="text-sm text-muted-foreground">
                  No commitment required. We&apos;ll reply within one business day.
                </span>
              </div>
            </div>
          </Section>
        );
      })}

      <CTABand title="Not sure which capability you need?" />
    </>
  );
}
