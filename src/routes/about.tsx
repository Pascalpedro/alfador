import { createFileRoute } from "@tanstack/react-router";
import { Compass, HeartHandshake, Rocket, ShieldCheck } from "lucide-react";
import { PageHero, Section, SectionHeading, Container } from "@/components/layout-primitives";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Alfador — Engineering-led technology partner" },
      {
        name: "description",
        content:
          "Alfador Integrated Systems is an engineering-led technology company helping organisations transform with secure, reliable and scalable systems.",
      },
      { property: "og:title", content: "About Alfador" },
      {
        property: "og:description",
        content:
          "An engineering-led technology partner building secure, reliable and scalable systems for modern organisations.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Security is non-negotiable",
    body: "Every architecture we sign off assumes compromise and is designed to contain it.",
  },
  {
    icon: Compass,
    title: "Clarity over jargon",
    body: "We explain trade-offs in business terms so decisions are made by the people accountable for them.",
  },
  {
    icon: Rocket,
    title: "Ship, then improve",
    body: "Small, reversible increments beat eighteen-month programmes that land all at once.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership, not dependency",
    body: "We document, train and hand over. Success is your team running it confidently without us.",
  },
];

const timeline = [
  { year: "Discover", body: "Architecture review, risk assessment and a prioritised roadmap with costs attached." },
  { year: "Design", body: "Target-state design, security controls and a migration path your team signs off on." },
  { year: "Deliver", body: "Incremental build with infrastructure as code, testing gates and no big-bang cutover." },
  { year: "Operate", body: "Monitoring, runbooks, training and optional managed support after handover." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Alfador"
        title="We build the systems businesses quietly depend on."
        description="Alfador is a modern technology company designing secure, intelligent and scalable digital solutions across network infrastructure, cloud, artificial intelligence, automation and cybersecurity."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our mission"
              title="Help organisations transform without trading away security or reliability."
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Too many transformation programmes deliver a demo and leave behind an estate nobody
              wants to operate. We take the opposite approach: understand the business constraint
              first, then engineer the smallest reliable system that removes it.
            </p>
            <p>
              Our teams come from network operations, cloud platform engineering, security
              operations and applied machine learning. That mix means a single group can own a
              problem end to end — from the cabling and the landing zone to the model evaluation
              and the incident runbook.
            </p>
            <p>
              Alfador Integrated Systems works with financial services, healthcare, logistics,
              manufacturing and public sector organisations that operate under real regulatory
              scrutiny.
            </p>
          </div>
        </div>
      </Section>

      <div className="bg-secondary/60">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="What we value" title="Four commitments we hold ourselves to." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-navy">
                  <v.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Section>
        <SectionHeading
          eyebrow="How engagements run"
          title="A predictable path from problem to production."
        />
        <ol className="mt-14 grid gap-8 md:grid-cols-4">
          {timeline.map((t, i) => (
            <li key={t.year} className="border-t-2 border-navy/15 pt-5">
              <span className="font-display text-sm font-semibold text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{t.year}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CTABand
        title="Want to see how we'd approach your estate?"
        description="Share the context and we'll come back with an honest read on scope, sequencing and risk."
      />
    </>
  );
}
