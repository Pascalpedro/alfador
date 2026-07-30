import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Section } from "@/components/layout-primitives";
import { CTABand } from "@/components/CTABand";
import { insights } from "@/data/content";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Engineering notes from Alfador" },
      {
        name: "description",
        content:
          "Practical writing on zero trust, cloud landing zones, applied AI, observability and enterprise automation from the Alfador engineering team.",
      },
      { property: "og:title", content: "Alfador Insights" },
      {
        property: "og:description",
        content:
          "Practical engineering notes on zero trust, cloud, applied AI, observability and automation.",
      },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

const formatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function Insights() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Engineering notes, minus the marketing."
        description="What we've learned building and operating infrastructure under regulatory pressure — written for the people who have to run it."
      />

      <Section>
        <article className="card-hover mesh-bg rounded-3xl border border-border p-8 shadow-soft md:p-12">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {featured.category} · Featured
          </span>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            {featured.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {featured.excerpt}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            <time dateTime={featured.date}>{formatter.format(new Date(featured.date))}</time> ·{" "}
            {featured.readTime}
          </p>
        </article>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article
              key={post.slug}
              className="card-hover flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {post.category}
              </span>
              <h2 className="mt-4 text-lg font-semibold leading-snug">{post.title}</h2>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <p className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <time dateTime={post.date}>{formatter.format(new Date(post.date))}</time>
                <span className="inline-flex items-center gap-1">
                  {post.readTime}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CTABand
        title="Have a question these notes don't answer?"
        description="Our engineers are happy to talk through your specific constraints."
      />
    </>
  );
}
