import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading, Eyebrow } from "@/components/layout-primitives";
import { CTABand } from "@/components/CTABand";
import { solutions, projects, insights } from "@/data/content";
import heroImage from "@/assets/hero-network.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alfador — Bridging Business and Technology" },
      {
        name: "description",
        content:
          "Alfador builds secure, intelligent and scalable digital infrastructure: IT networks, cloud and DevOps, AI, enterprise automation and cybersecurity.",
      },
      { property: "og:title", content: "Alfador — Bridging Business and Technology" },
      {
        property: "og:description",
        content:
          "Secure, intelligent and scalable technology for modern enterprises — networks, cloud, AI, automation and security.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const principles = [
  {
    title: "Security by default",
    body: "Threat modelling, least privilege and auditability are part of the first design review — never a later phase.",
  },
  {
    title: "Engineering excellence",
    body: "Infrastructure as code, tested pipelines and documented handover. What we build, your team can run.",
  },
  {
    title: "Built to scale",
    body: "Architectures that hold up when the traffic, the headcount and the regulatory scope all triple.",
  },
];

function Home() {
  return (
    <>
      <div className="mesh-bg border-b border-border">
        <Container className="py-20 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rise-in min-w-0">
              <Eyebrow>Bridging business and technology</Eyebrow>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.03] md:text-6xl lg:text-[4.25rem]">
                Secure, intelligent infrastructure for modern enterprises.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Alfador designs and builds the networks, cloud platforms, AI systems and security
                foundations that serious organisations depend on every day.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-7">
                  <Link to="/contact">
                    Talk to an engineer
                    <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-border px-7"
                >
                  <Link to="/solutions">Explore solutions</Link>
                </Button>
              </div>
              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  { v: "99.98%", l: "Average uptime delivered" },
                  { v: "40+", l: "Enterprise deployments" },
                  { v: "24/7", l: "Monitoring & response" },
                ].map((s) => (
                  <div key={s.l} className="min-w-0">
                    <dt className="sr-only">{s.l}</dt>
                    <dd>
                      <span className="block font-display text-2xl font-semibold md:text-3xl">
                        {s.v}
                      </span>
                      <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                        {s.l}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Isometric visualisation of a connected enterprise network"
                width={1280}
                height={960}
                className="w-full rounded-3xl border border-border object-cover shadow-lift"
              />
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Five disciplines, one engineering standard."
          description="Most of our work sits where these areas overlap — a network decision is a security decision, and a cloud decision is a cost decision."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.slug}
              to="/solutions"
              hash={s.slug}
              className="card-hover group rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-navy">
                <s.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <span className="mt-5 inline-flex items-center text-sm font-medium text-navy">
                Learn more
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <div className="bg-navy text-primary-foreground">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
                How we work
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.1] md:text-4xl">
                Engineering discipline you can audit.
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {principles.map((p) => (
                <div key={p.title}>
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground/70" aria-hidden />
                  <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Outcomes, not deliverables."
            description="A sample of recent engagements across financial services, healthcare, logistics and retail."
          />
          <Button asChild variant="outline" className="rounded-full border-border">
            <Link to="/projects">All projects</Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <article
              key={p.slug}
              className="card-hover flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {p.sector}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.outcome}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5">
                {p.metrics.slice(0, 2).map((m) => (
                  <div key={m.label}>
                    <span className="block font-display text-base font-semibold">{m.value}</span>
                    <span className="text-xs text-muted-foreground">{m.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Insights" title="Notes from the build." />
          <Button asChild variant="outline" className="rounded-full border-border">
            <Link to="/insights">Read all</Link>
          </Button>
        </div>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {insights.slice(0, 3).map((post) => (
            <li key={post.slug}>
              <Link
                to="/insights"
                className="group grid gap-2 py-6 transition-colors hover:bg-secondary/50 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:px-3"
              >
                <div className="min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {post.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">{post.readTime}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  );
}
