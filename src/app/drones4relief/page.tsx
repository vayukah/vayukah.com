'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';

const features = [
{
  title: 'Rapid Area Mapping',
  desc: 'Deploy multiple drones simultaneously to map large disaster-affected areas in minutes, not hours.',
  icon: '🗺️',
  color: '#3EBA3A',
  bg: 'rgba(62,186,58,0.1)'
},
{
  title: 'Real-time Data Feeds',
  desc: 'Near real-time aerial data streams delivered directly to disaster relief command centers.',
  icon: '📡',
  color: '#0656D6',
  bg: 'rgba(6,86,214,0.1)'
},
{
  title: 'AI Damage Assessment',
  desc: 'Machine learning algorithms automatically identify and classify structural damage from aerial imagery.',
  icon: '🤖',
  color: '#EB8A0C',
  bg: 'rgba(235,138,12,0.1)'
},
{
  title: 'Coordinated Delivery',
  desc: 'Seamless, coordinated drone delivery operations for aid packages to hard-to-reach locations.',
  icon: '📦',
  color: '#4B9EFF',
  bg: 'rgba(75,158,255,0.1)'
},
{
  title: 'Actionable Metrics',
  desc: 'Comprehensive dashboards with actionable metrics to help relief teams prioritize and allocate resources.',
  icon: '📊',
  color: '#A78BFA',
  bg: 'rgba(167,139,250,0.1)'
},
{
  title: 'Multi-drone Coordination',
  desc: 'Centralized command and control for fleets of drones operating across a disaster zone simultaneously.',
  icon: '🚁',
  color: '#3EBA3A',
  bg: 'rgba(62,186,58,0.1)'
}];


const useCases = [
{
  title: 'Flood Response',
  desc: 'Rapid mapping of flood extents, identification of stranded survivors, and coordination of rescue operations.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_144f88300-1767429099298.png",
  imageAlt: 'Drones flying over flooded area for disaster response mapping',
  color: '#0656D6'
},
{
  title: 'Earthquake Relief',
  desc: 'Structural damage assessment, search and rescue support, and supply delivery to collapsed building sites.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d98d3fa4-1774950935346.png",
  imageAlt: 'Drone delivering aid supplies to earthquake affected area',
  color: '#EB8A0C'
}];


