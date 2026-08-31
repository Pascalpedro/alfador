import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, CheckCircle2, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { PageHero, Section } from "@/components/layout-primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

type SubmitState = "idle" | "submitting" | "error";

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [formKey, setFormKey] = useState(0);
  const [interest, setInterest] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitState === "submitting") return;

    const form = event.currentTarget;
    setSubmitState("submitting");

    try {
      // Post to the static form definition, not "/" — the SSR function owns "/"
      // and would swallow the submission before Netlify's form handler sees it.
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) throw new Error(`Submission failed: ${response.status}`);

      setSubmitState("idle");
      setSent(true);
      setInterest("");
      // Remount the form so all fields (including the Select) are cleared.
      setFormKey((key) => key + 1);
    } catch {
      setSubmitState("error");
    }
  }

  const submitting = submitState === "submitting";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Open the door to what's next."
        description={
          <>
            <p>
              Every business reaches a point where existing systems, processes, or technology are no longer enough.
              Whether you're looking to modernize, secure, integrate, automate, or transform, tell us where you are and
              where you want to go.
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
                <h2 className="mt-5 text-2xl font-semibold">Thanks... let&apos;s take it from here.</h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  We&apos;ve received your message and will review the context you&apos;ve shared. A member of the
                  Alfador team will get back to you within one business day to discuss your needs and the best way
                  forward.
                </p>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  For urgent enquiries, email{" "}
                  <a className="text-foreground underline" href="mailto:alfador.info@gmail.com">
                    alfador.info@gmail.com
                  </a>{" "}
                  directly.
                </p>
                <Button variant="outline" className="mt-7 rounded-full border-border" onClick={() => setSent(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                key={formKey}
                name="contact"
                method="POST"
                action="/__forms.html"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold">Send us a message</h2>

                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="full_name" required autoComplete="name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" autoComplete="organization" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of interest</Label>
                    <Select value={interest} onValueChange={setInterest}>
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
                    {/* Plain input so the value is always part of the POST body.
                        Radix's hidden select can block native validation. */}
                    <input type="hidden" name="area_of_interest" value={interest} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>

                {submitState === "error" && (
                  <p
                    role="alert"
                    className="flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
                    Sorry, your message couldn&apos;t be sent. Please try again, or email us directly at{" "}
                    <a className="underline" href="mailto:alfador.info@gmail.com">
                      alfador.info@gmail.com
                    </a>
                    .
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full rounded-full sm:w-auto sm:px-8"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
                </Button>
                <p className="text-xs text-muted-foreground">We use your details only to respond to this enquiry.</p>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            {[
              {
                icon: Mail,
                title: "Email",
                body: "alfador.info@gmail.com",
                href: "mailto:alfador.info@gmail.com",
              },
              {
                icon: Phone,
                title: "Phone",
                body: "+234 803 914 5668",
                href: "tel:+2348039145668",
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
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  )}
                </div>
              </div>
            ))}

            <p className="px-2 text-xs leading-relaxed text-muted-foreground">
              Alfador Integrated Systems — registered technology company. All enquiries handled under NDA on request.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
