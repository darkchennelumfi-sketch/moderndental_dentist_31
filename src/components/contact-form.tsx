"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Send } from "lucide-react";
import {
  contactSchema,
  steps,
  type ContactInput,
} from "@/lib/schemas";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DRAFT_KEY = "modern-dental-contact-draft";

type SubmitState = "idle" | "sending" | "sent" | "error";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-semibold text-clay-dark">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [step, setStep] = React.useState(0);
  const [submitState, setSubmitState] = React.useState<SubmitState>("idle");
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem(DRAFT_KEY);
      if (!saved) return;
      const parsed: unknown = JSON.parse(saved);
      if (!parsed || typeof parsed !== "object") return;
      const draft = parsed as Partial<ContactInput>;
      (Object.keys(draft) as (keyof ContactInput)[]).forEach((key) => {
        const value = draft[key];
        if (typeof value === "string") {
          setValue(key, value, { shouldValidate: false });
        }
      });
    } catch {
      window.localStorage.removeItem(DRAFT_KEY);
    }
  }, [setValue]);

  React.useEffect(() => {
    // react-hook-form's watch subscription is intentionally used for draft
    // autosave; it is safe here because no memoized component consumes it.
    // eslint-disable-next-line react-hooks/incompatible-library
    const subscription = watch((values) => {
      try {
        window.localStorage.setItem(DRAFT_KEY, JSON.stringify(values));
      } catch {
        // Storage can be unavailable in private mode; the form still works.
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const activeStepLabel = steps[step]?.label ?? steps[0]?.label ?? "Your details";

  const nextStep = async () => {
    const valid = await trigger([...(steps[0]?.fields ?? ["name", "email", "phone"])], {
      shouldFocus: true,
    });
    if (valid) setStep(1);
  };

  const onSubmit = async (values: ContactInput) => {
    setSubmitState("sending");
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("The message could not be sent.");
      }
      window.localStorage.removeItem(DRAFT_KEY);
      setSubmitState("sent");
    } catch {
      setSubmitState("error");
      setServerError(
        "Something went wrong. Please call us or try sending your message again.",
      );
    }
  };

  const restart = () => {
    reset();
    setStep(0);
    setSubmitState("idle");
    setServerError(null);
  };

  if (submitState === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex min-h-[30rem] flex-col items-center justify-center rounded-[1.8rem] border border-pine/15 bg-pine-mist/50 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="grid size-16 place-items-center rounded-full bg-pine text-cream">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-6 font-display text-3xl text-ink">
          Success! Message received.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Thank you for reaching out to Modern Dental. If your message is
          urgent, please call us at{" "}
          <a href="tel:7018388399" className="font-semibold text-pine underline">
            (701) 838-8399
          </a>
          .
        </p>
        <Button type="button" variant="outline" className="mt-7" onClick={restart}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[1.8rem] border border-ink/10 bg-cream/70 p-6 shadow-[0_30px_80px_-50px_rgba(11,43,35,0.45)] sm:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[0.6rem] font-bold tracking-[0.22em] text-clay uppercase">
            Send us a message
          </p>
          <p className="mt-1 font-display text-2xl text-ink">
            {activeStepLabel}
          </p>
        </div>
        <p className="text-[0.62rem] font-bold tracking-[0.16em] text-muted uppercase">
          Step {step + 1} / {steps.length}
        </p>
      </div>

      <div
        className="mt-5 h-1.5 overflow-hidden rounded-full bg-ink/10"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-valuenow={step + 1}
        aria-label="Contact form progress"
      >
        <motion.div
          className="h-full rounded-full bg-clay"
          animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="mt-7">
        {step === 0 ? (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <div className="sm:col-span-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                autoComplete="name"
                placeholder="Your full name"
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
              />
              <FieldError id="name-error" message={errors.name?.message} />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
              />
              <FieldError id="email-error" message={errors.email?.message} />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(701) 000-0000"
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                {...register("phone")}
              />
              <FieldError id="phone-error" message={errors.phone?.message} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="message"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="grid gap-5"
          >
            <div>
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                placeholder="How can we help?"
                aria-invalid={errors.subject ? true : undefined}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                {...register("subject")}
              />
              <FieldError id="subject-error" message={errors.subject?.message} />
            </div>
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                placeholder="Tell us a little about what you need."
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? "message-error" : undefined}
                {...register("message")}
              />
              <FieldError id="message-error" message={errors.message?.message} />
            </div>
          </motion.div>
        )}
      </div>

      {serverError ? (
        <p role="alert" className="mt-5 rounded-xl bg-clay/10 px-4 py-3 text-xs font-semibold text-clay-dark">
          {serverError}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        {step === 1 ? (
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStep(0)}
            className="justify-center"
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
        ) : (
          <p className="text-[0.7rem] leading-relaxed text-muted">
            Fields marked * are required.
          </p>
        )}

        {step === 0 ? (
          <Button type="button" onClick={nextStep} className="sm:min-w-40">
            Continue
            <ArrowRight className="size-4" />
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={submitState === "sending"}
            className={cn("sm:min-w-44", submitState === "sending" && "opacity-80")}
          >
            {submitState === "sending" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending
              </>
            ) : (
              <>
                <Send className="size-4" />
                Send message
              </>
            )}
          </Button>
        )}
      </div>
    </form>
  );
}
