import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/layout-primitives";
import { CTABand } from "@/components/CTABand";
import { projects } from "@/data/content";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Enterprise technology case studies | Alfador" },
      {
        name: "description",
        content:
          "Case studies from Alfador engagements: network modernisation, regulated cloud landing zones, AI assistants, SOC uplift and enterprise automation.",
      },
      { property: "og:title", content: "Alfador Projects" },
      {
        property: "og:description",
        content:
          "Network modernisation, cloud landing zones, AI assistants, security operations and automation — with measured outcomes.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work that held up in production."
        description="Client names are withheld under NDA, but the architectures, constraints and measured results are real."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="card-hover flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft md:p-9"
            >
              <div className="flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-navy"
                  >
                    {t}
                  </span>
                ))}
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {p.sector}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-semibold leading-snug md:text-2xl">{p.title}</h2>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Challenge — </span>
                  {p.challenge}
                </p>
                <p>
                  <span className="font-semibold text-foreground">What we did — </span>
                  {p.outcome}
                </p>
              </div>

              <dl className="mt-auto grid grid-cols-3 gap-4 border-t border-border pt-6 [margin-top:1.75rem]">
                {p.metrics.map((m) => (
                  <div key={m.label} className="min-w-0">
                    <dt className="text-xs text-muted-foreground">{m.label}</dt>
                    <dd className="mt-1 font-display text-lg font-semibold leading-tight">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <CTABand title="Your project could be the next one here." />
    </>
  );
}