export default function Drones4ReliefPage() {
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

  return (
    <div className="min-h-screen bg-bg text-foreground font-body relative">
      <div className="scan-line" />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-grid pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none relief-gradient" />
          <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(62,186,58,0.08) 0%, rgba(6,86,214,0.05) 40%, transparent 70%)' }} />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-heading font-black uppercase whitespace-nowrap select-none pointer-events-none"
            style={{ fontSize: 'clamp(3rem, 14vw, 18rem)', lineHeight: 1, letterSpacing: '-0.08em', opacity: 0.018 }}>
            RELIEF
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div className="space-y-7">
                <div className="flex items-center gap-3 reveal active">
                  <div className="w-[2px] h-5 bg-accent-green" />
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Impact Initiative</span>
                  <div className="badge-hover flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-green/30 bg-accent-green/10 hover:bg-accent-green/20 hover:border-accent-green/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                    <span className="text-xs font-bold text-accent-green tracking-wide">Coming Soon</span>
                  </div>
                </div>

                <div className="reveal active reveal-delay-1">
                  <h1 className="font-heading font-black tracking-tighter leading-[0.9] text-foreground"
                  style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
                    Drones
                    <span className="text-gradient-blue">4</span>
                    <br />
                    <span style={{ background: 'linear-gradient(135deg, #3EBA3A 0%, #4B9EFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      Relief
                    </span>
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-muted leading-relaxed max-w-lg reveal active reveal-delay-2">
                  A cloud-based humanitarian solution that harnesses drone technology for disaster response — bringing speed, precision, and intelligence to the teams that need it most.
                </p>

                <div className="flex flex-wrap gap-3 reveal active reveal-delay-3">
                  <Link href="/contact"
                  className="btn-green inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg"
                  style={{ background: '#3EBA3A', boxShadow: '0 8px 24px rgba(62,186,58,0.25)' }}>
                    Join the Waitlist
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                  <Link href="/drone"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-sm font-semibold text-foreground hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                    View VIGOR S50
                  </Link>
                </div>

                {/* Key stats */}
                <div className="flex flex-wrap gap-5 pt-2 reveal active reveal-delay-4">
                  {[
                  { val: '< 5 min', label: 'Map Deployment' },
                  { val: 'Multi-drone', label: 'Coordination' },
                  { val: 'AI-powered', label: 'Assessment' }]?.
                  map((s) =>
                  <div key={s?.label} className="flex flex-col gap-0.5">
                      <span className="text-xl font-black font-heading text-foreground tracking-tight">{s?.val}</span>
                      <span className="text-xs text-muted font-medium uppercase tracking-widest">{s?.label}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Images */}
              <div className="relative reveal reveal-delay-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] relative h-56 sm:h-72">
                    <AppImage
                      src="https://www.vayukah.com/img/products/Drones4relief/drones_4_relief_01.png"
                      alt="Multiple drones flying in formation over disaster affected area for humanitarian mapping mission"
                      fill
                      priority
                      className="object-cover object-center" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                      <span className="text-xs font-bold text-foreground/80 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                        Active Deployment
                      </span>
                    </div>
                  </div>
                  <div className="col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] relative h-40 sm:h-52">
                    <AppImage
                      src="https://www.vayukah.com/img/products/Drones4relief/Drones_4_Relief_03.png"
                      alt="Drone delivering aid package to remote disaster relief location during emergency response operation"
                      fill
                      className="object-cover object-center" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
                  </div>
                </div>
                {/* Stat card */}
                <div className="absolute -top-4 -right-4 bg-surface border border-accent-green/20 rounded-xl p-4 shadow-xl">
                  <div className="text-xs text-muted mb-1">Response Time</div>
                  <div className="text-2xl font-black font-heading text-accent-green">{'<'} 5 min</div>
                  <div className="text-xs text-muted">map deployment</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #080B12, transparent)' }} />
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent-green/25 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[2px] h-5 bg-accent-green" />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Capabilities</span>
              </div>
              <h2 className="font-heading font-black text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Technology for Humanity
              </h2>
              <p className="mt-3 text-muted max-w-xl">
                Drones4Relief combines our drone hardware, GCS software, and cloud platform into a unified humanitarian response system.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features?.map((feat, i) =>
              <div key={feat?.title}
              className={`card-lift card-lift-green reveal reveal-delay-${i % 4 + 1} bg-surface border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden group`}>
                  <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(to right, ${feat?.color}, transparent)` }} />
                  <div className="text-2xl mb-4">{feat?.icon}</div>
                  <h3 className="font-heading font-black text-lg text-foreground mb-2">{feat?.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feat?.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(62,186,58,0.05) 0%, transparent 60%)' }} />
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[2px] h-5 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Applications</span>
              </div>
              <h2 className="font-heading font-black text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Where We Deploy
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases?.map((uc, i) =>
              <div key={uc?.title}
              className={`card-lift card-lift-green reveal reveal-delay-${i + 1} group bg-surface border border-white/[0.07] rounded-2xl overflow-hidden relative`}>
                  <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(to right, ${uc?.color}, transparent)` }} />
                  <div className="relative h-52 overflow-hidden">
                    <AppImage
                    src={uc?.image}
                    alt={uc?.imageAlt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-black text-xl text-foreground mb-2">{uc?.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{uc?.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="p-10 bg-surface border border-accent-green/15 rounded-3xl relative overflow-hidden transition-all duration-500 hover:border-accent-green/30">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-green to-transparent" />
              <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(62,186,58,0.08) 0%, transparent 60%)' }} />
              <div className="relative z-10">
                <div className="badge-hover inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/25 mb-6 hover:bg-accent-green/20 hover:border-accent-green/45">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                  <span className="text-xs font-bold text-accent-green tracking-wide">Coming Soon</span>
                </div>
                <h2 className="font-heading font-black text-3xl text-foreground tracking-tight mb-4">
                  Be Part of the Mission
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-8 max-w-lg mx-auto">
                  Drones4Relief is currently in development. Join our waitlist to be among the first to access this humanitarian drone platform when it launches.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact"
                  className="btn-green inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg"
                  style={{ background: '#3EBA3A', boxShadow: '0 8px 24px rgba(62,186,58,0.25)' }}>
                    Join the Waitlist
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                  <Link href="/home-page"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-sm font-semibold text-foreground hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}