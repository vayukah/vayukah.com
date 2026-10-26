
'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

type ProductSpec = {
  label: string;
  value: string;
};

type ProductTheme = 'orange' | 'blue' | 'green' | 'purple';

type Product = {
  name: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  theme: ProductTheme;
  specs: ProductSpec[];
};

const products: Product[] = [
  {
    name: 'VIGOR S50',
    category: 'Survey and Mapping Platform',
    subtitle: 'Powerhouse survey UAV',
    description:
      'Built to exacting quality standards, the VIGOR S50 has gone through a rigorous test regime so you can fly confidently on every mission.',
    image: '/assets/images/Drones/VS50front.PNG',
    imageAlt: 'VIGOR S50 survey UAV showing its frame and motor configuration',
    href: '/drone',
    theme: 'orange',
    specs: [
      { label: 'Flight Time', value: '45 min' },
      { label: 'Swappable Payloads', value: 'Multi Camera' },
      { label: 'Top Speed', value: '10 m/s' },
    ],
  },
  {
    name: 'Delivery Drone',
    category: 'Delivery Platform',
    subtitle: 'Advanced aerial platform',
    description:
      'Add the product description here, including its capabilities and intended applications.',
    image: '/assets/images/Drones/DD_drone.PNG',
    imageAlt: 'Delivery Drone',
    href: '/dddrone',
    theme: 'blue',
    specs: [
      { label: 'Flight Time', value: '25 min' },
      { label: 'Payload', value: 'Cargo box' },
      { label: 'Top Speed', value: '10 m/s' },
    ],
  },
  {
    name: 'Viper VTOL',
    category: 'Survey and Mapping Platform',
    subtitle: 'Precision aerial platform',
    description:
      'Add the product description here, including its capabilities and intended applications.',
    image: '/assets/images/Drones/vtol_drone.PNG',
    imageAlt: 'Viper VTOL UAV',
    href: '/vtoldrone',
    theme: 'green',
    specs: [
      { label: 'Flight Time', value: '120 min' },
      { label: 'Control Range', value: '10 km' },
      { label: 'Top Speed', value: '15 m/s' },
    ],
  },
  /*{
    name: 'Product Four',
    category: 'UAV Platform',
    subtitle: 'Next-generation UAV solution',
    description:
      'Add the product description here, including its capabilities and intended applications.',
    image: '/assets/images/Drones/product-four.PNG',
    imageAlt: 'Product Four UAV',
    href: '/product-four',
    theme: 'purple',
    specs: [
      { label: 'Flight Time', value: '30 min' },
      { label: 'Payload', value: 'Custom Payload' },
      { label: 'Top Speed', value: '8 m/s' },
    ],
  },*/
];

