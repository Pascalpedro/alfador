import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./layout-primitives";

export function CTABand({
  title = "From idea to production in weeks.",
  description = "Tell us where you're headed. We'll map the architecture, the security posture and the delivery plan.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Container className="pb-4">
      <div className="overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center text-primary-foreground md:px-16 md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">{description}</p>
        <Button
          asChild
          size="lg"
          className="mt-8 rounded-full bg-electric px-7 text-electric-foreground hover:bg-electric/90"
        >
          <Link to="/contact">
            Start a conversation
            <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </Container>
  );
}
