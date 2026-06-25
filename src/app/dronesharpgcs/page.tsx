'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import DownloadModal from '@/components/DownloadModal';

const flyingFeatures = [
'Mission repository',
'Context specific telemetry',
'Windows, Android',
'Audible prompts'];


const planningFeatures = [
'Missions tailored for payload types',
'Multiple map providers',
'Plan with terrain data',
'Mission presets'];


const platforms = [
{ name: 'Windows', icon: '🖥️', desc: 'Full-featured desktop client' },
{ name: 'Android', icon: '📱', desc: 'Mobile field operations' }];


const capabilities = [
{ title: 'Real-time Telemetry', desc: 'Context-specific data panels that surface exactly what you need during each phase of flight.', color: '#EB8A0C', bg: 'rgba(235,138,12,0.1)' },
{ title: 'Inflight Survey Preview', desc: 'See your survey coverage build in real time as the drone captures imagery.', color: '#0c7feb', bg: 'rgba(29, 92, 175, 0.12)' },
{ title: 'Weather Forecast', desc: 'Real-time weather insights including temperature, wind speed, humidity, and forecast to ensure safe and efficient drone operations.', color: '#3EBA3A', bg: 'rgba(62,186,58,0.1)' },
{ title: 'Terrain-aware Planning', desc: 'Import terrain data to automatically adjust flight altitude for consistent GSD across hilly terrain.', color: '#EB8A0C', bg: 'rgba(235,138,12,0.1)' }];


