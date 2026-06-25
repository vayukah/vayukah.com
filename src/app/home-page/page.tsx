'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import SolutionsSection from './components/SolutionsSection';
import Drones4ReliefSection from './components/Drones4ReliefSection';
import VideoModal from './components/VideoModal';

export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    // Scroll reveal for top-level reveals not handled by section refs
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal:not(.active)')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-foreground font-body relative">
      {/* Scan line decoration */}
      <div className="scan-line" />

      <Header />

      <main>
        <HeroSection onWatchVideo={() => setVideoOpen(true)} />
        <ProductsSection />
        <SolutionsSection />
        <Drones4ReliefSection />
      </main>

      <Footer />

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}