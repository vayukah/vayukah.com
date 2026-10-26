'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const values = [
  {
    title: 'Quality First',
    desc: 'We build to exacting standards. Every component, every weld, every line of code is held to the highest bar before it ships.',
    color: '#0656D6',
    bg: 'rgba(6,86,214,0.1)',
    icon: '🎯',
  },
  {
    title: 'Innovation in Engineering',
    desc: 'We combine software design, simulation, and rapid prototyping to achieve robust designs that are highly reliable.',
    color: '#EB8A0C',
    bg: 'rgba(235,138,12,0.1)',
    icon: '⚙️',
  },
  {
    title: 'User-Centric Design',
    desc: 'Our drones incorporate features that enable an ordinary user to operate safely and securely — no expert required.',
    color: '#3EBA3A',
    bg: 'rgba(62,186,58,0.1)',
    icon: '👤',
  },
  {
    title: 'Made in India',
    desc: 'Based in Andhra Pradesh, we are building world-class drone technology in India, for India and the world.',
    color: '#4B9EFF',
    bg: 'rgba(75,158,255,0.1)',
    icon: '🇮🇳',
  },
];


const founders = [
  {
    id: "founder-1",
    name: "Vinay Pavan Kumar Kotagiri",
    designation: "Co-Founder & CEO",
    image: "/assets/images/Persons/vinay_photo.png",
    linkedin: "https://www.linkedin.com/in/vinaykotagiri-tech/",
    isDeceased: false,
  },
  {
    id: "founder-2",
    name: "Vijay Kumar Kotagiri",
    designation: "Founder",
    description:
      "Vayukah forever honors his excellence, vision and lasting legacy",
    image: "/assets/images/Persons/Vijay_photo.jpg",
    //linkedin: "https://www.linkedin.com/in/founder-two/",
    isDeceased: true,
  },
  {
    id: "founder-3",
    name: " Kali Prasad Damera",
    designation: "Co-Founder & CRO",
    image: "/assets/images/Persons/Kail_photo.jpg",
    linkedin: "https://www.linkedin.com/in/kali-prasad-damera-7b754223b/",
    isDeceased: false,
  },
];