export default function DroneSharpGCSPage() {
  const [modalOpen, setModalOpen] = React.useState(false);

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
      <DownloadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Download Dronesharp GCS"
        subtitle="Fill in your details to get the installer."
        web3FormsKey="ebc811c0-947f-4216-9781-4ffb0db915b2"
        fileUrl="https://dronesharpgcs-downloads.s3.ap-south-1.amazonaws.com/releases/windows/v1.1.0/DronesharpGCS-installer.exe"
        fileName="DronesharpGCS-installer.exe"
        submitLabel="Submit & Download .exe"
        successMessage="Your download has started. Check your downloads folder."
        subject="Dronesharp GCS Download Request"
      />
      <main>
        {/* Hero */}
        <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-grid pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(235,138,12,0.1) 0%, rgba(235,138,12,0.03) 40%, transparent 70%)' }} />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-heading font-black uppercase whitespace-nowrap select-none"
              style={{ fontSize: 'clamp(3rem, 14vw, 18rem)', lineHeight: 1, letterSpacing: '-0.08em', opacity: 0.018 }}>
              GCS
            </div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div className="space-y-7">
                <div className="flex items-center gap-3 reveal active">
                  <div className="w-[2px] h-5 bg-accent-orange" />
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Ground Control</span>
                  <div className="badge-hover flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-orange/30 bg-accent-orange/10 hover:bg-accent-orange/20 hover:border-accent-orange/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                    <span className="text-xs font-bold text-accent-orange tracking-wide">Active</span>
                  </div>
                </div>

                <div className="reveal active reveal-delay-1">
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted mb-2">DroneSharp</div>
                  <h1 className="font-heading font-black tracking-tighter leading-[0.9] text-foreground"
                  style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
                    GCS
                    <br />
                    <span style={{ color: '#EB8A0C' }}>Software</span>
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-muted leading-relaxed max-w-lg reveal active reveal-delay-2">
                  DroneSharp GCS is our custom ground control software to optimally configure and fly the VIGOR UAV. Specialized for survey and mapping from the ground up.
                </p>

                <div className="flex flex-wrap gap-3 reveal active reveal-delay-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="btn-orange inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg"
                    style={{ background: '#EB8A0C', boxShadow: '0 8px 24px rgba(235,138,12,0.25)' }}>
                    Download
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
                    </svg>
                  </button>
                  <Link href="/dronesharpcloud"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-sm font-semibold text-foreground hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                    DroneSharp Cloud
                  </Link>
                </div>

                {/* Platform badges */}
                <div className="flex flex-wrap gap-3 reveal active reveal-delay-4">
                  {platforms?.map((p) =>
                  <div key={p?.name} className="badge-hover flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-white/[0.07] hover:border-accent-orange/30 hover:bg-accent-orange/5">
                      <span>{p?.icon}</span>
                      <span className="text-xs font-bold text-foreground">{p?.name}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: GCS screenshot */}
              <div className="relative reveal reveal-delay-2">
                <div className="absolute inset-0 rounded-2xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(235,138,12,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                <div className="relative z-10 rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                  <AppImage
                    src="/assets/images/DronesharpGCS/drone_map_01.png"
                    alt="DroneSharp GCS mission planning interface showing drone flight path on map"
                    width={700}
                    height={480}
                    priority
                    className="w-full object-cover" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
                </div>
                {/* Status card */}
                <div className="absolute -bottom-4 -right-4 bg-surface border border-accent-orange/20 rounded-xl p-4 shadow-xl">
                  <div className="text-xs text-muted mb-1">Mission Status</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                    <span className="text-sm font-bold text-foreground">In Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #080B12, transparent)' }} />
        </section>

        {/* Capabilities */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent-orange/30 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[2px] h-5 bg-accent-orange" />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Capabilities</span>
              </div>
              <h2 className="font-heading font-black text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Built for Survey Ops
              </h2>
              <p className="mt-3 text-muted max-w-xl">
                Every feature is purpose-built for survey and mapping workflows — not adapted from a generic GCS.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {capabilities?.map((cap, i) =>
              <div key={cap?.title}
              className={`card-lift card-lift-orange reveal reveal-delay-${i + 1} bg-surface border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(to right, ${cap?.color}, transparent)` }} />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                style={{ background: cap?.bg, border: `1px solid ${cap?.color}33` }}>
                    <div className="w-3 h-3 rounded-full" style={{ background: cap?.color }} />
                  </div>
                  <h3 className="font-heading font-black text-lg text-foreground mb-2">{cap?.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{cap?.desc}</p>
                </div>
              )}
            </div>

            {/* Flying + Planning sections */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Flying is a Breeze */}
              <div className="card-lift card-lift-orange reveal reveal-delay-1 group bg-surface border border-white/[0.07] rounded-2xl overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-orange via-yellow-400 to-transparent" />
                <div className="p-8">
                  <div className="badge-hover inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 mb-4 hover:bg-accent-orange/20 hover:border-accent-orange/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                    <span className="text-xs font-bold text-accent-orange tracking-wide">Flying</span>
                  </div>
                  <h3 className="font-heading font-black text-2xl text-foreground tracking-tight mb-3">Flying is a Breeze</h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    Intuitive controls and smart automation make operating the VIGOR S50 straightforward, even in complex survey environments.
                  </p>
                  <ul className="space-y-2.5">
                    {flyingFeatures?.map((f) =>
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-orange flex-shrink-0" />
                        {f}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(235,138,12,0.12) 0%, transparent 70%)' }} />
                  <AppImage
                    src="/assets/images/DronesharpGCS/drone_map_01.png"
                    alt="DroneSharp GCS flying interface with telemetry panels"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,21,32,0.8), transparent)' }} />
                </div>
              </div>

              {/* Planning is Fun */}
              <div className="card-lift card-lift-orange reveal reveal-delay-2 group bg-surface border border-white/[0.07] rounded-2xl overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-orange via-yellow-400 to-transparent" />
                <div className="p-8">
                  <div className="badge-hover inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 mb-4 hover:bg-accent-orange/20 hover:border-accent-orange/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                    <span className="text-xs font-bold text-accent-orange tracking-wide">Planning</span>
                  </div>
                  <h3 className="font-heading font-black text-2xl text-foreground tracking-tight mb-3">Planning is Fun</h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    Powerful mission planning tools that adapt to your payload and terrain, making pre-flight preparation fast and accurate.
                  </p>
                  <ul className="space-y-2.5">
                    {planningFeatures?.map((f) =>
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-orange flex-shrink-0" />
                        {f}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(235,138,12,0.1) 0%, transparent 70%)' }} />
                  <AppImage
                    src="/assets/images/DronesharpGCS/drone_map_02.png"
                    alt="DroneSharp GCS mission planning map view with waypoints"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,21,32,0.8), transparent)' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-14 reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 mb-4">
                <span className="text-xs font-bold text-accent-orange tracking-wide">USE CASES</span>
              </div>

              <h2
                className="font-heading font-black text-foreground tracking-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Industries We Serve
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Land Survey',
                  desc: 'High-accuracy topographic surveys for infrastructure and construction projects.',
                  icon: '🌍'
                },
                {
                  title: 'Precision Agriculture',
                  desc: 'Crop health monitoring, NDVI mapping, and field analytics for modern farming.',
                  icon: '🌱'
                },
                {
                  title: 'Construction Monitoring',
                  desc: 'Progress tracking, volumetric analysis, and site documentation at scale.',
                  icon: '🏗️'
                },
                {
                  title: 'Disaster Relief',
                  desc: 'Rapid aerial assessment and logistics support in humanitarian operations.',
                  icon: '🌊'
                },
                {
                  title: 'Infrastructure Inspection',
                  desc: 'Power lines, pipelines, and bridges inspected safely and efficiently.',
                  icon: '⚡'
                },
                {
                  title: 'Heritage Documentation',
                  desc: '3D digitization of historical sites and cultural heritage preservation.',
                  icon: '🏛️'
                }
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`card-lift reveal reveal-delay-${i + 1} bg-surface border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden hover:border-accent-orange/20 transition-all duration-300`}
                >
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-orange to-transparent" />

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-accent-orange/10 border border-accent-orange/20">
                    <span className="text-lg">{item.icon}</span>
                  </div>

                  <h3 className="font-heading font-black text-lg text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="p-10 bg-surface border border-white/[0.07] rounded-2xl relative overflow-hidden transition-all duration-500 hover:border-accent-orange/20">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-orange to-transparent" />
              <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(235,138,12,0.08) 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <div className="badge-hover inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 mb-5 hover:bg-accent-orange/20 hover:border-accent-orange/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                  <span className="text-xs font-bold text-accent-orange tracking-wide">Get Started</span>
                </div>
                <h2 className="font-heading font-black text-2xl lg:text-3xl text-foreground tracking-tight mb-3">
                  Ready to take control?
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-7 max-w-lg mx-auto">
                  DroneSharp GCS comes bundled with the VIGOR S50. Contact us to learn more or request a demonstration.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact"
                  className="btn-orange px-7 py-3.5 text-white font-bold text-sm rounded-xl transition-all duration-300"
                  style={{ background: '#EB8A0C', boxShadow: '0 8px 24px rgba(235,138,12,0.25)' }}>
                    Contact Us
                  </Link>
                  <Link href="/dronesharpcloud"
                  className="px-6 py-3.5 border border-white/10 text-sm font-semibold text-foreground rounded-xl hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                    Explore Cloud Platform
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