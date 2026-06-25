'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  onWatchVideo: () => void;
}

export default function HeroSection({ onWatchVideo }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid bg-grid pt-24">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep radial glow - primary */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,86,214,0.12) 0%, rgba(6,86,214,0.04) 40%, transparent 70%)'
          }} />
        
        {/* Orange accent glow top-right */}
        <div
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(235,138,12,0.08) 0%, transparent 70%)'
          }} />
        
        {/* Green accent glow bottom-left */}
        <div
          className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(62,186,58,0.06) 0%, transparent 70%)'
          }} />
        
        {/* Monolith background text */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-heading font-black uppercase whitespace-nowrap select-none"
          style={{
            fontSize: 'clamp(6rem, 22vw, 28rem)',
            lineHeight: 1,
            letterSpacing: '-0.08em',
            opacity: 0.025
          }}>
          
          VAYUKAH
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 reveal active">
              <div className="w-[2px] h-5 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">
                UAV Ecosystem
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-orange/30 bg-accent-orange/10">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                <span className="text-xs font-bold text-accent-orange tracking-wide">VIGOR S50 Available</span>
              </div>
            </div>

            {/* Headline */}
            <div className="reveal active reveal-delay-1">
              <h1
                className="font-heading font-black tracking-tighter leading-[0.9] text-foreground"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
                
                Survey &amp; Mapping
                <br />
                <span className="text-gradient-brand ">Made Easy.</span>
              </h1>
            </div>

            {/* Sub */}
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-lg reveal active reveal-delay-2">
              Vayukah builds the complete drone stack — precision UAV hardware,
              intelligent batteries, and DroneSharp software — so your team
              maps more ground in less time.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 reveal active reveal-delay-3">
              <a
                href="/drone"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5">
                
                Explore Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <button
                onClick={onWatchVideo}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/10 text-sm font-semibold text-foreground hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group">
                
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
                    <path d="M0 0L10 6L0 12V0Z" />
                  </svg>
                </div>
                Watch Video
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-4 reveal active reveal-delay-4">
              {[
              { val: '50 min', label: 'Flight Time' },
              { val: '1 kg', label: 'Max Payload' },
              { val: '10 m/s', label: 'Top Speed' }].
              map((stat) =>
              <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-xl font-black font-heading text-foreground tracking-tight">{stat.val}</span>
                  <span className="text-xs text-muted font-medium uppercase tracking-widest">{stat.label}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Drone image */}
          <div className="relative  items-center justify-center">
            {/* Orbital rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[480px] h-[480px] rounded-full border border-primary/10"
                style={{ animation: 'spin 30s linear infinite' }} />
              
              <div
                className="absolute w-[360px] h-[360px] rounded-full border border-accent-orange/10"
                style={{ animation: 'spin 20s linear infinite reverse' }} />
              
              <div
                className="absolute w-[240px] h-[240px] rounded-full border border-accent-green/10"
                style={{ animation: 'spin 15s linear infinite' }} />
              
            </div>

            {/* Glow behind drone */}
            <div
              className="absolute w-80 h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(6,86,214,0.2) 0%, transparent 70%)',
                filter: 'blur(40px)'
              }} />
            

            {/* Drone image */}
            <div className="relative z-10 animate-float scale-[2] origin-center">
              <AppImage
                src="/assets/images/Drones/dronelayout.png"
                alt="Vayukah VIGOR S50 drone top-down layout view showing quad-rotor configuration"
                width={1160}
                height={840}
                priority
                className="w-full max-w-[960px] lg:max-w-none object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 40px rgba(6,86,214,0.35))' } as React.CSSProperties} />
              
            </div>

            {/* Floating data cards */}
            <div className="absolute top-8 right-0 bg-surface border border-white/[0.08] rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm">
              <div className="text-xs text-muted font-medium mb-0.5">Status</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-sm font-bold text-foreground">Systems Nominal</span>
              </div>
            </div>
            <div className="absolute bottom-12 left-0 bg-surface border border-white/[0.08] rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm">
              <div className="text-xs text-muted font-medium mb-0.5">Altitude</div>
              <div className="text-lg font-black text-primary font-heading">120 m</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
      style={{ background: 'linear-gradient(to top, #080B12, transparent)' }} />
    </section>);

}