import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CreditCard,
  Database,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  ShoppingBag,
  Tractor,
  Truck,
  type LucideIcon,
} from "lucide-react";
import heroImage from "@/assets/hero-servers.jpg";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout-primitives";
import { CTABand } from "@/components/CTABand";
import { solutions } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alfador — Bridging Business and Technology" },
      {
        name: "description",
        content:
          "Alfador designs, implements and maintains intelligent IT solutions: network solutions, cloud infrastructure, business security, managed IT services, AI & automation, smart spaces & energy infrastructure, and strategic technology advisory.",
      },
      { property: "og:title", content: "Alfador — Bridging Business and Technology" },
      {
        property: "og:description",
        content:
          "Secure, cost-effective technology for modern enterprises — networks, cloud, security, managed IT, AI automation, smart spaces & energy, and strategic advisory.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const benefits = [
  {
    title: "Save Time",
    body: "Automate and simplify the work that slows your business down.",
  },
  {
    title: "Reduce Costs",
    body: "Optimize infrastructure and eliminate unnecessary costs.",
  },
  {
    title: "Improve Quality",
    body: "Build systems that are more reliable, secure, and consistent.",
  },
];

const solutionCtas: Record<string, string> = {
  network: "Optimize My Network",
  cloud: "Explore Cloud Solutions",
  security: "Secure My Business",
  "managed-it": "Outsource Your IT Support",
  automation: "Cut Operational Costs",
  "smart-spaces": "Automate & Power My Facility",
  advisory: "Book a Strategic Advisory Consultation",
};

const industries: { title: string; icon: LucideIcon }[] = [
  { title: "Manufacturing", icon: Factory },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Education", icon: GraduationCap },
  { title: "Retail & E-commerce", icon: ShoppingBag },
  { title: "Banking & Financial", icon: CreditCard },
  { title: "Hospitality & Real Estate", icon: Hotel },
  { title: "Logistics & Supply", icon: Truck },
  { title: "Government PSU", icon: Landmark },
  { title: "Enterprise SaaS", icon: Database },
  { title: "Commercial Agriculture & Agri-Tech", icon: Tractor },
];

function Home() {
  const advisory = solutions[6];
  return (
    <>
      {/* Hero — full-bleed background image, left-aligned content */}
      <div className="relative isolate overflow-hidden bg-ink">
        <img
          src={heroImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Readability overlays: dark navy grading from the left, fading over the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30 md:via-ink/70 md:to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
        <Container className="relative py-20 md:py-32 lg:py-40">
          <div className="rise-in max-w-xl md:max-w-2xl">
            <h1 className="text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
              Bridging the gaps between your business and{" "}
              <span className="text-electric">technology</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Alfador designs, implements, and maintains intelligent IT solutions to make your business
              secure, efficient, and profitable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-lg bg-electric px-7 text-electric-foreground hover:bg-electric/90"
              >
                <Link to="/contact">
                  Contact us
                  <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-lg bg-white px-7 text-navy hover:bg-white/90"
              >
                <Link to="/solutions">Explore solutions</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Why choose Alfador — clean white divider between hero and services */}
      <div className="bg-white">
        <Container className="py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold font-display uppercase tracking-[0.22em] text-electric">
              Why Choose Alfador
            </span>
            <p className="mt-6 text-2xl font-semibold leading-snug text-navy md:text-3xl">
              “We are the gateway through which your business passes to become secure, efficient,
              and dominant in its space (The Door to Alpha). Alfador provides the engineering and
              technology solutions that make that transition seamless”
            </p>
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
              <br className="hidden sm:block" /> An infrastructure choice is a security choice, an automation plan is a
              productivity plan, and our integrated solutions are a cost-reduction plan.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(0, 6).map((s) => (
              <div
                key={s.slug}
                className="flex flex-col rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.02] p-6 backdrop-blur-sm transition-colors hover:border-electric/40 sm:p-7"
              >
                <h3 className="text-lg font-semibold leading-tight">{s.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-primary-foreground/65">{s.summary}</p>
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
                  <h3 className="text-xl font-semibold leading-tight md:text-2xl">{advisory.title}</h3>
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
          <h2 className="text-3xl font-semibold leading-[1.15] md:text-4xl">What our engineering delivers</h2>
          <p className="mt-4 text-muted-foreground">
            Our engineering decisions are ultimately judged by one question: does this make the business better?
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

      {/* Industries — dark, flows into CTA band */}
      <div className="bg-ink text-primary-foreground">
        <Container className="pt-20 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold leading-[1.15] md:text-4xl">Industries We Serve</h2>
            <p className="mt-4 text-sm text-primary-foreground/60 md:text-base">
              Engineered for businesses that can never afford to go down.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-3 md:gap-4 pb-4 lg:grid-cols-5">
            {industries.map((industry) => (
              <li
                key={industry.title}
                className="flex flex-col items-center rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.02] px-4 py-8 text-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-electric/40 text-electric">
                  <industry.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-sm font-semibold leading-snug">{industry.title}</h3>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <div className="bg-ink">
        <CTABand />
      </div>
    </>
  );
}
