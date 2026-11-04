"use client";

import { useState, useTransition } from "react";
import { sendEmail } from "../actions/send-email";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dakotaking92@gmail.com",
    href: "mailto:dakotaking92@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Kissimmee, Florida",
  },
];

const Contact = () => {
  const [result, setResult] = useState({});
  const [selectedService, setSelectedService] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData) => {
    startTransition(async () => {
      const response = await sendEmail(formData);
      setResult(response);
    });
  };

  return (
    <section className="page-shell py-12 xl:py-16">
      <div className="section-wrap">
        <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[2.25rem] p-6 text-[var(--text)] sm:p-8">
            <span className="section-kicker">Hire me · Get in touch</span>
            <h1 className="mt-5 text-4xl font-black">Let&apos;s build something sharp, useful, and memorable.</h1>
            <p className="mt-4 leading-8 text-[var(--muted-text)]">
              Tell me a little about what you&apos;re working on. Whether you need a portfolio refresh, a polished interface, or design support that can move into code, I&apos;d love to hear about it.
            </p>

            <div className="mt-8 grid gap-4">
              {info.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white/6 p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)] text-[var(--button-text)]">
                      <div className="text-xl" aria-hidden="true">{item.icon}</div>
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--muted-text)]">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 inline-block break-all text-base font-semibold text-[var(--text)] hover:text-[var(--accent)] sm:text-lg"
                        >
                          {item.description}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg font-semibold text-[var(--text)]">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <form
              action={handleSubmit}
              className="glass-panel flex flex-col gap-6 rounded-[2.25rem] p-6 text-[var(--text)] sm:p-8"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-text)]">Project inquiry</p>
                <h2 className="mt-2 text-3xl font-black text-[var(--text)]">Tell me about your idea.</h2>
              </div>

              <p className="text-[var(--muted-text)]">
                Share what you need, what success looks like, or any timing you have in mind. Required fields are marked.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--text)]">
                  First name <span className="sr-only">(required)</span>
                  <Input autoComplete="given-name" name="firstName" type="text" placeholder="Your first name" required />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--text)]">
                  Last name
                  <Input autoComplete="family-name" name="lastName" type="text" placeholder="Your last name" />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--text)]">
                  Email address <span className="sr-only">(required)</span>
                  <Input autoComplete="email" name="email" type="email" placeholder="you@example.com" required />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--text)]">
                  Phone number
                  <Input autoComplete="tel" name="phone" type="tel" placeholder="Your phone number" />
                </label>
              </div>

              <input type="hidden" name="service" value={selectedService} />

              <Select value={selectedService} onValueChange={setSelectedService}>
                <label id="service-label" className="text-sm font-semibold text-[var(--text)]">
                  What can I help with?
                </label>
                <SelectTrigger className="w-full" aria-labelledby="service-label">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                    <SelectItem value="UI Design">UI Design</SelectItem>
                    <SelectItem value="Brand & Visual Design">Brand &amp; Visual Design</SelectItem>
                    <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--text)]">
                Project details <span className="sr-only">(required)</span>
                <Textarea
                  name="message"
                  className="min-h-[180px]"
                  placeholder="What are you building? What would you like help with? Any goals or timeline?"
                  required
                  maxLength={5000}
                />
              </label>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-[var(--accent)] text-[var(--button-text)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] sm:w-fit sm:min-w-48"
              >
                {isPending ? "Sending your message..." : "Send project inquiry"}
              </Button>

              {result?.success && (
                <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-200" role="status">
                  Thanks for reaching out. Your message was sent successfully.
                </p>
              )}

              {result?.error && (
                <p className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-red-200" role="alert">
                  {result.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