const milestones = [
  { year: '2021', event: 'Vayukah Inception ' },
  { year: '2022', event: 'Vigor S50 Design initiated' },
  { year: '2023', event: 'Functional Prototype is ready and tested' },
  { year: '2024', event: 'Updated Vigor S50 with Obstacle detection sensors' },
  { year: '2025', event: 'Introduced Payload swapabillity and gimbal payload' },
  { year: '2026', event: 'Currently undergoing Type certification' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/vayukah-drones',
    desc: 'Follow our company updates',
    color: '#0A66C2',
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@vayukahdrones8395',
    desc: 'Watch our drone in action',
    color: '#FF0000',
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/vayukahdrones?cplk=MXEyN3Y1YWtzZ3Iwaw==',
    desc: 'Follow us on Instagram',
    color: '#E1306C',
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:info@vayukah.com',
    desc: 'info@vayukah.com',
    color: '#EB8A0C',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
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
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-grid pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(6,86,214,0.09) 0%, rgba(62,186,58,0.04) 40%, transparent 70%)' }} />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-heading font-black uppercase whitespace-nowrap select-none"
              style={{ fontSize: 'clamp(4rem, 16vw, 20rem)', lineHeight: 1, letterSpacing: '-0.08em', opacity: 0.018 }}>
              TEAM
            </div>
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6 reveal active">
              <div className="w-[2px] h-5 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Our Story</span>
              <div className="w-[2px] h-5 bg-primary" />
            </div>

            <h1 className="font-heading font-black tracking-tighter leading-[0.9] text-foreground mb-6 reveal active reveal-delay-1"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
              We are Team
              <br />
              <span className="text-gradient-blue">Vayukah.</span>
            </h1>

            <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto reveal active reveal-delay-2">
              We are passionate about drones. We build reliable, efficient, compliant and user-friendly enterprise drones with a strong focus on quality, technology and usability.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #080B12, transparent)' }} />
        </section>

        {/* Mission */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Story */}
              <div className="reveal">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-[2px] h-5 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Who We Are</span>
                </div>
                <div className="space-y-5 text-muted leading-relaxed">
                  <p className="text-base">
                    Vayukah is a UAS/RPAS (Drone) manufacturing startup based in the Sunrise state of Andhra Pradesh. We strive to build reliable, efficient, compliant and user friendly enterprise drones with a strong focus on quality, technology and usability.
                  </p>
                  <p className="text-base">
                    We focus on strong innovation in engineering and system integration that aims to achieve large scale manufacturing of drones in India. Our drones are DGCA compliant and can be registered to generate a UIN number.
                  </p>
                  <p className="text-base">
                    We design, build and test our drones using a combination of software design, simulation and rapid prototyping. These expertise are built in-house by our engineers using a combination of software and hardware systems.
                  </p>
                  <p className="text-base">
                    The amalgamation of the software ecosystem and robust hardware is our unique proposition — a complete end-to-end drone solution for survey, mapping and inspection.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="reveal reveal-delay-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-[2px] h-5 bg-accent-green" />
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Our Journey</span>
                </div>
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/[0.06]" />
                  <div className="space-y-6">
                    {milestones?.map((m, i) => (
                      <div key={m?.year} className="flex gap-5 items-start">
                        <div className="w-10 h-10 rounded-full bg-surface border border-white/[0.08] flex items-center justify-center flex-shrink-0 relative z-10">
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        </div>
                        <div className="pt-1.5">
                          <div className="text-xs font-bold text-primary-light uppercase tracking-widest mb-1">{m?.year}</div>
                          <div className="text-sm text-foreground/80">{m?.event}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location card */}
                <div className="mt-8 p-6 bg-surface border border-white/[0.07] rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-orange via-yellow-400 to-transparent" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" fill="none" stroke="#EB8A0C" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground mb-1">Registered Office</div>
                      <div className="text-xs text-muted leading-relaxed">
                        Vayukah Drone Systems and Services Pvt Ltd<br />
                        3rd Floor, Plot no: 283/B, Opp. Vivan Building,<br />
                        New Autonagar, Kanuru, Vijayawada, AP-520007
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 30%, rgba(6,86,214,0.06) 0%, transparent 60%)",
            }}
          />

          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
              {/* Existing content — unchanged */}
              <div className="text-center lg:text-left">
                <div
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 text-sm font-semibold"
                  style={{
                    background: "rgba(6,86,214,0.1)",
                    color: "#0656D6",
                  }}
                >
                  🏆 Runner-Up – Drone Hackathon – Amaravati Drone Summit 2024
                </div>
                
                <h2
                  className="font-heading font-black text-foreground tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
                >
                  Disaster Response with Drones
                </h2>
                
                <p className="text-muted leading-relaxed">
                  Vigor S50 was deployed during the Vijayawada floods of 2024 to support aerial
                  mapping, damage assessment, and planning of drone-based relief operations —
                  demonstrating real-world impact in disaster management.
                </p>
              </div>
                
              {/* Award-receiving photo: 1600 × 738 aspect ratio */}
              <div className="w-full overflow-hidden rounded-2xl border border-blue-500/20 shadow-xl">
                <img
                  src="/assets/images/award-receiving.jpg"
                  alt="Vigor S50 team receiving the award at Amaravati Drone Summit 2024"
                  width={1400}
                  height={738}
                  loading="lazy"
                  className="block w-full h-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-250"
                  style={{ aspectRatio: "1600 / 738" }}
                />
              </div>
            </div>
          </div>
        </section>

         <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 50% 30%, rgba(6,86,214,0.06) 0%, transparent 60%)',
              }}
            />

            <div className="max-w-3xl mx-auto text-center">

              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 text-sm font-semibold"
                style={{
                  background: 'rgba(6,86,214,0.1)',
                  color: '#EB8A0C',
                }}
              >
                    🛰️ Stage 1 finalists - ISRO NavIC grant challenge 2024
              </div>

              <h2
                className="font-heading font-black text-foreground tracking-tight mb-4"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
              >
                NavIC integration in Drones
              </h2>

              <p className="text-muted leading-relaxed">
                Vayukah is one of the company among the 20 finalists across India for integrating NavIC based Navigation systems into drones, which removes the need on GPS and also offers much precise local navigation.
              </p>

            </div>
         </section>

         <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, rgba(6,86,214,0.06) 0%, transparent 60%)",
              }}
            />

            <div className="max-w-7xl mx-auto relative">
              {/* Section heading */}
              <div className="text-center mb-14 reveal">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-[2px] h-5 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">
                    The People Behind Vayukah
                  </span>
                  <div className="w-[2px] h-5 bg-primary" />
                </div>

                <h2
                  className="font-heading font-black text-foreground tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  Meet Our Founders
                </h2>

                <p className="text-muted leading-relaxed max-w-2xl mx-auto mt-4">
                  The vision, engineering, and dedication behind our journey.
                </p>
              </div>

              {/* Founder cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {founders.map((founder, i) => (
                  <article
                    key={founder.id}
                    className={`group relative overflow-hidden rounded-2xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
                      founder.isDeceased
                        ? "bg-[#10141C] border-slate-500/30 hover:border-slate-400/50"
                        : "bg-surface border-white/[0.07] hover:border-blue-500/40"
                    } reveal`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {/* Top accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[3px] ${
                        founder.isDeceased
                          ? "bg-gradient-to-r from-slate-400 via-slate-500 to-transparent"
                          : "bg-gradient-to-r from-[#0656D6] via-[#4B9EFF] to-transparent"
                      }`}
                    />

                    {/* Profile image */}
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-28 h-28 rounded-full overflow-hidden border-2 mb-5 ${
                          founder.isDeceased
                            ? "border-slate-400/50"
                            : "border-blue-500/40"
                        }`}
                      >
                        <img
                          src={founder.image}
                          alt={founder.name}
                          width={112}
                          height={112}
                          loading="lazy"
                          className={`w-full h-full object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-110`}
                        />
                      </div>

                      {/* Name */}
                      <h3 className="font-heading font-black text-xl text-foreground mb-2">
                        {founder.name}
                      </h3>

                      {/* Designation */}
                      <p
                        className={`text-sm font-semibold mb-3 ${
                          founder.isDeceased
                            ? "text-slate-300"
                            : "text-blue-400"
                        }`}
                      >
                        {founder.designation}
                      </p>

                      {/* Memorial badge */}
                      {founder.isDeceased && (
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-500/10 border border-slate-400/20 text-slate-300 mb-4">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
                          </svg>
                          In Loving Memory
                        </span>
                      )}

                      {/* Description */}
                      <p className="text-sm text-muted leading-relaxed mb-6">
                        {founder.description}
                      </p>

                      {/* LinkedIn */}
                      {founder.linkedin && !founder.isDeceased && (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${founder.name}'s LinkedIn profile`}
                          className={`mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                            founder.isDeceased
                              ? "border-slate-500/30 text-slate-300 hover:bg-slate-500/10 hover:border-slate-400/50"
                              : "border-[#0A66C2]/30 text-[#60A5FA] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/60"
                          }`}
                        >
                          <svg
                            width="17"
                            height="17"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          View LinkedIn Profile
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(6,86,214,0.05) 0%, transparent 60%)' }} />
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[2px] h-5 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Our Values</span>
              </div>
              <h2 className="font-heading font-black text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                What Drives Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values?.map((val, i) => (
                <div key={val?.title}
                  className={`card-lift reveal reveal-delay-${i + 1} bg-surface border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: `linear-gradient(to right, ${val?.color}, transparent)` }} />
                  <div className="text-3xl mb-4">{val?.icon}</div>
                  <h3 className="font-heading font-black text-lg text-foreground mb-2">{val?.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{val?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent-green/25 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[2px] h-5 bg-accent-green" />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Connect</span>
              </div>
              <h2 className="font-heading font-black text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Follow Our Journey
              </h2>
              <p className="mt-3 text-muted max-w-xl">
                Stay updated on our progress, open source contributions, and drone footage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks?.map((link, i) => (
                <a key={link?.name} href={link?.href} target="_blank" rel="noopener noreferrer"
                  className={`card-lift reveal reveal-delay-${i + 1} group bg-surface border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4 hover:border-white/[0.15] transition-all duration-300`}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${link?.color}15`, border: `1px solid ${link?.color}30`, color: link?.color }}>
                    {link?.icon}
                  </div>
                  <div>
                    <div className="font-heading font-black text-base text-foreground mb-1 group-hover:text-primary-light transition-colors">{link?.name}</div>
                    <div className="text-xs text-muted">{link?.desc}</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold mt-auto" style={{ color: link?.color }}>
                    Follow
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center reveal">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-0.5">
                Get in Touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
