'use client';

import React, { useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

const features = [
'Quick mapping with multiple drones simultaneously',
'Near real-time data feeds for disaster relief teams',
'ML and AI assistance for damage assessment',
'Seamless, coordinated drone delivery operations',
'Actionable metrics for efficient disaster relief'];


export default function Drones4ReliefSection() {
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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const els = sectionRef?.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 relief-gradient pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(62,186,58,0.06) 0%, transparent 60%)'
        }} />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent-green/25 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="reveal mb-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-[2px] h-5 bg-accent-green" />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Impact Initiative</span>
              </div>
              <h2
                className="font-heading font-black text-foreground tracking-tight leading-[0.95]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}>
                
                Drones
                <span className="text-gradient-blue">4</span>
                Relief
              </h2>
            </div>

            <p className="text-base text-muted leading-relaxed mb-8 reveal reveal-delay-1">
              A cloud-based humanitarian solution that harnesses drone technology for disaster response — bringing speed, precision, and intelligence to the teams that need it most.
            </p>

            <ul className="space-y-3 mb-10 reveal reveal-delay-2">
              {features?.map((f) =>
              <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                  <div className="w-5 h-5 rounded-full bg-accent-green/15 border border-accent-green/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                  </div>
                  {f}
                </li>
              )}
            </ul>

            {/* Coming soon badge */}
            <div className="reveal reveal-delay-3 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-accent-green/25 bg-accent-green/8">
              <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span className="text-sm font-bold text-accent-green tracking-wide">Coming Soon</span>
              <span className="text-xs text-muted">— Join the waitlist</span>
            </div>
          </div>

          {/* Right: Images stacked */}
          <div className="relative reveal reveal-delay-2">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Main image */}
              <div className="col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] relative h-56 sm:h-72">
                <AppImage
                  src="https://www.vayukah.com/img/products/Drones4relief/drones_4_relief_01.png"
                  alt="Multiple drones flying in formation over disaster affected area for humanitarian mapping mission"
                  fill
                  className="object-cover object-center" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                  <span className="text-xs font-bold text-foreground/80 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                    Active Deployment
                  </span>
                </div>
              </div>

              {/* Secondary image */}
              <div className="col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] relative h-40 sm:h-52">
                <AppImage
                  src="https://www.vayukah.com/img/products/Drones4relief/Drones_4_Relief_03.png"
                  alt="Drone delivering aid package to remote disaster relief location during emergency response operation"
                  fill
                  className="object-cover object-center" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
              </div>
            </div>

            {/* Stat overlay card */}
            <div className="absolute -top-4 -right-4 bg-surface border border-accent-green/20 rounded-xl p-4 shadow-xl">
              <div className="text-xs text-muted mb-1">Response Time</div>
              <div className="text-2xl font-black font-heading text-accent-green">{'<'} 5 min</div>
              <div className="text-xs text-muted">map deployment</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}