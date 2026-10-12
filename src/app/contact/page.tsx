'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal:not(.active)')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (form.phone && !/^[\d\s\+\-\(\)]{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid number.';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Please enter a message.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      title: 'Registered Office',
      color: '#0656D6',
      bg: 'rgba(6,86,214,0.1)',
      icon: (
        <svg width="20" height="20" fill="none" stroke="#0656D6" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      lines: [
        'Vayukah Drone Systems and Services Pvt Ltd',
        '3rd Floor, Plot no: 283/B, Opp. Vivan Building,',
        'New Autonagar, Kanuru, Vijayawada, AP-520007',
      ],
    },
    {
      title: 'Phone',
      color: '#3EBA3A',
      bg: 'rgba(62,186,58,0.1)',
      icon: (
        <svg width="20" height="20" fill="none" stroke="#3EBA3A" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      lines: ['+91 63050 25285', '+91 94918 79611'],
    },
    {
      title: 'Email',
      color: '#EB8A0C',
      bg: 'rgba(235,138,12,0.1)',
      icon: (
        <svg width="20" height="20" fill="none" stroke="#EB8A0C" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      lines: ['jaswanthi.mukkamala@vayukah.com', 'info@vayukah.com'],
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-foreground font-body relative">
      <div className="scan-line" />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(6,86,214,0.09) 0%, transparent 70%)' }} />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-heading font-black uppercase whitespace-nowrap select-none"
              style={{ fontSize: 'clamp(4rem, 16vw, 20rem)', lineHeight: 1, letterSpacing: '-0.08em', opacity: 0.018 }}>
              HELLO
            </div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6 reveal active">
              <div className="w-[2px] h-5 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Get in Touch</span>
              <div className="w-[2px] h-5 bg-primary" />
            </div>
            <h1 className="font-heading font-black tracking-tighter leading-[0.9] text-foreground mb-5 reveal active reveal-delay-1"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Contact
              <br />
              <span className="text-gradient-blue">Us</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed reveal active reveal-delay-2">
              Have a question about our drones or software? Want to schedule a demo? We'd love to hear from you.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #080B12, transparent)' }} />
        </section>

        {/* Main content */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_420px] gap-10">
              {/* Form */}
              <div className="reveal">
                <div className="bg-surface border border-white/[0.07] rounded-2xl p-8 lg:p-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary-light to-transparent" />

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 rounded-full bg-accent-green/15 border border-accent-green/30 flex items-center justify-center mb-6">
                        <svg width="28" height="28" fill="none" stroke="#3EBA3A" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-heading font-black text-2xl text-foreground mb-3">Message Sent!</h3>
                      <p className="text-muted text-sm max-w-sm">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="mb-8">
                        <h2 className="font-heading font-black text-2xl text-foreground mb-1">Send us a message</h2>
                        <p className="text-sm text-muted">Fill out the form and we'll be in touch shortly.</p>
                      </div>

                      {/* Name row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            placeholder="Arjun"
                            className="w-full bg-bg border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            placeholder="Sharma"
                            className="w-full bg-bg border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="mb-4">
                        <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="arjun@company.com"
                          className={`w-full bg-bg border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted/50 focus:outline-none transition-all duration-200 ${
                            errors.email
                              ? 'border-red-500/50 focus:border-red-500/70 focus:ring-1 focus:ring-red-500/20' :'border-white/[0.08] focus:border-primary/50 focus:ring-1 focus:ring-primary/30'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="mb-4">
                        <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={`w-full bg-bg border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted/50 focus:outline-none transition-all duration-200 ${
                            errors.phone
                              ? 'border-red-500/50 focus:border-red-500/70 focus:ring-1 focus:ring-red-500/20' :'border-white/[0.08] focus:border-primary/50 focus:ring-1 focus:ring-primary/30'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div className="mb-6">
                        <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Message</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your project or question..."
                          className={`w-full bg-bg border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted/50 focus:outline-none transition-all duration-200 resize-none ${
                            errors.message
                              ? 'border-red-500/50 focus:border-red-500/70 focus:ring-1 focus:ring-red-500/20' :'border-white/[0.08] focus:border-primary/50 focus:ring-1 focus:ring-primary/30'
                          }`}
                        />
                        {errors.message && (
                          <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-5 reveal reveal-delay-2">
                {contactInfo.map((info) => (
                  <div key={info.title}
                    className="bg-surface border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${info.color}, transparent)` }} />
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: info.bg, border: `1px solid ${info.color}30` }}>
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: info.color }}>
                          {info.title}
                        </div>
                        {info.lines.map((line, i) => (
                          <div key={i} className="text-sm text-foreground/80 leading-relaxed">{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social links */}
                <div className="bg-surface border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-green via-green-400 to-transparent" />
                  <div className="text-xs font-bold uppercase tracking-widest text-accent-green mb-4">Follow Us</div>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/company/vayukah-drones/" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-colors">
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="https://github.com/vayukah" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-muted hover:text-foreground hover:bg-white/[0.08] transition-colors">
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@vayukahdrones8395" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/20 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000]/20 transition-colors">
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