const productThemes = {
  orange: {
    card: 'card-lift-orange',
    border: 'border-orange-500/20',
    accent: 'from-orange-500 via-orange-400 to-transparent',
    badge: 'bg-orange-500/10 border-orange-500/20',
    dot: 'bg-orange-500',
    text: 'text-orange-400',
    spec: 'text-orange-300',
    glow: 'rgba(249,115,22,0.15)',
    hover:
      'hover:bg-orange-500/20 hover:border-orange-500/40',
  },
  blue: {
    card: 'card-lift-blue',
    border: 'border-blue-500/20',
    accent: 'from-blue-500 via-blue-400 to-transparent',
    badge: 'bg-blue-500/10 border-blue-500/20',
    dot: 'bg-blue-500',
    text: 'text-blue-400',
    spec: 'text-blue-300',
    glow: 'rgba(59,130,246,0.15)',
    hover:
      'hover:bg-blue-500/20 hover:border-blue-500/40',
  },
  green: {
    card: 'card-lift-green',
    border: 'border-green-500/20',
    accent: 'from-green-500 via-green-400 to-transparent',
    badge: 'bg-green-500/10 border-green-500/20',
    dot: 'bg-green-500',
    text: 'text-green-400',
    spec: 'text-green-300',
    glow: 'rgba(34,197,94,0.15)',
    hover:
      'hover:bg-green-500/20 hover:border-green-500/40',
  },
  purple: {
    card: 'card-lift-purple',
    border: 'border-purple-500/20',
    accent: 'from-purple-500 via-purple-400 to-transparent',
    badge: 'bg-purple-500/10 border-purple-500/20',
    dot: 'bg-purple-500',
    text: 'text-purple-400',
    spec: 'text-purple-300',
    glow: 'rgba(168,85,247,0.15)',
    hover:
      'hover:bg-purple-500/20 hover:border-purple-500/40',
  },
};

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements =
      sectionRef.current?.querySelectorAll('.reveal');

    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[2px] h-5 bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">
              Hardware
            </span>
          </div>

          <h2
            className="font-heading font-black text-foreground tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Our Products
          </h2>

          <p className="mt-3 text-muted max-w-xl">
            Built to exacting quality standards and tested rigorously.
            Fly with confidence.
          </p>
        </div>

        {/* Products — alternating layout */}
        <div className="space-y-8">
          {products.map((product, index) => {
            const theme = productThemes[product.theme];

            return (
              <div
                key={product.name}
                className={`card-lift ${theme.card} reveal ${
                  index === 0 ? 'reveal-delay-1' : 'reveal-delay-2'
                } group bg-surface border ${theme.border} rounded-2xl overflow-hidden relative`}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${theme.accent}`}
                />

                {/* Alternating grid — same pattern as SolutionsSection */}
                <div
                  className={`grid md:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  {/* Text side */}
                  <div
                    className={`p-8 lg:p-10 flex flex-col justify-between ${
                      index % 2 === 1 ? 'md:col-start-2' : ''
                    }`}
                  >
                    <div>
                      {/* Category badge */}
                      <div
                        className={`badge-hover inline-flex items-center gap-2 px-3 py-1 rounded-full border ${theme.badge} mb-4 transition-all duration-250 ${theme.hover}`}
                        style={{
                          transition:
                            'background 0.25s ease, border-color 0.25s ease',
                        }}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${theme.dot}`}
                        />
                        <span
                          className={`text-xs font-bold ${theme.text} tracking-wide`}
                        >
                          {product.category}
                        </span>
                      </div>

                      {/* Product name */}
                      <h3 className="font-heading font-black text-2xl lg:text-3xl text-foreground tracking-tight mb-3">
                        {product.name}
                      </h3>

                      <p className="text-sm text-muted mb-2">
                        {product.subtitle}
                      </p>

                      {/* Product specifications */}
                      <div className="flex flex-wrap gap-2 mb-6 mt-5">
                        {product.specs.map((spec) => (
                          <div
                            key={spec.label}
                            className={`badge-hover inline-flex items-center px-3 py-1.5 rounded-full border ${theme.badge} text-xs font-semibold ${theme.spec} ${theme.hover}`}
                          >
                            {spec.value} {spec.label}
                          </div>
                        ))}
                      </div>

                      {/* Product description */}
                      <p className="text-sm text-muted leading-relaxed mb-6">
                        {product.description}
                      </p>
                    </div>

                    {/* Know More link */}
                    <Link
                      href={product.href}
                      className={`inline-flex items-center gap-2 text-sm font-bold ${theme.text} hover:text-foreground transition-colors group-hover:gap-3 duration-300`}
                    >
                      Know More
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </Link>
                  </div>

                  {/* Image side */}
                  <div
                    className={`relative min-h-[260px] md:min-h-0 overflow-hidden ${
                      index % 2 === 1
                        ? 'md:col-start-1 md:row-start-1'
                        : ''
                    }`}
                  >
                    {/* Product-specific glow */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse at center, ${theme.glow} 0%, transparent 70%)`,
                      }}
                    />

                    <AppImage
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      className="object-contain object-center p-11 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Directional overlay — same alternating pattern */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          index % 2 === 1
                            ? 'linear-gradient(to right, transparent, rgba(15,21,32,0.7))'
                            : 'linear-gradient(to left, transparent, rgba(15,21,32,0.7))',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
