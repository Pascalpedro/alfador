import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout-primitives";
import { CTABand } from "@/components/CTABand";
import { solutions, projects, insights } from "@/data/content";
import heroImage from "@/assets/hero-network.jpg";
import lockup from "@/assets/alfador-lockup.png.asset.json";

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

const benefits = [
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

const engagements = [
  {
    name: "Advisory",
    blurb: "Architecture reviews, security posture assessments and a costed roadmap you can act on.",
    price: "2–4 weeks",
    items: [
      "Current-state architecture review",
      "Risk and security assessment",
      "Prioritised technology roadmap",
      "Executive readout and costings",
    ],
  },
  {
    name: "Build",
    blurb: "A dedicated engineering squad delivering the platform end to end, with handover baked in.",
    price: "3–9 months",
    items: [
      "Dedicated delivery squad",
      "Infrastructure as code from day one",
      "CI/CD, monitoring and runbooks",
      "Documented team handover",
    ],
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <div className="bg-surface">
        <Container className="py-16 text-center md:py-24">
          <div className="rise-in mx-auto max-w-3xl">
            <img
              src={lockup.url}
              alt="Alfador — Bridging business and technology"
              width={627}
              height={406}
              className="mx-auto mb-8 w-40 rounded-2xl shadow-soft md:w-48"
            />
            <h1 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
              Bridging the gaps between your business and{" "}
              <span className="text-electric">technology</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Alfador designs and builds the networks, cloud platforms, AI systems and security
              foundations that serious organisations depend on every day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-electric px-7 text-electric-foreground hover:bg-electric/90"
              >
                <Link to="/contact">
                  Talk to an engineer
                  <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                <Link to="/solutions">Explore solutions</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-col items-center gap-1">
              <div className="flex items-center gap-1.5">
                <span className="flex" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-electric text-electric" />
                  ))}
                </span>
                <span className="text-sm font-semibold">5.0</span>
              </div>
              <p className="text-xs text-muted-foreground">from 40+ enterprise deployments</p>
            </div>
          </div>

          {/* Bento stat row */}
          <div className="mt-14 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-5">
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={heroImage}
                alt="Isometric visualisation of a connected enterprise network"
                width={640}
                height={800}
                loading="lazy"
                className="h-52 w-full object-cover lg:h-full"
              />
            </div>
            <div className="rounded-3xl bg-ink p-7 text-primary-foreground">
              <span className="font-display text-4xl font-semibold">99.98%</span>
              <p className="mt-3 text-sm leading-snug text-primary-foreground/70">
                Average uptime delivered across managed estates
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Deployments
              </span>
              <p className="mt-4 font-display text-4xl font-semibold">40+</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Enterprise programmes shipped across EMEA
              </p>
            </div>
            <div className="rounded-3xl bg-accent p-7">
              <span className="font-display text-4xl font-semibold">6+</span>
              <p className="mt-3 text-sm leading-snug text-navy/70">
                Years of dedicated infrastructure engineering
              </p>
            </div>
            <div className="rounded-3xl bg-ink p-7 text-primary-foreground">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-electric">
                <Check className="h-5 w-5 text-electric-foreground" aria-hidden />
              </span>
              <p className="mt-4 text-sm leading-snug text-primary-foreground/80">
                24/7 monitoring and response, with runbooks your team owns.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Services — dark */}
      <div className="bg-ink text-primary-foreground">
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold leading-[1.15] md:text-4xl">
              Secure and integrated technology services
            </h2>
            <p className="mt-4 text-primary-foreground/70">
              Most of our work sits where these areas overlap — a network decision is a security
              decision, and a cloud decision is a cost decision.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <Link
                key={s.slug}
                to="/solutions"
                hash={s.slug}
                className="group rounded-2xl border border-primary-foreground/15 p-7 transition-colors hover:border-electric hover:bg-primary-foreground/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <s.icon className="h-6 w-6 text-electric" aria-hidden />
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-primary-foreground/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-10 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
                  {s.summary}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Benefits — light split */}
      <Section className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft md:p-10">
            <div className="space-y-4">
              {projects.slice(0, 3).map((p) => (
                <div
                  key={p.slug}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {p.sector}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold leading-snug">{p.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {p.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <span className="block font-display text-base font-semibold text-electric">
                          {m.value}
                        </span>
                        <span className="text-xs text-muted-foreground">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="text-3xl font-semibold leading-[1.15] md:text-4xl">
              Key benefits of our engineering standard
            </h2>
            <p className="mt-4 text-muted-foreground">
              Outcomes, not deliverables — infrastructure your team can audit, run and grow into.
            </p>
            <ul className="mt-8 space-y-6">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-electric">
                    <Check className="h-3.5 w-3.5 text-electric-foreground" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-8 rounded-full">
              <Link to="/projects">See all projects</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Engagements — dark */}
      <div className="bg-ink text-primary-foreground">
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold leading-[1.15] md:text-4xl">
              Engagement models that fit your scale
            </h2>
            <p className="mt-4 text-primary-foreground/70">
              Flexible ways to work with our engineering team.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
            {engagements.map((e) => (
              <div key={e.name} className="rounded-3xl bg-ink-soft p-7">
                <h3 className="text-lg font-semibold">{e.name}</h3>
                <p className="mt-2 text-sm text-primary-foreground/60">{e.blurb}</p>
                <p className="mt-6 font-display text-3xl font-semibold">
                  {e.price}
                  <span className="ml-1 text-sm font-normal text-primary-foreground/50">
                    typical
                  </span>
                </p>
                <Button
                  asChild
                  className="mt-6 w-full rounded-full bg-electric text-electric-foreground hover:bg-electric/90"
                >
                  <Link to="/contact">Get started</Link>
                </Button>
                <ul className="mt-6 space-y-3 border-t border-primary-foreground/15 pt-6">
                  {e.items.map((i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-primary-foreground/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-4 max-w-4xl rounded-3xl border border-electric/40 bg-electric/10 p-7 text-center">
            <h3 className="text-lg font-semibold">Managed</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-primary-foreground/70">
              Ongoing operations, monitoring and 24/7 response for the platforms we build — or the
              ones you already run.
            </p>
            <Button
              asChild
              className="mt-5 rounded-full bg-electric px-7 text-electric-foreground hover:bg-electric/90"
            >
              <Link to="/contact">Talk to us</Link>
            </Button>
          </div>
        </Container>
      </div>

      {/* Insights — light */}
      <Section className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="min-w-0">
            <h2 className="text-3xl font-semibold leading-[1.15] md:text-4xl">
              Notes from the build
            </h2>
            <p className="mt-4 text-muted-foreground">
              Field notes on zero trust, cloud guardrails, applied AI and the unglamorous work that
              keeps enterprise platforms standing up.
            </p>
            <Button
              asChild
              className="mt-7 rounded-full bg-electric px-7 text-electric-foreground hover:bg-electric/90"
            >
              <Link to="/insights">Read insights</Link>
            </Button>
          </div>
          <ul className="divide-y divide-border rounded-3xl border border-border bg-surface p-2">
            {insights.slice(0, 4).map((post) => (
              <li key={post.slug}>
                <Link
                  to="/insights"
                  className="group grid gap-1 rounded-2xl p-5 transition-colors hover:bg-card sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6"
                >
                  <div className="min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-electric">
                      {post.category}
                    </span>
                    <h3 className="mt-1.5 text-base font-semibold leading-snug">{post.title}</h3>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{post.readTime}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
