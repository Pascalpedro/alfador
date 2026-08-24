import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout-primitives";
import { CTABand } from "@/components/CTABand";
import { solutions } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alfador — Bridging Business and Technology" },
      {
        name: "description",
        content:
          "Alfador designs, implements and maintains intelligent IT solutions: network infrastructure, cloud infrastructure, business security, managed IT services, AI & automation, power & energy, and strategic technology advisory.",
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

function Home() {
  const featured = solutions.slice(0, 6);
  const anchor = solutions[6];

  return (
    <>
      {/* Hero */}
      <div className="bg-surface">
        <Container className="py-16 text-center md:py-24">
          <div className="rise-in mx-auto max-w-4xl">
            <h1 className="text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
              End-to-End Technology & Infrastructure Solutions
            </h1>
            <p className="mx-auto mt-6 max-w-3xl whitespace-pre-line text-base leading-relaxed text-muted-foreground md:text-lg">
              {`In modern business, technology is entirely interconnected.\nAn infrastructure choice is a security choice, an automation plan is a productivity plan, and our integrated solutions are a cost-reduction plan.`}
            </p>
          </div>
        </Container>
      </div>

      {/* Solutions cards */}
      <section className="bg-background py-10 md:py-14">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <div
                key={s.slug}
                className="card-hover flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 w-full rounded-full bg-electric text-electric-foreground hover:bg-electric/90"
                >
                  <Link to="/solutions" hash={s.ctaHash}>
                    {s.ctaLabel}
                    <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Full-width advisory anchor */}
          <div className="mt-4">
            <div className="card-hover rounded-3xl border border-border bg-surface p-7 shadow-soft md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold leading-snug md:text-2xl">
                    {anchor.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {anchor.summary}
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="shrink-0 rounded-full bg-electric px-7 text-electric-foreground hover:bg-electric/90"
                >
                  <Link to="/solutions" hash={anchor.ctaHash}>
                    {anchor.ctaLabel}
                    <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
