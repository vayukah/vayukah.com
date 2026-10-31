// src/components/Drones4ReliefWaitlistModal.tsx
'use client';

import React, { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface Drones4ReliefWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  web3FormsKey: string;
}

interface WaitlistFormData {
  name: string;
  phone: string;
  email: string;
  organization: string;
  organizationType: string;
  primaryApplication: string;
  operationalRegion: string;
  comment: string;
}

const initialForm: WaitlistFormData = {
  name: '',
  phone: '',
  email: '',
  organization: '',
  organizationType: '',
  primaryApplication: '',
  operationalRegion: '',
  comment: '',
};

const inputClassName =
  'w-full rounded-xl border border-white/[0.1] bg-[#080B12] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-all duration-200 focus:border-[#3EBA3A]/70 focus:ring-1 focus:ring-[#3EBA3A]/30';

const labelClassName =
  'mb-2 block text-xs font-bold uppercase tracking-widest text-muted';

const greenTextClassName = 'text-[#3EBA3A]';

export default function Drones4ReliefWaitlistModal({
  isOpen,
  onClose,
  web3FormsKey,
}: Drones4ReliefWaitlistModalProps) {
  const [form, setForm] = useState<WaitlistFormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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
      setForm(initialForm);
      setError('');
      setSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (error) setError('');
  };

  const handleClose = () => {
    if (isSubmitting) return;
    onClose();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.organizationType ||
      !form.primaryApplication
    ) {
      setError('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    const message = [
      'New Drones4Relief Waitlist Request',
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Email: ${form.email.trim()}`,
      `Organization: ${form.organization.trim() || 'Not provided'}`,
      `Organization type: ${form.organizationType}`,
      `Primary application: ${form.primaryApplication}`,
      `Operational region: ${form.operationalRegion.trim() || 'Not provided'}`,
      '',
      'Additional information:',
      form.comment.trim() || 'Not provided',
    ].join('\n');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject: 'New Drones4Relief Waitlist Request',
          from_name: form.name.trim(),
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          organization: form.organization.trim() || 'Not provided',
          organization_type: form.organizationType,
          primary_application: form.primaryApplication,
          operational_region: form.operationalRegion.trim() || 'Not provided',
          comment: form.comment.trim() || 'Not provided',
          message,
        }),
      });

      const result: { success?: boolean; message?: string } = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Unable to submit your request. Please try again.',
        );
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (submitError) {
      console.error('Drones4Relief waitlist submission failed:', submitError);
      setError(
        submitError instanceof Error
          ? submitError.message
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
        aria-labelledby="drones4relief-waitlist-title"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/[0.1] bg-[#0F1520] shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/[0.07] bg-[#0F1520]/95 px-6 py-5 backdrop-blur sm:px-8">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#3EBA3A]">
              DRONES4RELIEF · HUMANITARIAN INITIATIVE
            </p>
            <h2
              id="drones4relief-waitlist-title"
              className="font-heading text-xl font-black text-foreground sm:text-2xl"
            >
              Join the Waitlist
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Tell us about your organization and disaster-response needs. Our team will get in touch with you.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            disabled={isSubmitting}
            aria-label="Close waitlist dialog"
            className="h-10 w-10 shrink-0 rounded-xl border border-white/[0.08] text-muted transition-colors hover:bg-white/[0.05] hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg className="mx-auto" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center px-6 py-14 text-center sm:px-8">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#3EBA3A]/30 bg-[#3EBA3A]/15">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3EBA3A" strokeWidth="2" aria-hidden="true">
                <path d="m5 12 4 4L19 6" />
              </svg>
            </div>
            <h3 className="mb-2 font-heading text-2xl font-black text-foreground">
              You&apos;re on the list!
            </h3>
            <p className="mb-7 max-w-md text-sm leading-relaxed text-muted">
              Thank you for your interest in Drones4Relief. Your details have been sent to our team.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="rounded-xl bg-[#3EBA3A] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#35A832]"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-8 sm:py-8">
            <p className="text-xs text-muted">
              Fields marked <span className={greenTextClassName}>*</span> are required.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="d4r-name" className={labelClassName}>
                  Name <span className={greenTextClassName}>*</span>
                </label>
                <input
                  id="d4r-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="d4r-phone" className={labelClassName}>
                  Phone Number <span className={greenTextClassName}>*</span>
                </label>
                <input
                  id="d4r-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  minLength={7}
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="d4r-email" className={labelClassName}>
                  Email Address <span className={greenTextClassName}>*</span>
                </label>
                <input
                  id="d4r-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="d4r-organization" className={labelClassName}>
                  Organization <span className="font-normal normal-case tracking-normal">(Optional)</span>
                </label>
                <input
                  id="d4r-organization"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Organization / agency"
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="d4r-organization-type" className={labelClassName}>
                  Organization Type <span className={greenTextClassName}>*</span>
                </label>
                <select
                  id="d4r-organization-type"
                  name="organizationType"
                  required
                  value={form.organizationType}
                  onChange={handleChange}
                  className={inputClassName}
                >
                  <option value="" disabled>Select organization type</option>
                  <option value="Government / Disaster Management">Government / Disaster Management</option>
                  <option value="NGO / Humanitarian Organization">NGO / Humanitarian Organization</option>
                  <option value="Emergency Services / First Responder">Emergency Services / First Responder</option>
                  <option value="Research / Academic Institution">Research / Academic Institution</option>
                  <option value="Drone / UAV Service Provider">Drone / UAV Service Provider</option>
                  <option value="Private Company">Private Company</option>
                  <option value="Individual / Volunteer">Individual / Volunteer</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="d4r-application" className={labelClassName}>
                  Primary Application <span className={greenTextClassName}>*</span>
                </label>
                <select
                  id="d4r-application"
                  name="primaryApplication"
                  required
                  value={form.primaryApplication}
                  onChange={handleChange}
                  className={inputClassName}
                >
                  <option value="" disabled>Select primary application</option>
                  <option value="Flood Response">Flood Response</option>
                  <option value="Earthquake Relief">Earthquake Relief</option>
                  <option value="Search and Rescue">Search and Rescue</option>
                  <option value="Damage Assessment">Damage Assessment</option>
                  <option value="Aid / Supply Delivery">Aid / Supply Delivery</option>
                  <option value="Multi-drone Coordination">Multi-drone Coordination</option>
                  <option value="Multiple Applications">Multiple Applications</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="d4r-region" className={labelClassName}>
                  Operational Region <span className="font-normal normal-case tracking-normal">(Optional)</span>
                </label>
                <input
                  id="d4r-region"
                  name="operationalRegion"
                  type="text"
                  value={form.operationalRegion}
                  onChange={handleChange}
                  placeholder="City, state, or region where you operate"
                  className={inputClassName}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="d4r-comment" className={labelClassName}>
                  Additional Information <span className="font-normal normal-case tracking-normal">(Optional)</span>
                </label>
                <textarea
                  id="d4r-comment"
                  name="comment"
                  rows={4}
                  value={form.comment}
                  onChange={handleChange}
                  placeholder="Tell us about your disaster-response operations, team, or requirements..."
                  className={`${inputClassName} resize-y`}
                />
              </div>
            </div>

            {error && (
              <p role="alert" className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3EBA3A] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#3EBA3A]/20 transition-all hover:bg-[#35A832] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Waitlist Request'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
