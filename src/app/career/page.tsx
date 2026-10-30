'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/*
 * EDITABLE CAREER OPENINGS
 * Replace these sample entries with approved, current openings before publishing.
 * Each slug maps to a future detail route: /career/[slug]
 */
const openPositions = [
  {
    id: 'senior-electronics-engineer',
    title: 'Senior Electronics Engineer',
    department: 'Engineering',
    location: 'Vijayawada, Andhra Pradesh',
    employmentType: 'Full-time',
    experience: '5+ years',
    summary:
      'Design, develop, and optimize electronic systems and components. Lead engineering projects, apply hands-on technical expertise, and mentor junior engineers.',
    slug: 'senior-electronics-engineer',
    workmode: 'On-site',
  },
  {
  id: 'mechanical-engineer',
  title: 'Mechanical Engineer',
  department: 'Engineering',
  location: 'Vijayawada, Andhra Pradesh',
  employmentType: 'Full-time',
  experience: '3+ years',
  summary:
    'Design, develop, manufacture, and test UAV airframes and structural components. Work on 3D CAD modelling, lightweight material selection, payload integration, vibration analysis, and design for manufacturing.',
  slug: 'mechanical-engineer',
  workmode: 'On-site',
},
];

export default function CareerPage() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.active)');

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
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-foreground font-body relative">
      <div className="scan-line" />
      <Header />

      <main>
        {/* Careers hero */}
        <section className="relative overflow-hidden bg-grid pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full"
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

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6 reveal active">
              <div className="w-[2px] h-5 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">
                Careers at Vayukah
              </span>
              <div className="w-[2px] h-5 bg-primary" />
            </div>

            <h1
              className="font-heading font-black tracking-tighter leading-[0.98] text-foreground mb-6 reveal active reveal-delay-1"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 5.2rem)' }}
            >
              Build the Future of <span className="text-gradient-blue">Flight.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl mx-auto reveal active reveal-delay-2">
              Join a team turning engineering, software, and UAV innovation into real-world solutions.
              Explore our openings and find where you can make an impact.
            </p>
          </div>
        </section>

        {/* Open positions */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(6,86,214,0.05) 0%, transparent 58%)',
            }}
          />

          <div className="max-w-6xl mx-auto relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 reveal">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[2px] h-5 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">
                    Join Our Team
                  </span>
                </div>
                <h2
                  className="font-heading font-black tracking-tight text-foreground"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
                >
                  Open Positions
                </h2>
                <p className="text-muted mt-3 max-w-2xl leading-relaxed">
                  Explore current opportunities to help design, build, and operate the next generation of UAV technology.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 self-start md:self-auto px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
                {openPositions.length} listed role{openPositions.length === 1 ? '' : 's'}
              </div>
            </div>

            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <article
                  key={position.id}
                  className="group reveal relative overflow-hidden bg-surface border border-white/[0.07] rounded-2xl p-5 sm:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-[#0656D6] via-[#4B9EFF] to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 pl-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium text-muted bg-white/[0.03] border border-white/[0.07]">
                          {position.employmentType}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium text-muted bg-white/[0.03] border border-white/[0.07]">
                          {position.workmode}
                        </span>
                      </div>

                      <h3 className="font-heading font-black text-xl sm:text-2xl text-foreground group-hover:text-primary-light transition-colors duration-300">
                        {position.title}
                      </h3>

                      <p className="text-sm sm:text-base text-muted leading-relaxed mt-3 max-w-3xl">
                        {position.summary}
                      </p>

                      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-sm text-muted">
                        <span className="inline-flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                          </svg>
                          {position.location}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                          </svg>
                          {position.experience}
                        </span>
                      </div>
                    </div>

                    <div className="lg:w-44 shrink-0">
                      <Link
                        href={`/career/${position.slug}`}
                        aria-label={`View details for ${position.title}`}
                        className="inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-primary text-white text-sm font-bold border border-primary/40 hover:bg-primary-light hover:border-primary-light transition-all duration-300 shadow-lg shadow-primary/15 hover:shadow-primary/30"
                      >
                        View Details
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-white/[0.07] bg-surface/70 reveal">
              <h3 className="font-heading font-black text-lg text-foreground">Don’t see the right role?</h3>
              <p className="text-sm text-muted leading-relaxed mt-2 max-w-2xl">
                We’re always interested in connecting with people passionate about UAVs, embedded systems, flight software, and engineering.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-primary-light hover:text-blue-300 transition-colors"
              >
                Contact our team
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
