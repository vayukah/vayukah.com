'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import DownloadModal from '@/components/DownloadModal';

const highlights = [
{
  title: 'Powerhouse of a UAV',
  desc: 'Multi-directional range finders and obstacle detection keep your mission safe and your data clean.',
  features: ['Multi-directional range finders', 'Obstacle detection and stop'],
  image: "/assets/images/Drones/VS50_top.png",
  imageAlt: 'VIGOR S50 top-down layout showing quad-rotor arm configuration',
  accent: 'primary',
  accentColor: '#0c7feb',
  accentBg: 'rgba(29, 92, 175, 0.12)'
},
{
  title: 'Payload Quick Release',
  desc: 'Swap payloads in seconds. Up to 15 lens combinations supported for any survey scenario.',
  features: ['Instant payload swap', 'Up to 15 lens combinations'],
  image: "/assets/images/Drones/Quick_release.png",
  imageAlt: 'VIGOR S50 payload quick-release mechanism detail',
  accent: 'green',
  accentColor: '#EB8A0C',
  accentBg: 'rgba(235,138,12,0.1)'
},
{
  title: 'Compact to Transport',
  desc: 'Folds down to fit in a standard backpack. Deploy in minutes, not hours.',
  features: ['Fits into a backpack', 'Quick and easy deployment'],
  image: "/assets/images/Drones/Drone_compact.png",
  imageAlt: 'VIGOR S50 folded compact form factor for transport',
  accent: 'orange',
  accentColor: '#3EBA3A',
  accentBg: ' rgba(62,186,58,0.1)'
}];


const keySpecs = [
{ label: 'Flight Time', value: '50 min', sub: 'with payload' },
{ label: 'Control Range', value: '1 km', sub: 'SIYI MK 15E' },
{ label: 'Top Speed', value: '10 m/s', sub: 'max velocity' },
{ label: 'Max Payload', value: '1 kg', sub: 'quick release' },
{ label: 'MTOW', value: '6.4 kg', sub: 'gross takeoff' }];

const cameras = [
{
  name: 'Sony Alpha 6100',
  gimbal: '1-Axis Pivot Mount',
  gimbalColor: '#EB8A0C',
  gimbalBg: 'rgba(235,138,12,0.12)',
  image: "/assets/images/Drones/A6100_payload.png",
  specs: [
    { label: 'Sensor', value: '24.2 MP APS-C' },
    { label: 'Lens Mount', value: 'Sony E-Mount' },
    { label: 'Video', value: '4K 30fps' },
    { label: 'Stabilisation', value: '1-Axis Pivot Mount' },
  ],
  description: 'Beginner friendly camera with 90 degree tilt range, suitable for Survey mapping and inspection tasks.',
},
{
  name: 'Sony ILX-LR1',
  gimbal: '3-Axis Gimbal',
  gimbalColor: '#3EBA3A',
  gimbalBg: 'rgba(62,186,58,0.12)',
  image: "/assets/images/Drones/ILX-LR1_payload.png",
  specs: [
    { label: 'Sensor', value: '61 MP Full-Frame' },
    { label: 'Lens Mount', value: 'Sony E-Mount' },
    { label: 'Video', value: '4K 60fps' },
    { label: 'Stabilisation', value: '3-Axis Gimbal' },
  ],
  description: 'High - resolution camera engineered for UAVs, paired with a 3-axis gimbal for ultra stable high-detail aerial imaging, large scale surveys and inspection applications.',
},
];


