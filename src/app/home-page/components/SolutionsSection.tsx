'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const solutions = [
{
  tag: 'Ground Control',
  tagColor: 'text-primary-light',
  tagBg: 'bg-primary/10 border-primary/20',
  dotColor: 'bg-primary',
  accentBar: 'from-primary via-primary-light to-transparent',
  name: 'DroneSharp GCS',
  desc: 'Specialized ground control station for survey and mapping operations. Plan, execute, and preview missions with precision.',
  features: [
  'Multi mission management',
  'Inflight survey preview',
  'Real-time telemetry'],

  href: '/dronesharpgcs',
  image: '/assets/images/DronesharpGCS/drone_map_01.png',
  imageAlt: 'DroneSharp GCS mission planning interface showing drone flight path on map',
  ctaColor: 'text-primary-light',
  hoverGlow: 'rgba(6,86,214,0.12)'
},
{
  tag: 'Cloud Platform',
  tagColor: 'text-accent-green',
  tagBg: 'bg-accent-green/10 border-accent-green/20',
  dotColor: 'bg-accent-green',
  accentBar: 'from-accent-green via-green-400 to-transparent',
  name: 'DroneSharp Cloud',
  desc: 'Cloud-based photogrammetry platform for processing survey data, managing projects, and collaborating with your team.',
  features: [
  'Cloud photogrammetry processing',
  'Survey project management',
  'GCP interface & control'],

  href: '/dronesharpcloud',
  image: '/assets/images/Dronesharp.io/Dronesharp_result.png',
  imageAlt: 'DroneSharp Cloud project dashboard showing photogrammetry processing status and 3D model preview',
  ctaColor: 'text-accent-green',
  hoverGlow: 'rgba(62,186,58,0.12)'
}];


export default function SolutionsSection() {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[2px] h-5 bg-accent-green" />
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Software</span>
          </div>
          <h2 className="font-heading font-black text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Our Solutions
          </h2>
          <p className="mt-3 text-muted max-w-xl">
            From mission planning on the ground to processing in the cloud — DroneSharp closes the loop on your survey workflow.
          </p>
        </div>

        {/* Solutions — alternating layout */}
        <div className="space-y-8">
          {solutions?.map((sol, i) =>
          <div
            key={sol?.name}
            className={`card-lift ${i === 0 ? 'card-lift-blue' : 'card-lift-green'} reveal ${i === 0 ? 'reveal-delay-1' : 'reveal-delay-2'} group bg-surface border border-white/[0.07] rounded-2xl overflow-hidden relative`}>
            
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${sol?.accentBar}`} />

              <div className={`grid md:grid-cols-2 gap-0 ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Text side */}
                <div className={`p-8 lg:p-10 flex flex-col justify-between ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div>
                    <div className={`badge-hover inline-flex items-center gap-2 px-3 py-1 rounded-full border ${sol?.tagBg} mb-4 transition-all duration-250`}
                  style={{ transition: 'background 0.25s ease, border-color 0.25s ease' }}>
                      <div className={`w-1.5 h-1.5 rounded-full ${sol?.dotColor}`} />
                      <span className={`text-xs font-bold ${sol?.tagColor} tracking-wide`}>{sol?.tag}</span>
                    </div>

                    <h3 className="font-heading font-black text-2xl lg:text-3xl text-foreground tracking-tight mb-3">
                      {sol?.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">{sol?.desc}</p>

                    <ul className="space-y-2.5 mb-8">
                      {sol?.features?.map((f) =>
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                          <div className={`w-1.5 h-1.5 rounded-full ${sol?.dotColor} flex-shrink-0`} />
                          {f}
                        </li>
                    )}
                    </ul>
                  </div>

                  <Link
                  href={sol?.href}
                  className={`inline-flex items-center gap-2 text-sm font-bold ${sol?.ctaColor} hover:text-foreground transition-colors group-hover:gap-3 duration-300`}>
                  
                    Know More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                </div>

                {/* Image side */}
                <div className={`relative min-h-[260px] md:min-h-0 overflow-hidden ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(ellipse at center, ${sol?.hoverGlow} 0%, transparent 70%)` }} />
                
                  <AppImage
                  src={sol?.image}
                  alt={sol?.imageAlt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                
                  <div
                  className="absolute inset-0"
                  style={{ background: i % 2 === 1 ? 'linear-gradient(to right, transparent, rgba(15,21,32,0.7))' : 'linear-gradient(to left, transparent, rgba(15,21,32,0.7))' }} />
                
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}