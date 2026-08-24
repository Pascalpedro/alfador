import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout-primitives";
import { CTABand } from "@/components/CTABand";
import { solutions, insights } from "@/data/content";
import heroImage from "@/assets/hero-network.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alfador — Bridging Business and Technology" },
      {
        name: "description",
        content:
          "Alfador designs, implements and maintains intelligent IT solutions: network solutions, cloud infrastructure, business security, managed IT services, AI & automation, power & energy, and strategic technology advisory.",
      },
      { property: "og:title", content: "Alfador — Bridging Business and Technology" },
      {
        property: "og:description",
        content:
          "Secure, cost-effective technology for modern enterprises — networks, cloud, security, managed IT, AI automation, power and strategic advisory.",
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

const solutionCtas: Record<string, string> = {
  network: "Optimize My Network",
  cloud: "Explore Cloud Solutions",
  security: "Secure My Business",
  "managed-it": "Outsource Your IT Support",
  automation: "Cut Operational Costs",
  power: "Eliminate Power Downtime",
  advisory: "Book a Strategic Advisory Consultation",
};

function Home() {
  const advisory = solutions[6];
  return (
    <>
      {/* Hero */}
      <div className="bg-surface">
        <Container className="py-16 text-center md:py-24">
          <div className="rise-in mx-auto max-w-3xl">
            <h1 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
              Bridging the gaps between your business and{" "}
              <span className="text-electric">technology</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Alfador designs, implements, and maintains intelligent IT solutions to make your
              business secure, efficient, and profitable.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-electric px-7 text-electric-foreground hover:bg-electric/90"
              >
                <Link to="/contact">
                  Contact us
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
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold leading-[1.15] md:text-4xl">
              End-to-End Technology & Infrastructure Solutions
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/70 md:text-lg">
              In modern business, technology is entirely interconnected.
              <br className="hidden sm:block" /> An infrastructure choice is a security choice, an
              automation plan is a productivity plan, and our integrated solutions are a
              cost-reduction plan.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(0, 6).map((s) => (
              <div
                key={s.slug}
                className="flex flex-col rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.02] p-6 backdrop-blur-sm transition-colors hover:border-electric/40 sm:p-7"
              >
                <h3 className="text-lg font-semibold leading-tight">{s.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-primary-foreground/65">
                  {s.summary}
                </p>
                <Button
                  asChild
                  size="sm"
                  className="mt-6 w-full rounded-full bg-electric text-electric-foreground hover:bg-electric/90 sm:w-auto sm:self-start"
                >
                  <Link to="/solutions" hash={s.anchor}>
                    {solutionCtas[s.anchor]}
                    <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {advisory && (
            <div className="mt-4 rounded-3xl border border-primary-foreground/10 bg-gradient-to-r from-electric/10 to-transparent p-7 sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold leading-tight md:text-2xl">
                    {advisory.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-primary-foreground/65 md:text-base">
                    {advisory.summary}
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="shrink-0 rounded-full bg-electric px-6 text-electric-foreground hover:bg-electric/90"
                >
                  <Link to="/solutions" hash={advisory.anchor}>
                    {solutionCtas[advisory.anchor]}
                    <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </Container>
      </div>

      {/* Benefits — light */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-[1.15] md:text-4xl">
            Key benefits of our engineering standard
          </h2>
          <p className="mt-4 text-muted-foreground">
            Outcomes, not deliverables — infrastructure your team can audit, run and grow into.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <li key={b.title} className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-electric">
                <Check className="h-5 w-5 text-electric-foreground" aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </li>
          ))}
        </ul>
      </Section>

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
