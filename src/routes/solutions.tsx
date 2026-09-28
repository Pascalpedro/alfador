import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Section } from "@/components/layout-primitives";
import { CTABand } from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { solutions } from "@/data/content";
import solutionsHero from "@/assets/solutions-hero.jpg";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Network, Cloud, Security, Managed IT & AI | Alfador" },
      {
        name: "description",
        content:
          "Explore Alfador solutions: network infrastructure, cloud infrastructure, business security & compliance, managed IT services, AI & business automation, smart spaces & energy infrastructure, and strategic technology advisory.",
      },
      { property: "og:title", content: "Alfador Solutions" },
      {
        property: "og:description",
        content:
          "Network infrastructure, cloud infrastructure, business security, managed IT, AI automation, smart spaces & energy infrastructure, and strategic technology advisory.",
      },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: Solutions,
});

const ctaMap: Record<string, { label: string; variant: "default" | "accent" }> = {
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
  "smart-spaces": { label: "Request an Infrastructure Audit", variant: "default" },
  advisory: {
    label: "Book a Strategic Roadmap Session",
    variant: "accent",
  },
};

function Solutions() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-ink">
        <img
          src={solutionsHero}
          alt="Enterprise technology systems diagram surrounded by connected cloud and infrastructure graphics"
          className="absolute inset-0 h-full w-full object-cover object-[center_right]"
          loading="eager"
          decoding="async"
        />
        {/* Readability overlay: deep navy on the left, transparent over the graphics on the right */}
        <div className="absolute inset-0 bg-ink/70 md:bg-transparent" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20 md:via-ink/70 md:to-transparent"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20" aria-hidden />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24 lg:py-28">
          <div className="flex justify-start">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-sm">
              Solutions
            </span>
          </div>
          <div className="mt-6 max-w-full text-white md:max-w-[40%]">
            <h1 className="text-4xl font-semibold leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Enterprise Technology Solutions
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
              <span className="font-bold text-white">Engineered as a single, cohesive system.</span>
              <span className="mt-2 block">
                From core technical infrastructure to strategic advisory, every layer is designed to run seamlessly,
                reduce costs, and protect your assets.
              </span>
            </p>
          </div>
        </div>
      </div>

      <Section className="!pb-5 !pt-8 md:!pt-10">
        <nav aria-label="Solutions quick navigation" className="flex flex-wrap gap-2 md:gap-3">
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
            className={`scroll-mt-24 !py-14 md:!py-20 ${isSurface ? "bg-surface" : "bg-background"}`}
          >
            <div className="mx-auto max-w-5xl">
              {/* Section header */}
              <div className="flex items-start gap-4 md:gap-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ink text-electric shadow-soft md:h-14 md:w-14">
                  <s.icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
                </span>
                <div className="min-w-0">
                  <span className="font-display text-sm font-semibold text-muted-foreground">0{i + 1}</span>
                  <h2 className="mt-1 text-3xl font-semibold leading-tight md:text-4xl">{s.title}</h2>
                </div>
              </div>

              {s.tagline && (
                <p className="mt-4 max-w-3xl text-lg italic leading-relaxed text-electric md:text-xl">{s.tagline}</p>
              )}

              {s.description && (
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {s.description}
                </p>
              )}

              {/* Core offerings */}
              <div className="mt-9">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {s.offeringsLabel || "Core Offerings"}
                </h3>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {s.offerings?.map((group) => (
                    <div key={group.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
                      <h4 className="text-lg font-semibold leading-snug md:text-xl">{group.title}</h4>
                      {group.description && (
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                          {group.description}
                        </p>
                      )}
                      <ul className="mt-5 space-y-3">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed md:text-base">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
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
