'use client';

import React, { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/*
 * EDITABLE CAREER DETAIL COPY
 * Update headings, labels, buttons, and dialog messages here.
 * This detail page is intentionally configured for Senior Electronics Engineer only.
 * Place it at src/app/career/senior-electronics-engineer/page.tsx.
 */
interface JobSection {
  heading: string;
  description?: string;
  items?: string[];
}

interface JobDetail {
  title: string;
  intro: string;
  department: string;
  location: string;
  reportsTo: string;
  experience: string;
  employmentType: string;
  sections: JobSection[];
  applyButtonText: string;
  workmode: string;
}

const careerDetailCopy = {
  eyebrow: 'CAREERS AT VAYUKAH',
  backToCareers: 'All Open Positions',
  metaLabels: {
    location: 'Location',
    reportsTo: 'Reports to',
    experience: 'Experience',
    employmentType: 'Employment type',
    department: 'Department',
  },
  applicationDialog: {
    title: 'Apply for this position',
    subtitle:
      'Complete the form below to send your application directly to our recruitment inbox.',
    nameLabel: 'Full name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@example.com',
    phoneLabel: 'Phone number',
    phonePlaceholder: '+91 98765 43210',
    linkedinLabel: 'LinkedIn profile',
    linkedinPlaceholder: 'https://linkedin.com/in/your-profile',
    resumeLabel: 'Resume / portfolio link',
    resumePlaceholder: 'Paste a shareable link to your resume or portfolio',
    messageLabel: 'Cover note (optional)',
    messagePlaceholder: 'Briefly tell us why you are a good fit for this role.',
    cancelButton: 'Cancel',
    submitButton: 'Submit Application',
    submittingButton: 'Submitting Application…',
    closeButtonLabel: 'Close application dialog',
    privacyNote:
      'Add a shareable resume or portfolio link above. This form does not upload files.',
    validationName: 'Please enter your full name.',
    validationEmail: 'Please enter a valid email address.',
    validationPhone: 'Please enter your phone number.',
    submitError: 'We could not submit your application. Please try again.',
    networkError: 'A network error occurred. Please check your connection and try again.',
    successTitle: 'Application Submitted',
    successDescription:
      'Thank you for applying. Your application has been submitted successfully.',
    successButton: 'Done',
  },
  general: {
    bottomTitle: 'Ready to build with us?',
    bottomDescription:
      'Tell us about your experience and how you can contribute to our UAV engineering team.',
    bottomButton: 'Apply for this role',
  },
  notFound: {
    title: 'Position not found',
    description:
      'This opening may have changed or is no longer available. Browse our current opportunities to find another role.',
    button: 'Browse Open Positions',
  },
};

/* EDITABLE JOB CONTENT — this is the only role configured in this file. */
const jobDetails: Record<string, JobDetail> = {
  'senior-electronics-engineer': {
    title: 'Senior Electronics Engineer',
    intro:
      'Drones or unmanned systems are revolutionizing many industries e.g. Agriculture, logistics, mining, infrastructure, disaster management and public services. This trend will only be multiplying as drones are enhanced with AI/ML, Beyond Visual Line of Sight operations and operational infrastructure. Do you want to be part of this exciting industry and work for a company that is fully aligned to realize the big opportunities offered by Drones?',
    department: 'Engineering',
    location: 'Vijayawada, Andhra Pradesh',
    reportsTo: 'Engineering Manager',
    experience: '5+ years',
    employmentType: 'Full-time',
    workmode: 'On-site',
    applyButtonText: 'Apply Now',
                    sections: [
      {
        heading: 'About Vayukah Drones',
        description:
          'Vayukah Drone Systems and Services Pvt Ltd. is an OEM Drone manufacturer in Vijayawada, Andhra Pradesh. We are a DPIIT recognized startup. We build drones that are used in survey/mapping/inspection. We pride ourselves on our engineering of reliable, efficient, compliant and user friendly enterprise drones with a strong focus on quality, technology and usability. We focus on strong innovation in engineering and system integration that aims to achieve large scale manufacturing of drones in India. We are currently seeing strong demand and growth in the markets we are operating and are expanding our team.',
      },
      {
        heading: 'Responsibilities',
        items: [
          'Work with management to plan product innovation.',
          'Work with the mechanical and software teams to integrate the electronics into the drone and payloads.',
          'Collect objective data, Document and test Avionic systems based on industry standards.',
          'Component selection and sourcing for electronics.',
          'Design of PCBs for Drone and Payloads, production coordination and integration into the final product.',
          'Design avionics wiring layouts and harnesses for drones and payloads.',
          'Production overview and support for electronics manufacturing, assembly and testing.',
          'Assist in Flight qualification and field tests (control loop tuning).',
          'Troubleshoot and resolve issues with avionics systems and components.',
          'Update the avionics systems based on the test results and feedback from the end users.',
          'Design and implement Bench testing and validation systems for the avionics systems.',
          'Design sub systems for Drone peripherals and payload.',
        ],
      },
      {
        heading: 'Required skills',
        items: [
          'At least 5 years of hands-on experience in electronics design, manufacturing, integration, and testing of UAV/drone avionics systems, including flight controllers, power distribution systems, sensors, and communication interfaces.',
          'Deep understanding of Electronics components, circuit theory, circuit analysis, power electronics and power calculations.',
          'Experience in Electronics design simulation and validation.',
          'Experience in PCB Design (KICAD (preferred), ALTIUM etc.), Analysis and Manufacturing.',
          'Experience in IEC standards for PCBs, EMC testing, Environmental testing.',
          'Experience in Drone Type Certification with DGCA',
          'Experience in task planning, scheduling and forecasting.',
          'Experience in RTK and PPK workflows for UAVs.',
          'Experience in Mission planner and QGroundControl for UAVs.',
          'Strong understanding of UART, CAN/DroneCAN, I²C, SPI, and MAVLink communication protocols.',
          'Experience with ESC configuration, diagnostics, firmware updates, and communication troubleshooting.',
          'Proficiency in using oscilloscope software, logic analysers, and serial debugging tools.',
          'Experience analysing flight logs, sensor data, power system behaviour, and avionics failures.',
          'Basic knowledge on Ardupilot and PX4 flight controllers, and their integration with sensors and actuators.',
          'Basic knowledge on tuning of Control loops and PID controllers for UAVs.',
          'Great communication skills.',
        
        ],
      },
      {
        heading: 'Send Resume to',
        items: [
          'info@vayukah.com',
        ],
      },
    ],
  },
};

interface ApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  resumeUrl: string;
  coverNote: string;
}

