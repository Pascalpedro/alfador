import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/layout-primitives";
import { CTABand } from "@/components/CTABand";
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

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Infrastructure, intelligence and defence — engineered together."
        description="Each capability stands on its own, but the value compounds when they're designed as one system with shared identity, telemetry and delivery pipelines."
      />

      <Section>
        <div className="space-y-8">
          {solutions.map((s, i) => (
            <article
              key={s.slug}
              id={s.anchor}
              className="card-hover scroll-mt-24 rounded-3xl border border-border bg-card p-7 shadow-soft md:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-navy">
                      <s.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-display text-sm font-semibold text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight md:text-3xl">
                    {s.title}
                  </h2>
                  {s.tagline && (
                    <p className="mt-2 text-base font-medium text-electric">
                      {s.tagline}
                    </p>
                  )}
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {s.description || s.summary}
                  </p>
                </div>

                <div className="space-y-6 md:content-center">
                  {s.offerings && (
                    <>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {s.offeringsLabel || "Core Offerings"}
                      </h3>
                      <div className="grid gap-6 sm:grid-cols-2">
                        {s.offerings.map((group) => (
                          <div key={group.title} className="space-y-3">
                            <h4 className="font-semibold leading-snug">
                              {group.title}
                            </h4>
                            {group.description && (
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {group.description}
                              </p>
                            )}
                            <ul className="space-y-2">
                              {group.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2.5 text-sm leading-relaxed"
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
                    </>
                  )}

                  {!s.offerings && (
                    <ul className="grid gap-3 sm:grid-cols-2 md:content-center">
                      {s.capabilities.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2.5 text-sm leading-relaxed"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-electric"
                            aria-hidden
                          />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          align="center"
          eyebrow="Engagement models"
          title="Work with us the way that fits."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Advisory",
              d: "Architecture reviews, security assessments and roadmaps with costed options.",
            },
            {
              t: "Build",
              d: "Dedicated delivery squads embedded alongside your engineers until it's in production.",
            },
            {
              t: "Managed",
              d: "Ongoing monitoring, patching, detection and response after go-live.",
            },
          ].map((m) => (
            <div key={m.t} className="rounded-2xl border border-border bg-secondary/50 p-7">
              <h3 className="text-lg font-semibold">{m.t}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand title="Not sure which capability you need?" />
    </>
  );
}
