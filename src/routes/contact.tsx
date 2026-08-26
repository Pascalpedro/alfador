import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero, Section } from "@/components/layout-primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { solutions } from "@/data/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Alfador — Talk to our engineering team" },
      {
        name: "description",
        content:
          "Get in touch with Alfador about network infrastructure, cloud, AI, automation or cybersecurity work. We reply within one business day.",
      },
      { property: "og:title", content: "Contact Alfador" },
      {
        property: "og:description",
        content: "Talk to the Alfador engineering team — we reply within one business day.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Open the door to what's next."
        description={
          <>
            <p>
              Every business reaches a point where existing systems, processes, or technology are
              no longer enough. Whether you're looking to modernize, secure, integrate, automate, or
              transform, tell us where you are and where you want to go.
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-foreground">
                Alfador helps bridge the gap between business ambition and technological possibility.
              </strong>
            </p>
          </>
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft md:p-10">
            {sent ? (
              <div className="py-10 text-center" role="status">
                <CheckCircle2 className="mx-auto h-10 w-10 text-navy" aria-hidden />
                <h2 className="mt-5 text-2xl font-semibold">Thanks — message received.</h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  One of our engineers will reply within one business day. For anything urgent,
                  email hello@alfador.tech directly.
                </p>
                <Button
                  variant="outline"
                  className="mt-7 rounded-full border-border"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-semibold">Send us a message</h2>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" required autoComplete="name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" autoComplete="organization" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of interest</Label>
                    <Select name="interest">
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Select a capability" />
                      </SelectTrigger>
                      <SelectContent>
                        {solutions.map((s) => (
                          <SelectItem key={s.slug} value={s.slug}>
                            {s.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Something else</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto sm:px-8">
                  Send message
                </Button>
                <p className="text-xs text-muted-foreground">
                  We use your details only to respond to this enquiry.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            {[
              {
                icon: Mail,
                title: "Email",
                body: "hello@alfador.tech",
                href: "mailto:hello@alfador.tech",
              },
              {
                icon: Phone,
                title: "Phone",
                body: "+234 800 000 0000",
                href: "tel:+2348000000000",
              },
              { icon: MapPin, title: "Office", body: "Lagos, Nigeria — remote-first across EMEA" },
              { icon: Clock, title: "Response time", body: "Within one business day" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/50 p-6"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-card text-navy">
                  <item.icon className="h-4.5 w-4.5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h2 className="text-sm font-semibold">{item.title}</h2>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block break-words text-sm text-muted-foreground hover:text-foreground"
                    >
                      {item.body}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <p className="px-2 text-xs leading-relaxed text-muted-foreground">
              Alfador Technologies Ltd — registered technology company. All enquiries handled under
              NDA on request.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