const initialForm: ApplicationForm = {
  fullName: '',
  email: '',
  phone: '',
  linkedin: '',
  resumeUrl: '',
  coverNote: '',
};

const fieldClassName =
  'w-full bg-bg border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all';

export default function SeniorElectronicsEngineerPage() {
  // This is a dedicated route for Senior Electronics Engineer only.
  // It does not depend on a dynamic [slug] parameter.
  const job = jobDetails['senior-electronics-engineer'];

  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [form, setForm] = useState<ApplicationForm>(initialForm);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal:not(.active)');

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isApplyOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsApplyOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isApplyOpen]);

  const updateForm = (field: keyof ApplicationForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (formError) setFormError('');
  };

  const handleApplySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const copy = careerDetailCopy.applicationDialog;
    setFormError('');

    if (!form.fullName.trim()) {
      setFormError(copy.validationName);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setFormError(copy.validationEmail);
      return;
    }

    if (!form.phone.trim()) {
      setFormError(copy.validationPhone);
      return;
    }

    const nameParts = form.fullName.trim().split(/\s+/);
    const firstName = nameParts.shift() || form.fullName.trim();
    const lastName = nameParts.join(' ');

    const applicationMessage = [
      `Job Application: ${job.title}`,
      `Department: ${job.department}`,
      `Location: ${job.location}`,
      `Experience: ${job.experience}`,
      `Employment Type: ${job.employmentType}`,
      '',
      'Applicant Details',
      `Full Name: ${form.fullName.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `LinkedIn Profile: ${form.linkedin.trim() || 'Not provided'}`,
      `Resume / Portfolio URL: ${form.resumeUrl.trim() || 'Not provided'}`,
      '',
      'Cover Note:',
      form.coverNote.trim() || 'Not provided',
    ].join('\n');

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '2876b931-485c-4de1-80ed-3646cb764430',
          subject: `Job Application: ${job.title} — ${form.fullName.trim()}`,
          first_name: firstName,
          last_name: lastName,
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: applicationMessage,
          from_name: form.fullName.trim(),
          replyto: form.email.trim(),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        setFormError(result.message || copy.submitError);
        return;
      }

      setForm(initialForm);
      setApplicationSubmitted(true);
    } catch (error) {
      console.error('Career application submission failed:', error);
      setFormError(copy.networkError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openApplyDialog = () => {
    setFormError('');
    setApplicationSubmitted(false);
    setIsApplyOpen(true);
  };

  return (
    <div className="min-h-screen bg-bg text-foreground font-body relative">
      <div className="scan-line" />
      <Header />

      <main>
        {/* Job detail hero */}
        <section className="relative overflow-hidden bg-grid pt-28 pb-14 lg:pt-36 lg:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(6,86,214,0.12) 0%, rgba(75,158,255,0.04) 42%, transparent 70%)',
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-24"
              style={{ background: 'linear-gradient(to top, #080B12, transparent)' }}
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <Link
              href="/career"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary-light transition-colors mb-8 reveal active"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M19 12H5m7 7-7-7 7-7" />
              </svg>
              {careerDetailCopy.backToCareers}
            </Link>

            <div className="flex items-center gap-3 mb-5 reveal active">
              <div className="w-[2px] h-5 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">
                {careerDetailCopy.eyebrow}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7 reveal active reveal-delay-1">
              <div className="max-w-3xl">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-muted bg-white/[0.03] border border-white/[0.07]">
                    {job.employmentType}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-muted bg-white/[0.03] border border-white/[0.07]">
                    {job.workmode}  
                  </span>
                </div>
                <h1
                  className="font-heading font-black tracking-tight leading-[1.05] text-foreground"
                  style={{ fontSize: 'clamp(2.3rem, 5vw, 4.5rem)' }}
                >
                  {job.title}
                </h1>
                <p className="text-base sm:text-lg text-muted leading-relaxed mt-5 max-w-3xl">
                  {job.intro}
                </p>
              </div>

              <button
                type="button"
                onClick={openApplyDialog}
                className="inline-flex shrink-0 items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary text-white font-bold text-sm border border-primary/40 hover:bg-primary-light hover:border-primary-light transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/35"
              >
                {job.applyButtonText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 reveal reveal-delay-2">
              {[
                { label: careerDetailCopy.metaLabels.location, value: job.location },
                { label: careerDetailCopy.metaLabels.reportsTo, value: job.reportsTo },
                { label: careerDetailCopy.metaLabels.experience, value: job.experience },
                { label: careerDetailCopy.metaLabels.department, value: job.department },
              ].map((meta) => (
                <div key={meta.label} className="rounded-xl border border-white/[0.07] bg-surface/80 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">{meta.label}</p>
                  <p className="text-sm font-semibold text-foreground">{meta.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job sections */}
        <section className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(6,86,214,0.04) 0%, transparent 55%)' }}
          />
          <div className="max-w-5xl mx-auto relative">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-14 items-start">
              <div className="space-y-10">
                {job.sections.map((section, index) => (
                  <section
                    key={section.heading}
                    className="reveal"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-[2px] h-5 bg-primary" />
                      <h2 className="font-heading font-black text-foreground text-xl sm:text-2xl">
                        {section.heading}
                      </h2>
                    </div>
                    {section.description && (
                      <p className="text-sm sm:text-base text-muted leading-relaxed">
                        {section.description}
                      </p>
                    )}
                    {section.items && section.items.length > 0 && (
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={`${section.heading}-${itemIndex}`}
                            className="flex items-start gap-3 text-sm sm:text-base text-muted leading-relaxed"
                          >
                            <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <aside className="lg:sticky lg:top-28 reveal reveal-delay-2">
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface p-6">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary-light to-transparent" />
                  <h2 className="font-heading font-black text-lg text-foreground">
                    {careerDetailCopy.general.bottomTitle}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed mt-3">
                    {careerDetailCopy.general.bottomDescription}
                  </p>
                  <button
                    type="button"
                    onClick={openApplyDialog}
                    className="inline-flex w-full items-center justify-center gap-2 mt-6 px-5 py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-light transition-colors"
                  >
                    {careerDetailCopy.general.bottomButton}
                  </button>
                  <div className="mt-5 pt-5 border-t border-white/[0.07]">
                    <p className="text-xs text-muted leading-relaxed">
                      {careerDetailCopy.metaLabels.location}:{' '}
                      <span className="text-foreground/80">{job.location}</span>
                    </p>
                    <p className="text-xs text-muted leading-relaxed mt-2">
                      {careerDetailCopy.metaLabels.experience}:{' '}
                      <span className="text-foreground/80">{job.experience}</span>
                    </p>
                  </div>
                </div>
                <Link
                  href="/career"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-muted hover:text-primary-light transition-colors"
                >
                  <span aria-hidden="true">←</span> {careerDetailCopy.backToCareers}
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Application dialog */}
      {isApplyOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsApplyOpen(false);
          }}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="apply-dialog-title"
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/[0.1] bg-[#0F1520] shadow-2xl"
          >
            <div className="sticky top-0 z-10 bg-[#0F1520]/95 backdrop-blur border-b border-white/[0.07] px-6 sm:px-8 py-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary-light mb-2">
                  {careerDetailCopy.eyebrow}
                </p>
                <h2 id="apply-dialog-title" className="font-heading font-black text-xl sm:text-2xl text-foreground">
                  {careerDetailCopy.applicationDialog.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed mt-2">{job.title}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsApplyOpen(false)}
                aria-label={careerDetailCopy.applicationDialog.closeButtonLabel}
                className="shrink-0 w-10 h-10 rounded-xl border border-white/[0.08] text-muted hover:text-foreground hover:bg-white/[0.05] transition-colors"
              >
                <svg className="mx-auto" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            {applicationSubmitted ? (
              <div className="px-6 sm:px-8 py-12 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-accent-green/30 bg-accent-green/10">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3EBA3A" strokeWidth="2.2" aria-hidden="true">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </div>
                <h3 className="font-heading font-black text-2xl text-foreground mb-3">
                  {careerDetailCopy.applicationDialog.successTitle}
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-md mx-auto">
                  {careerDetailCopy.applicationDialog.successDescription}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsApplyOpen(false);
                    setApplicationSubmitted(false);
                  }}
                  className="mt-7 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-light transition-colors"
                >
                  {careerDetailCopy.applicationDialog.successButton}
                </button>
              </div>
            ) : (
            <form onSubmit={handleApplySubmit} className="px-6 sm:px-8 py-6 sm:py-8 space-y-5">
              <p className="text-sm text-muted leading-relaxed">{careerDetailCopy.applicationDialog.subtitle}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="application-full-name" className="block text-xs font-bold uppercase tracking-widest text-muted mb-2">
                    {careerDetailCopy.applicationDialog.nameLabel} <span className="text-primary-light">*</span>
                  </label>
                  <input
                    id="application-full-name"
                    autoComplete="name"
                    required
                    value={form.fullName}
                    onChange={(event) => updateForm('fullName', event.target.value)}
                    placeholder={careerDetailCopy.applicationDialog.namePlaceholder}
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <label htmlFor="application-email" className="block text-xs font-bold uppercase tracking-widest text-muted mb-2">
                    {careerDetailCopy.applicationDialog.emailLabel} <span className="text-primary-light">*</span>
                  </label>
                  <input
                    id="application-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(event) => updateForm('email', event.target.value)}
                    placeholder={careerDetailCopy.applicationDialog.emailPlaceholder}
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <label htmlFor="application-phone" className="block text-xs font-bold uppercase tracking-widest text-muted mb-2">
                    {careerDetailCopy.applicationDialog.phoneLabel} <span className="text-primary-light">*</span>
                  </label>
                  <input
                    id="application-phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={(event) => updateForm('phone', event.target.value)}
                    placeholder={careerDetailCopy.applicationDialog.phonePlaceholder}
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <label htmlFor="application-linkedin" className="block text-xs font-bold uppercase tracking-widest text-muted mb-2">
                    {careerDetailCopy.applicationDialog.linkedinLabel} <span className="text-primary-light">*</span>
                  </label>
                  <input
                    id="application-linkedin"
                    type="url"
                    value={form.linkedin}
                    required
                    onChange={(event) => updateForm('linkedin', event.target.value)}
                    placeholder={careerDetailCopy.applicationDialog.linkedinPlaceholder}
                    className={fieldClassName}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="application-resume" className="block text-xs font-bold uppercase tracking-widest text-muted mb-2">
                  {careerDetailCopy.applicationDialog.resumeLabel} <span className="text-primary-light">*</span>
                </label>
                <input
                  id="application-resume"
                  type="url"
                  value={form.resumeUrl}
                  required
                  onChange={(event) => updateForm('resumeUrl', event.target.value)}
                  placeholder={careerDetailCopy.applicationDialog.resumePlaceholder}
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="application-cover-note" className="block text-xs font-bold uppercase tracking-widest text-muted mb-2">
                  {careerDetailCopy.applicationDialog.messageLabel}
                </label>
                <textarea
                  id="application-cover-note"
                  rows={4}
                  value={form.coverNote}
                  onChange={(event) => updateForm('coverNote', event.target.value)}
                  placeholder={careerDetailCopy.applicationDialog.messagePlaceholder}
                  className={`${fieldClassName} resize-y`}
                />
              </div>

              {formError && <p role="alert" className="text-sm text-red-400">{formError}</p>}

              <p className="text-xs text-muted leading-relaxed">{careerDetailCopy.applicationDialog.privacyNote}</p>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsApplyOpen(false)}
                  className="px-5 py-3 rounded-xl border border-white/[0.1] text-muted text-sm font-semibold hover:text-foreground hover:bg-white/[0.04] transition-colors"
                >
                  {careerDetailCopy.applicationDialog.cancelButton}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-light transition-colors disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? careerDetailCopy.applicationDialog.submittingButton
                    : careerDetailCopy.applicationDialog.submitButton}
                  {isSubmitting ? (
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 2 11 13" />
                      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
