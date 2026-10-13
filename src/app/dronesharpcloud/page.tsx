'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';

const workflowSteps = [
{
  step: '01',
  title: 'Project Creation',
  desc: 'Create a new survey project, define the area of interest, and configure processing parameters.',
  image: "/assets/images/Dronesharp.io/Dronesharpio_project.png",
  imageAlt: 'DroneSharp Cloud project creation dashboard',
  color: '#0656D6',
  bg: 'rgba(6,86,214,0.1)'
},
{
  step: '02',
  title: 'Image Upload',
  desc: 'Upload your aerial imagery directly from the field. Supports batch uploads with automatic metadata extraction.',
  image: "/assets/images/Dronesharp.io/Dronesharp_image.png",
  imageAlt: 'DroneSharp Cloud image upload interface',
  color: '#ffba4b',
  bg: 'rgba(255, 246, 75, 0.1)'
},
{
  step: '03',
  title: 'View Results',
  desc: 'Access your photogrammetry outputs — orthomosaics, point clouds, DSMs — directly in the browser.',
  image: "/assets/images/Dronesharp.io/Dronesharp_result.png",
  imageAlt: 'DroneSharp Cloud photogrammetry results viewer',
  color: '#14d606',
  bg: 'rgba(51, 214, 6, 0.1)'
},
{
  step: '04',
  title: 'GCP Interface',
  desc: 'Mark Ground Control Points to achieve centimetre-level accuracy in your final deliverables.',
  image: "/assets/images/Dronesharp.io/Dronesharpio_GCPS.png",
  imageAlt: 'DroneSharp Cloud GCP marking interface',
  color: '#4B9EFF',
  bg: 'rgba(75,158,255,0.1)'
}];


const outputs = [
  { name: 'Orthomosaic', desc: 'High-resolution stitched imagery', format: '.GeoTIFF' },
  { name: 'Point Cloud', desc: 'Dense 3D reconstruction data', format: '.LAS' },
  { name: 'DSM / DTM', desc: 'Surface and terrain elevation models', format: '.TIFF' }
];


const cloudFeatures = [
{ title: 'Cloud Photogrammetry', desc: 'Process large datasets at cloud scale without local hardware constraints.', icon: '☁️' },
{ title: 'Project Management', desc: 'Organise all your survey projects, clients, and deliverables in one place.', icon: '📁' },
{ title: 'GCP Interface', desc: 'Intuitive GCP marking tool for survey-grade accuracy.', icon: '📍' },
{ title: 'Team Collaboration', desc: 'Share projects and results with clients and team members instantly.', icon: '👥' },
{ title: 'Multiple Outputs', desc: 'Generate orthomosaics, point clouds, DSMs, and 3D models.', icon: '🗺️' },
{ title: 'Secure Storage', desc: 'All your data stored securely in the cloud with access controls.', icon: '🔒' }];


