import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Row 1 - Links */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 justify-center mb-8">
          <div className="flex items-center gap-1 text-xs font-semibold text-muted uppercase tracking-widest">
            Products:
          </div>
          <Link href="/drone" className="text-sm font-medium text-muted hover:text-accent-orange transition-colors">Vigor S50</Link>
          <Link href="/dddrone" className="text-sm font-medium text-muted hover:text-[#0C7FEB] transition-colors duration-300">Delivery Drone</Link>
          <Link href="/vtoldrone" className="text-sm font-medium text-muted hover:text-accent-green transition-colors">Viper VTOL</Link>
          <span className="text-white/10">|</span>
          <div className="flex items-center gap-1 text-xs font-semibold text-muted uppercase tracking-widest">
            Solutions:
          </div>
          <Link href="/dronesharpcloud" className="text-sm font-medium text-muted hover:text-[#0C7FEB] transition-colors duration-300">Dronesharp.io</Link>
          <Link href="/dronesharpgcs" className="text-sm font-medium text-muted hover:text-accent-orange transition-colors">Dronesharp-GCS</Link>
          <Link href="/drones4relief" className="text-sm font-medium text-muted hover:text-accent-green transition-colors">Drones4Relief</Link>
          <span className="text-white/10">|</span>
          <Link href="/downloads" className="text-sm font-medium text-muted hover:text-[#0C7FEB] transition-colors duration-300">Downloads</Link>
          <Link href="/career" className="text-sm font-medium text-muted hover:text-[#0C7FEB] transition-colors duration-300">Careers</Link>
          <Link href="/about" className="text-sm font-medium text-muted hover:text-accent-orange transition-colors">About Us</Link>
          <Link href="/contact" className="text-sm font-medium text-muted hover:text-accent-green transition-colors">Contact Us</Link>
        </div>

        {/* Row 2 - Social + Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.04]">
          <p className="text-xs text-muted text-center sm:text-left">
            © 2026 Vayukah Drone Systems And Services Pvt Ltd
          </p>
          <div className="flex flex-col items-center sm:items-end gap-3">
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/company/vayukah-drones/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vayukahdrones?cplk=MXEyN3Y1YWtzZ3Iwaw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-[#E1306C] transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@vayukahdrones8395"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-[#FF0000] transition-colors"
                aria-label="YouTube"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-xs text-muted hover:text-accent-orange transition-colors">Privacy Policy</Link>
              <span className="text-white/10">|</span>
              <Link href="/terms" className="text-xs text-muted hover:text-accent-green transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}