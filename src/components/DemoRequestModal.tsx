'use client';

import React, { useEffect, useState } from 'react';
import type { FormEvent } from 'react';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  web3FormsKey: string;
}

interface DemoRequestForm {
  name: string;
  phone: string;
  email: string;
  location: string;
  customLocation: string;
  demoDate: string;
  organization: string;
  designation: string;
  comment: string;
}

const emptyForm: DemoRequestForm = {
  name: '',
  phone: '',
  email: '',
  location: '',
  customLocation: '',
  demoDate: '',
  organization: '',
  designation: '',
  comment: '',
};

const inputClassName =
  'w-full rounded-xl border border-white/[0.1] bg-[#080B12] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-all duration-200 focus:border-primary/60 focus:ring-1 focus:ring-primary/30';

function getLocalDateString() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return localDate.toISOString().slice(0, 10);
}

export default function DemoRequestModal({
  isOpen,
  onClose,
  web3FormsKey,
}: DemoRequestModalProps) {
  const [form, setForm] = useState<DemoRequestForm>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [minDemoDate] = useState(getLocalDateString);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isSubmitting) onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isSubmitting, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setErrorMessage('');
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const updateField = (field: keyof DemoRequestForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleClose = () => {
    if (isSubmitting) return;
    onClose();
    setForm(emptyForm);
    setSubmitted(false);
    setErrorMessage('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    const selectedLocation =
      form.location === 'Another' ? form.customLocation.trim() : form.location;

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !selectedLocation || !form.demoDate) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    if (form.location === 'Another' && !form.customLocation.trim()) {
      setErrorMessage('Please enter your preferred demo location.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject: 'VIGOR S50 — Demo Request',
          from_name: form.name.trim(),
          replyto: form.email.trim(),
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          location: selectedLocation,
          demo_date: form.demoDate,
          organization: form.organization.trim() || 'Not provided',
          designation: form.designation.trim() || 'Not provided',
          comment: form.comment.trim() || 'Not provided',
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit your demo request. Please try again.');
      }

      setSubmitted(true);
      setForm(emptyForm);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-request-title"
        aria-describedby="demo-request-description"
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/[0.1] bg-[#0F1520] shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/[0.07] bg-[#0F1520]/95 px-6 py-5 backdrop-blur sm:px-8">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-primary-light">
              VIGOR S50 · DEMO REQUEST
            </p>
            <h2
              id="demo-request-title"
              className="font-heading text-xl font-black text-foreground sm:text-2xl"
            >
              Request a Product Demo
            </h2>
            <p id="demo-request-description" className="mt-2 text-sm leading-relaxed text-muted">
              Share your details and preferred date. Our team will get in touch to coordinate your demo.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            disabled={isSubmitting}
            aria-label="Close demo request dialog"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] text-muted transition-colors hover:bg-white/[0.05] hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center px-6 py-12 text-center sm:px-8">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-accent-green/30 bg-accent-green/15">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3EBA3A" strokeWidth="2" aria-hidden="true">
                <path d="m5 12 4 4L19 6" />
              </svg>
            </div>
            <h3 className="mb-2 font-heading text-2xl font-black text-foreground">
              Demo Request Submitted!
            </h3>
            <p className="mb-7 max-w-md text-sm leading-relaxed text-muted">
              Thank you for your interest in VIGOR S50. Our team has received your request and will contact you to coordinate the demonstration.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="rounded-xl bg-primary px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-light"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-8 sm:py-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="demo-name" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted">
                  Name <span className="text-primary-light">*</span>
                </label>
                <input
                  id="demo-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  placeholder="Enter your name"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="demo-phone" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted">
                  Phone Number <span className="text-primary-light">*</span>
                </label>
                <input
                  id="demo-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  minLength={7}
                  value={form.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  placeholder="+91 98765 43210"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="demo-email" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted">
                  Email Address <span className="text-primary-light">*</span>
                </label>
                <input
                  id="demo-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  placeholder="you@example.com"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="demo-date" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted">
                  Date of Demo <span className="text-primary-light">*</span>
                </label>
                <input
                  id="demo-date"
                  name="demo_date"
                  type="date"
                  required
                  min={minDemoDate}
                  value={form.demoDate}
                  onChange={(event) => updateField('demoDate', event.target.value)}
                  className={`${inputClassName} [color-scheme:dark]`}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="demo-location" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted">
                  Demo Location <span className="text-primary-light">*</span>
                </label>
                <select
                  id="demo-location"
                  name="location"
                  required
                  value={form.location}
                  onChange={(event) => {
                    updateField('location', event.target.value);
                    if (event.target.value !== 'Another') {
                      setForm((current) => ({ ...current, location: event.target.value, customLocation: '' }));
                    }
                  }}
                  className={`${inputClassName} [color-scheme:dark]`}
                >
                  <option value="" disabled>Select a demo location</option>
                  <option value="Vijayawada">Vijayawada</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Another">Another</option>
                </select>
              </div>

              {form.location === 'Another' && (
                <div className="sm:col-span-2">
                  <label htmlFor="demo-custom-location" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted">
                    Enter Your Location <span className="text-primary-light">*</span>
                  </label>
                  <input
                    id="demo-custom-location"
                    name="custom_location"
                    type="text"
                    required
                    value={form.customLocation}
                    onChange={(event) => updateField('customLocation', event.target.value)}
                    placeholder="Enter your city or preferred demo location"
                    className={inputClassName}
                  />
                </div>
              )}

              <div>
                <label htmlFor="demo-organization" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted">
                  Organization <span className="font-normal normal-case tracking-normal">(Optional)</span>
                </label>
                <input
                  id="demo-organization"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  value={form.organization}
                  onChange={(event) => updateField('organization', event.target.value)}
                  placeholder="Company / Organization"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="demo-designation" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted">
                  Designation <span className="font-normal normal-case tracking-normal">(Optional)</span>
                </label>
                <input
                  id="demo-designation"
                  name="designation"
                  type="text"
                  value={form.designation}
                  onChange={(event) => updateField('designation', event.target.value)}
                  placeholder="Your job title"
                  className={inputClassName}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="demo-comment" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted">
                  Comment <span className="font-normal normal-case tracking-normal">(Optional)</span>
                </label>
                <textarea
                  id="demo-comment"
                  name="comment"
                  rows={3}
                  value={form.comment}
                  onChange={(event) => updateField('comment', event.target.value)}
                  placeholder="Share any requirements or details for the demo..."
                  className={`${inputClassName} resize-y`}
                />
              </div>
            </div>

            <p className="text-xs leading-relaxed text-muted">
              Fields marked with <span className="text-primary-light">*</span> are required. Our team will contact you to confirm the demo schedule.
            </p>

            {errorMessage && (
              <p role="alert" className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {errorMessage}
              </p>
            )}

            <div className="flex flex-col-reverse gap-3 border-t border-white/[0.07] pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="rounded-xl border border-white/[0.1] px-5 py-3 text-sm font-semibold text-muted transition-colors hover:bg-white/[0.04] hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Demo Request'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