export default function DronePage() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
        title="Download VIGOR S50 Brochure"
        subtitle="Fill in your details to get the brochure."
        web3FormsKey="ebc811c0-947f-4216-9781-4ffb0db915b2"
        fileUrl="https://dronesharpgcs-downloads.s3.ap-south-1.amazonaws.com/releases/VIGOR-S50-Brochure.pdf"
        fileName="VIGOR-S50-Brochure.pdf"
        submitLabel="Submit & Download Brochure"
        successMessage="Your brochure download has started. Check your downloads folder."
        subject="VIGOR S50 Brochure Download Request"
      />

      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-grid pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          {/* Background glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(235,138,12,0.1) 0%, rgba(235,138,12,0.03) 40%, transparent 70%)' }} />
            <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(235,138,12,0.07) 0%, transparent 70%)' }} />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-heading font-black uppercase whitespace-nowrap select-none"
              style={{ fontSize: 'clamp(5rem, 18vw, 22rem)', lineHeight: 1, letterSpacing: '-0.08em', opacity: 0.018 }}>
              VIGOR
            </div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div className="space-y-7">
                <div className="flex items-center gap-3 reveal active">
                  <div className="w-[2px] h-5" style={{ background: '#EB8A0C' }} />
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">UAV Platform</span>
                  <div className="badge-hover flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ border: '1px solid rgba(235,138,12,0.3)', background: 'rgba(235,138,12,0.1)', transition: 'background 0.25s ease, border-color 0.25s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(235,138,12,0.2)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(235,138,12,0.5)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(235,138,12,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(235,138,12,0.3)'; }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                    <span className="text-xs font-bold tracking-wide" style={{ color: '#EB8A0C' }}>Available Now</span>
                  </div>
                </div>

                <div className="reveal active reveal-delay-1">
                  <div className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-muted mb-2">VIGOR</div>
                  <h1 className="font-heading font-black tracking-tighter leading-[0.9] text-foreground"
                  style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
                    S50
                    <br />
                    <span style={{ color: '#EB8A0C' }}>Drone</span>
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-muted leading-relaxed max-w-lg reveal active reveal-delay-2">
                  A stable platform for Survey, Mapping and Inspection projects with a wide range of lens. Equipped with PPK module, pivoting camera mount and obstacle detection.
                </p>

                <div className="flex flex-wrap gap-3 reveal active reveal-delay-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                    style={{ background: '#EB8A0C', boxShadow: '0 8px 24px rgba(235,138,12,0.25)' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#f59e0b')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#EB8A0C')}>
                    Download Brochure
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
                    </svg>
                  </button>
                  <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-sm font-semibold text-foreground hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                    Request a Demo
                  </Link>
                </div>

                {/* Key specs row */}
                {/*<div className="flex flex-wrap gap-5 pt-2 reveal active reveal-delay-4">
                  {[{ val: '45 min', label: 'Flight Time' }, { val: '1 km', label: 'Range' }, { val: '10 m/s', label: 'Top Speed' }].map((s) =>
                  <div key={s.label} className="flex flex-col gap-0.5">
                      <span className="text-xl font-black font-heading text-foreground tracking-tight">{s.val}</span>
                      <span className="text-xs text-muted font-medium uppercase tracking-widest">{s.label}</span>
                    </div>
                  )}
                </div>*/}
              </div>

              {/* Right: Drone image */}
              <div className="relative  items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[460px] h-[460px] rounded-full" style={{ border: '1px solid rgba(235,138,12,0.1)', animation: 'spin 30s linear infinite' }} />
                  <div className="absolute w-[340px] h-[340px] rounded-full" style={{ border: '1px solid rgba(235,138,12,0.1)', animation: 'spin 20s linear infinite reverse' }} />
                  <div className="absolute w-[220px] h-[220px] rounded-full" style={{ border: '1px solid rgba(235,138,12,0.1)', animation: 'spin 15s linear infinite' }} />
                </div>
                <div className="absolute w-72 h-72 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(235,138,12,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                <div className="relative z-10 animate-float">
                  <AppImage
                    src="/assets/images/Drones/dronelayout.png"
                    alt="Vayukah VIGOR S50 quad-rotor survey drone top-down layout"
                    width={1160}
                    height={840}
                    priority
                    className="w-full max-w-[960px] object-contain drop-shadow-2xl"
                    style={{ filter: 'drop-shadow(0 0 40px rgba(235,138,12,0.35))' } as React.CSSProperties} />
                  
                </div>
                {/* Floating cards */}
                <div className="absolute top-6 right-0 bg-surface border border-white/[0.08] rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm">
                  <div className="text-xs text-muted font-medium mb-0.5">PPK Module</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                    <span className="text-sm font-bold text-foreground">Integrated</span>
                  </div>
                </div>
                <div className="absolute bottom-10 left-0 bg-surface border border-white/[0.08] rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm">
                  <div className="text-xs text-muted font-medium mb-0.5">Obstacle Detection</div>
                  <div className="text-lg font-black font-heading" style={{ color: '#EB8A0C' }}>360°</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #080B12, transparent)' }} />
        </section>

        {/* Key Specs Strip */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 border-y border-white/[0.05] bg-surface/40">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {keySpecs.map((spec, i) =>
              <div key={spec.label} className={`reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''} text-center`}>
                  <div className="text-2xl font-black font-heading text-foreground tracking-tight">{spec.value}</div>
                  <div className="text-xs font-bold mt-0.5" style={{ color: '#EB8A0C' }}>{spec.label}</div>
                  <div className="text-xs text-muted mt-0.5">{spec.sub}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section ref={sectionRef} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(235,138,12,0.3), transparent)' }} />
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[2px] h-5" style={{ background: '#EB8A0C' }} />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Features</span>
              </div>
              <h2 className="font-heading font-black text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Built for the Field
              </h2>
              <p className="mt-3 text-muted max-w-xl">
                Every feature of the VIGOR S50 is engineered for real-world survey and mapping operations.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((h, i) =>
              <div key={h.title}
              className={`card-lift card-lift-orange reveal reveal-delay-${i + 1} group bg-surface border border-white/[0.07] rounded-2xl overflow-hidden relative`}>
                  <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(to right, ${h.accentColor}, transparent)` }} />
                  <div className={`grid md:grid-cols-2 gap-0 ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    {/* Text */}
                    <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <div className="badge-hover inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 transition-all duration-250"
                    style={{ background: h.accentBg, borderColor: `${h.accentColor}33` }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${h.accentColor}66`; (e.currentTarget as HTMLElement).style.background = h.accentBg.replace('0.1', '0.2').replace('0.12', '0.22'); }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${h.accentColor}33`; (e.currentTarget as HTMLElement).style.background = h.accentBg; }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: h.accentColor }} />
                        <span className="text-xs font-bold tracking-wide" style={{ color: h.accentColor }}>
                          {h.accent === 'primary' ? 'Safety' : h.accent === 'orange' ? 'Portability' : 'Versatility'}
                        </span>
                      </div>
                      <h3 className="font-heading font-black text-2xl lg:text-3xl text-foreground tracking-tight mb-3">{h.title}</h3>
                      <p className="text-sm text-muted leading-relaxed mb-6">{h.desc}</p>
                      <ul className="space-y-2.5">
                        {h.features.map((f) =>
                      <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: h.accentColor }} />
                            {f}
                          </li>
                      )}
                      </ul>
                    </div>
                    {/* Image */}
                    <div className={`relative min-h-[240px] md:min-h-0 overflow-hidden ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <div className="absolute inset-0"
                    style={{ background: `radial-gradient(ellipse at center, ${h.accentBg} 0%, transparent 70%)` }} />
                      <AppImage src={h.image} alt={h.imageAlt} fill
                    className="object-contain p-10 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0"
                    style={{ background: i % 2 === 1 ? 'linear-gradient(to right, transparent, rgba(15,21,32,0.6))' : 'linear-gradient(to left, transparent, rgba(15,21,32,0.6))' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="my-20 reveal">
              <div className="card-lift card-lift-blue reveal reveal-delay-${i + 1} group bg-surface relative rounded-2xl overflow-hidden border border-white/[0.08] bg-black">
                <div className="relative w-full h-[320px] md:h-[420px] lg:h-[520px]">
                  <AppImage src="/assets/images/Drones/Drone_giff.gif" alt="Drone animation preview" fill unoptimized className="object-contain" />
                </div>
              </div>
            </div>

            {/* Camera Details */}
            <div className="mt-20 reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[2px] h-5" style={{ background: '#EB8A0C' }} />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Camera Options</span>
              </div>
              <h2 className="font-heading font-black text-foreground tracking-tight mb-3" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
                Payload Cameras
              </h2>
              <p className="text-muted text-sm max-w-xl mb-10">
                The VIGOR S50 supports two professional camera payloads, each paired with a precision gimbal for stable, high-quality aerial imaging.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {cameras.map((cam, i) => (
                  <div key={cam.name}
                    className={`reveal reveal-delay-${i + 1} bg-surface border border-white/[0.07] rounded-2xl overflow-hidden relative group transition-all duration-300 hover:border-white/[0.14]`}>
                    <div className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${cam.gimbalColor}, transparent)` }} />
                    <div className="p-8">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-5"
                        style={{ background: cam.gimbalBg, borderColor: `${cam.gimbalColor}33` }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: cam.gimbalColor }} />
                        <span className="text-xs font-bold tracking-wide" style={{ color: cam.gimbalColor }}>{cam.gimbal}</span>
                      </div>
                      {/* Camera icon */}
                      <div className="flex flex-col items-center text-center gap-4 mb-4">
                        <div className="w-full max-w-[220px] rounded-xl overflow-hidden border" style={{ background: cam.gimbalBg, borderColor: `${cam.gimbalColor}33` }}>
                          <img src={cam.image} alt={cam.name} width={400} height={300} className="w-full object-contain p-2" style={{ filter: `drop-shadow(0 0 20px ${cam.gimbalColor}55)` }} />
                        </div>
                        <h3 className="font-heading font-black text-xl text-foreground tracking-tight">{cam.name}</h3>
                      </div>
                      <p className="text-sm text-muted leading-relaxed mb-6">{cam.description}</p>
                      {/* Specs grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {cam.specs.map((spec) => (
                          <div key={spec.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
                            <div className="text-xs text-muted font-medium mb-1">{spec.label}</div>
                            <div className="text-sm font-bold text-foreground">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Vigor S50 - Key Features */}
            <div className="mt-20 reveal">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
                  style={{ border: '1px solid rgba(62,186,58,0.4)', background: 'rgba(62,186,58,0.08)' }}>
                  <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#3EBA3A' }}>Key Features</span>
                </div>
                <h2 className="font-heading font-black text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                  Why Vigor S50?
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* PPK */}
                <div className="reveal reveal-delay-1 bg-surface border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:border-white/[0.14] transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(235,138,12,0.12)', border: '1px solid rgba(235,138,12,0.25)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EB8A0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-lg text-foreground tracking-tight mb-2">PPK</h3>
                    <p className="text-sm text-muted leading-relaxed">Post-Processed Kinematic positioning for centimeter-level accuracy in survey and mapping workflows.</p>
                  </div>
                </div>
                {/* 50-Min Endurance */}
                <div className="reveal reveal-delay-2 bg-surface border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:border-white/[0.14] transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(62,186,58,0.12)', border: '1px solid rgba(62,186,58,0.25)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3EBA3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="2" width="12" height="20" rx="2" />
                      <path d="M10 6h4M10 10h4M10 14h2" />
                      <path d="M6 18h12" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-lg text-foreground tracking-tight mb-2">50-Min Endurance</h3>
                    <p className="text-sm text-muted leading-relaxed">Industry-leading flight time powered by our intelligent smart battery system.</p>
                  </div>
                </div>
                {/* Autonomous Missions */}
                <div className="reveal reveal-delay-3 bg-surface border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:border-white/[0.14] transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(235,138,12,0.12)', border: '1px solid rgba(235,138,12,0.25)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EB8A0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-lg text-foreground tracking-tight mb-2">Autonomous Missions</h3>
                    <p className="text-sm text-muted leading-relaxed">Pre-planned waypoint missions with Dronesharp GCS for fully automated surveys.</p>
                  </div>
                </div>
                {/* Made in India */}
                <div className="reveal reveal-delay-4 bg-surface border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:border-white/[0.14] transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(62,186,58,0.12)', border: '1px solid rgba(62,186,58,0.25)' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3EBA3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-lg text-foreground tracking-tight mb-2">Made in India</h3>
                    <p className="text-sm text-muted leading-relaxed">Designed and manufactured in Vijayawada, built for Indian terrain and regulations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-14 reveal text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-surface border border-white/[0.07] rounded-2xl transition-all duration-400 hover:border-accent-orange/20">
                <div className="text-left">
                  <div className="font-heading font-black text-xl text-foreground mb-1">Ready to fly?</div>
                  <div className="text-sm text-muted">View the complete technical specifications or get in touch.</div>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="btn-orange inline-flex items-center gap-2 px-6 py-3 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg"
                    style={{ background: '#EB8A0C', boxShadow: '0 8px 24px rgba(235,138,12,0.25)' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#f59e0b')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#EB8A0C')}>
                    Download Brochure
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
                    </svg>
                  </button>
                  <Link href="/contact"
                  className="px-6 py-3 border border-white/10 text-sm font-semibold text-foreground rounded-xl hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                    Contact Us
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