'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const specs_drone = [
  { label: 'Flight Time', value: '50 min' },
  { label: 'Swappable Payloads', value: 'Multi Camera' },
  { label: 'Top Speed', value: '10 m/s' },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const els = sectionRef?.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[2px] h-5 bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Hardware</span>
          </div>
          <h2 className="font-heading font-black text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Our Products
          </h2>
          <p className="mt-3 text-muted max-w-xl">
            Built to exacting quality standards and tested rigorously. Fly with confidence.
          </p>
        </div>

        {/* VIGOR S50 — side by side layout */}
        <div className="card-lift card-lift-orange reveal reveal-delay-1 group bg-surface border border-orange-500/20 rounded-2xl overflow-hidden relative">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-transparent" />

          <div className="flex flex-col lg:flex-row">
            {/* Left side — content / matter */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="badge-hover inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-3 hover:bg-orange-500/20 hover:border-orange-500/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-xs font-bold text-orange-400 tracking-wide">UAV Platform</span>
                  </div>
                  <h3 className="font-heading font-black text-2xl text-foreground tracking-tight">VIGOR S50</h3>
                  <p className="text-sm text-muted mt-1">Powerhouse survey UAV</p>
                </div>
                <Link
                  href="/drone"
                  className="flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-foreground transition-colors group-hover:gap-2.5 duration-300">
                  Know More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </div>

              {/* Specs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {specs_drone?.map((s) => (
                  <div key={s?.label} className="badge-hover inline-flex items-center px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-300 hover:bg-orange-500/20 hover:border-orange-500/40">
                    {s?.value} {s?.label}
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted leading-relaxed">
                Built to exacting quality standards, the VIGOR S50 has gone through a rigorous test regime so you can fly confidently on every mission.
              </p>
            </div>

            {/* Right side — drone image */}
            <div className="flex-1 relative min-h-[280px] lg:min-h-[360px] overflow-hidden">
              <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.15) 0%, transparent 70%)' }}
              />
              <AppImage
                src="/assets/images/Drones/VS50_front.png"
                alt="VIGOR S50 quad-rotor survey drone top-down layout showing arm configuration and motor placement"
                fill
                className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}