export default function DroneSharpCloudPage() {
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
        <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-grid pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(75,158,255,0.08) 0%, rgba(6,86,214,0.05) 40%, transparent 70%)' }} />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-heading font-black uppercase whitespace-nowrap select-none"
              style={{ fontSize: 'clamp(3rem, 12vw, 16rem)', lineHeight: 1, letterSpacing: '-0.08em', opacity: 0.018 }}>
              CLOUD
            </div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div className="space-y-7">
                <div className="flex items-center gap-3 reveal active">
                  <div className="w-[2px] h-5" style={{ background: '#0656D6' }} />
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Cloud Platform</span>
                  <div className="badge-hover flex items-center gap-1.5 px-3 py-1 rounded-full border" style={{ borderColor: 'rgba(6,86,214,0.3)', background: 'rgba(6,86,214,0.1)', transition: 'background 0.25s ease, border-color 0.25s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(6,86,214,0.2)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,86,214,0.5)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(6,86,214,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,86,214,0.3)'; }}>
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#0656D6' }} />
                    <span className="text-xs font-bold tracking-wide" style={{ color: '#4B9EFF' }}>Live</span>
                  </div>
                </div>

                <div className="reveal active reveal-delay-1">
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted mb-2">DroneSharp</div>
                  <h1 className="font-heading font-black tracking-tighter leading-[0.9] text-foreground"
                  style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
                    Cloud
                    <br />
                    <span style={{ background: 'linear-gradient(135deg, #0656D6 0%, #4B9EFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      Platform
                    </span>
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-muted leading-relaxed max-w-lg reveal active reveal-delay-2">
                  DroneSharp Cloud is our photogrammetry offering that is cloud scale. Process, manage, and deliver survey projects from anywhere in the world.
                </p>

                <div className="flex flex-wrap gap-3 reveal active reveal-delay-3">
                  <Link href="/contact"
                  className="btn-blue inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg"
                  style={{ background: '#0656D6', boxShadow: '0 8px 24px rgba(6,86,214,0.25)' }}>
                    Get Early Access
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                  <Link href="/dronesharpgcs"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-sm font-semibold text-foreground hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                    DroneSharp GCS
                  </Link>
                </div>

                {/* Key features pills */}
                <div className="flex flex-wrap gap-2 reveal active reveal-delay-4">
                  {['Photogrammetry', 'Project Mgmt', 'GCP Interface']?.map((tag) =>
                  <span key={tag} className="spec-pill badge-hover" style={{ background: 'rgba(6,86,214,0.1)', borderColor: 'rgba(6,86,214,0.25)', color: '#4B9EFF' }}>
                      {tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Right: Cloud dashboard screenshot */}
              <div className="relative reveal reveal-delay-2">
                <div className="absolute inset-0 rounded-2xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(6,86,214,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                <div className="relative z-10 rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                  <AppImage
                    src="/assets/images/Dronesharp.io/Dronesharp_result.png"
                    alt="DroneSharp Cloud project dashboard showing photogrammetry processing status"
                    width={700}
                    height={480}
                    priority
                    className="w-full object-cover" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
                </div>
                {/* Stat card */}
                <div className="absolute -bottom-4 -left-4 bg-surface rounded-xl p-4 shadow-xl" style={{ border: '1px solid rgba(6,86,214,0.2)' }}>
                  <div className="text-xs text-muted mb-1">Processing</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#0656D6' }} />
                    <span className="text-sm font-bold text-foreground">Cloud Scale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #080B12, transparent)' }} />
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent to-transparent" style={{ background: 'linear-gradient(to right, transparent, rgba(6,86,214,0.25), transparent)' }} />
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[2px] h-5" style={{ background: '#0656D6' }} />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Features</span>
              </div>
              <h2 className="font-heading font-black text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Everything You Need
              </h2>
              <p className="mt-3 text-muted max-w-xl">
                A complete cloud photogrammetry platform designed for professional survey teams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {cloudFeatures?.map((feat, i) =>
              <div key={feat?.title}
              className={`card-lift card-lift-blue reveal reveal-delay-${i % 4 + 1} bg-surface border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden group`}>
                  <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(to right, #0656D6, #4B9EFF, transparent)' }} />
                  <div className="text-2xl mb-4">{feat?.icon}</div>
                  <h3 className="font-heading font-black text-lg text-foreground mb-2">{feat?.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feat?.desc}</p>
                </div>
              )}
            </div>

            {/* Workflow Steps */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-10 reveal">
                <div className="w-[2px] h-5 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Workflow</span>
                <h3 className="font-heading font-black text-2xl text-foreground tracking-tight">From Flight to Deliverable</h3>
              </div>

              <div className="space-y-6">
                {workflowSteps?.map((step, i) =>
                <div key={step?.step}
                className={`card-lift card-lift-blue reveal reveal-delay-${i % 4 + 1} group bg-surface border border-white/[0.07] rounded-2xl overflow-hidden relative`}>
                    <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(to right, ${step?.color}, transparent)` }} />
                    <div className={`grid md:grid-cols-2 gap-0 ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                      <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                        <div className="text-5xl font-black font-heading mb-4"
                      style={{ color: step?.color, opacity: 0.3 }}>{step?.step}</div>
                        <div className="badge-hover inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 transition-all duration-250"
                      style={{ background: step?.bg, borderColor: `${step?.color}33` }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${step?.color}66`; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${step?.color}33`; }}>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: step?.color }} />
                          <span className="text-xs font-bold tracking-wide" style={{ color: step?.color }}>Step {step?.step}</span>
                        </div>
                        <h3 className="font-heading font-black text-2xl text-foreground tracking-tight mb-3">{step?.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{step?.desc}</p>
                      </div>
                      <div className={`relative min-h-[220px] md:min-h-0 overflow-hidden ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                        <div className="absolute inset-0"
                      style={{ background: `radial-gradient(ellipse at center, ${step?.bg} 0%, transparent 70%)` }} />
                        <AppImage src={step?.image} alt={step?.imageAlt} fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0"
                      style={{ background: i % 2 === 1 ? 'linear-gradient(to right, transparent, rgba(15,21,32,0.6))' : 'linear-gradient(to left, transparent, rgba(15,21,32,0.6))' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-surface/20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">

              {/* Image */}
              <div className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background: 'linear-gradient(to top, rgba(6,86,214,0.15), transparent)'
                  }}
                />

                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_11cd46328-1774941888207.png"
                  alt="DroneSharp Cloud dashboard"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-2 flex flex-col gap-5">

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest mb-2 block"
                    style={{ color: '#0656D6' }}>
                    Output Formats
                  </span>

                  <h3 className="text-2xl font-heading font-black text-foreground tracking-tight">
                    Industry-Standard <span style={{ color: '#0656D6' }}>Deliverables</span>
                  </h3>

                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    Export your processed data in formats compatible with GIS software, CAD tools, and reporting systems.
                  </p>
                </div>

                {/* Cards */}
                <div className="flex flex-col gap-3">
                  {outputs.map((out, i) => (
                    <div
                      key={i}
                      className="rounded-lg p-4 border border-white/[0.08] bg-surface transition-all duration-300 flex items-center justify-between hover:shadow-lg"
                      style={{
                        boxShadow: '0 0 0 transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#0656D6';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(6,86,214,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div>
                        <p className="text-sm font-semibold text-foreground">{out.name}</p>
                        <p className="text-xs text-muted">{out.desc}</p>
                      </div>

                      <span
                        className="text-[10px] font-mono px-2 py-1 rounded ml-3"
                        style={{
                          color: '#0656D6',
                          background: 'rgba(6,86,214,0.12)'
                        }}
                      >
                        {out.format}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="p-10 bg-surface border border-white/[0.07] rounded-2xl relative overflow-hidden transition-all duration-500 hover:border-primary/20">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(to right, transparent, #0656D6, transparent)' }} />
              <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(6,86,214,0.07) 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <div className="badge-hover inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-5 transition-all duration-250" style={{ background: 'rgba(6,86,214,0.1)', borderColor: 'rgba(6,86,214,0.2)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(6,86,214,0.2)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,86,214,0.4)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(6,86,214,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,86,214,0.2)'; }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#0656D6' }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: '#4B9EFF' }}>Early Access</span>
                </div>
                <h2 className="font-heading font-black text-2xl lg:text-3xl text-foreground tracking-tight mb-3">
                  Process at cloud scale
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-7 max-w-lg mx-auto">
                  DroneSharp Cloud is available for early access. Get in touch to start processing your survey data in the cloud.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact"
                  className="btn-blue px-7 py-3.5 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg"
                  style={{ background: '#0656D6', boxShadow: '0 8px 24px rgba(6,86,214,0.25)' }}>
                    Get Early Access
                  </Link>
                  <Link href="/dronesharpgcs"
                  className="px-6 py-3.5 border border-white/10 text-sm font-semibold text-foreground rounded-xl hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                    Explore GCS
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