import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Check,
  Gem,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout-primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Alfador — Technology Consulting & Systems Integration" },
      {
        name: "description",
        content:
          "Alfador is a technology consulting and systems integration firm helping corporate and private clients modernize, secure, and optimize critical infrastructure.",
      },
      { property: "og:title", content: "About Alfador" },
      {
        property: "og:description",
        content:
          "Technology consulting and systems integration firm that bridges the gap between business ambition and technological possibility.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const coreValues = [
  {
    icon: Briefcase,
    title: "Business First",
    body: "Technology decisions must begin with business objectives. We focus on what your organization needs to achieve before choosing the tools.",
  },
  {
    icon: Settings,
    title: "Engineering Discipline",
    body: "Reliable systems are built deliberately. We prioritize sound architecture, detailed documentation, automation, testing, and long-term maintainability.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    body: "Security is a core foundation, not an afterthought. We bake robust defense protocols into every system from day one.",
  },
  {
    icon: Sparkles,
    title: "Clarity Over Complexity",
    body: "Complex technology isn't inherently better. We deliver clean, understandable solutions tailored precisely to your operational needs.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    body: "Technology environments are never truly finished. We relentlessly optimize your systems for performance, security, and efficiency.",
  },
  {
    icon: Gem,
    title: "Long-Term Value",
    body: "We build enduring technology capabilities that evolve with your organization, preventing early obsolescence.",
  },
];

const capabilities = [
  "Modernize legacy IT infrastructure",
  "Strengthen enterprise security posture",
  "Migrate seamlessly to cloud environments",
  "Integrate distributed systems and networks",
  "Automate inefficient, repetitive workflows",
  "Build custom software and scalable foundations",
];

function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
        <Container className="relative py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full bg-navy px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Who we are
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Technology should solve business problems, not create them.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Alfador is a technology consulting and systems integration firm that helps corporate and private clients
              modernize, secure, and optimize their critical infrastructure.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Built on over a decade of diverse IT experience, we combine strategic thinking with the People, Process,
              and Technology (PPT) framework. What sets Alfador apart is our deep alignment with our clients'
              operational realities; our expert ICT team specializes in uniting complex IT and communication
              technologies into cohesive infrastructure, delivering the elite reliability and technical continuity your
              business demands.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/50">
        <Container className="py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:border-brand/30 hover:shadow-lift md:p-10">
              <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Mission
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">Our Mission</h2>
              <p className="mt-3 text-lg font-medium text-navy">
                To make technology a practical engine for business progress.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                  <span>
                    Help organizations use technology deliberately to improve security, strengthen operations, reduce
                    complexity, and create sustainable growth.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:border-brand/30 hover:shadow-lift md:p-10">
              <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Vision
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">Our Vision</h2>
              <p className="mt-3 text-lg font-medium text-navy">
                A future where every business turns technology into a competitive advantage.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                  <span>
                    Build a business landscape where technology is a strategic capability to adapt faster and deliver
                    more value.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="bg-background">
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              What guides us
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.1] text-foreground md:text-4xl">Core Values</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              The principles that shape how we build, advise, and partner with every client.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-transparent bg-card p-7 transition-all duration-300 hover:border-border hover:shadow-soft"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <value.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Alfador */}
      <section className="bg-navy text-white">
        <Container className="py-20 md:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                Why Alfador
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.1] text-white md:text-4xl lg:text-5xl">
                Bridging the gap between business and technology
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Modern enterprises depend on technology to compete and grow. Yet, scaling out introduces heavy friction:
                disconnected systems, aging infrastructure, rising security risks, and technical debt that misaligns with
                business priorities. That is where Alfador comes in. We close the gap between your corporate objectives
                and technical execution.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
              <ul className="space-y-4">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-electric text-white">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-base leading-relaxed text-white/90">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-electric">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">Ready to transform your operations?</h2>
              <p className="mt-2 text-base text-white/80">
                Let's discuss how Alfador can align your technology with your business goals.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-white px-7 text-navy shadow-lg hover:bg-white/90"
            >
              <Link to="/contact">
                Talk to Alfador
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
