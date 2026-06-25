'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface VersionEntry {
  version: string;
  date: string;
  notes: string;
  downloadUrl?: string;
  fileName?: string;
  playStoreUrl?: string;
}

const latestWindows: VersionEntry = {
  version: 'v1.1.0',
  date: '02 April 2026',
  notes: 'Added new configuration parameters for improved flexibility and customization',
  downloadUrl: 'https://dronesharpgcs-downloads.s3.ap-south-1.amazonaws.com/releases/windows/v1.1.0/DronesharpGCS-installer.exe',
  fileName: 'DronesharpGCS-installer.exe',
};

const previousWindows: VersionEntry[] = [
  { version: 'v1.0.0', date: '10 Dec 2025',  notes: 'Added weather forecast, navigation lights controls, and telemetry improvements',       downloadUrl: 'https://dronesharpgcs-downloads.s3.ap-south-1.amazonaws.com/releases/windows/v1.0.0/DronesharpGCS-installer.exe', fileName: 'DronesharpGCS-v1.0.0-installer.exe' },
  /*{ version: 'v3.0.0', date: '10 Oct 2024', notes: 'Major release — multi drone support, audible prompts', downloadUrl: '/files/DroneSharpGCS_v3.0.0_Setup.exe', fileName: 'DronesharpGCS-v3.0.0-installer.exe' },
  { version: 'v2.8.4', date: '3 Jul 2024',  notes: 'Stability patches, telemetry improvements',           downloadUrl: '/files/DroneSharpGCS_v2.8.4_Setup.exe', fileName: 'DronesharpGCS-v2.8.4-installer.exe' },*/
];

const latestAndroid: VersionEntry = {
  version: 'v1.1.0',
  date: '02 April 2026',
  notes: 'Added new configuration parameters for improved flexibility and customization',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=org.mavlink.vayukah&pli=1',
};

const previousAndroid: VersionEntry[] = [
  { version: 'v1.0.0', date: '10 Dec 2025',  notes: 'Added weather forecast, navigation lights controls, and telemetry improvements',        playStoreUrl: 'https://play.google.com/store/apps/details?id=org.mavlink.vayukah&pli=1' },
  /*{ version: 'v3.0.1', date: '18 Oct 2024', notes: 'Hotfix — multi drone sync crash on Android 14', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aerogcs.aerogcsenterprise.hellodrone&pli=1' },
  { version: 'v2.9.0', date: '15 Jul 2024', notes: 'Telemetry redesign, audible alert improvements', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aerogcs.aerogcsenterprise.hellodrone&pli=1' },*/
];

function DownloadButton({ url, fileName }: { url: string; fileName: string }) {
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const handleDownload = async () => {
    setState('loading');
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
      setState('done');
      setTimeout(() => setState('idle'), 2000);
    } catch {
      setState('error');
      setTimeout(() => setState('idle'), 2500);
    }
  };

  const label = state === 'loading' ? 'Downloading…' : state === 'done' ? 'Done!' : state === 'error' ? 'Failed — retry' : 'Download .exe';

  return (
    <button
      onClick={handleDownload}
      disabled={state === 'loading'}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#EB8A0C] text-[#080B12] border border-[#EB8A0C] hover:bg-[#f59e2a] hover:border-[#f59e2a] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#EB8A0C]/20 hover:shadow-[#EB8A0C]/40"
    >
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v8m0 0L5 7m3 3l3-3M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {label}
    </button>
  );
}

function DownloadButtonSmall({ url, fileName }: { url: string; fileName: string }) {
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const handleDownload = async () => {
    setState('loading');
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
      setState('done');
      setTimeout(() => setState('idle'), 2000);
    } catch {
      setState('error');
      setTimeout(() => setState('idle'), 2500);
    }
  };

  const label = state === 'loading' ? 'Downloading…' : state === 'done' ? 'Done!' : state === 'error' ? 'Failed — retry' : 'Download .exe';

  return (
    <button
      onClick={handleDownload}
      disabled={state === 'loading'}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-transparent text-[#EB8A0C] border border-[#EB8A0C]/40 hover:bg-[#EB8A0C]/10 hover:border-[#EB8A0C]/70 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v8m0 0L5 7m3 3l3-3M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {label}
    </button>
  );
}

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-bg text-foreground font-body relative">
      <div className="scan-line" />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(6,86,214,0.08) 0%, rgba(6,86,214,0.02) 50%, transparent 70%)' }} />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-heading font-black uppercase whitespace-nowrap select-none"
              style={{ fontSize: 'clamp(3rem, 12vw, 16rem)', lineHeight: 1, letterSpacing: '-0.08em', opacity: 0.018 }}>
              DOWNLOADS
            </div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[2px] h-5 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-muted">Software</span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-foreground mb-3">
              DroneSharp <span className="text-primary">GCS</span>
            </h1>
            <p className="text-muted text-base sm:text-lg max-w-xl">
              Ground Control Software for Vigor UAV — available on Windows and Android.
            </p>
          </div>
        </section>

        {/* Downloads Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-start">

            {/* Windows Column */}
            <div className="rounded-2xl border border-white/[0.08] bg-surface p-6">
              <div className="flex items-center gap-2 mb-6">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary flex-shrink-0">
                  <rect x="1" y="1" width="6.5" height="6.5" rx="1" fill="currentColor"/>
                  <rect x="8.5" y="1" width="6.5" height="6.5" rx="1" fill="currentColor"/>
                  <rect x="1" y="8.5" width="6.5" height="6.5" rx="1" fill="currentColor"/>
                  <rect x="8.5" y="8.5" width="6.5" height="6.5" rx="1" fill="currentColor"/>
                </svg>
                <span className="text-sm font-bold text-foreground tracking-wide">Windows</span>
              </div>

              {/* Latest */}
              <div className="mb-6">
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-[#EB8A0C]/15 text-[#EB8A0C] border border-[#EB8A0C]/30">
                    Latest release
                  </span>
                </div>
                <div className="rounded-xl border border-[#EB8A0C]/25 bg-[#EB8A0C]/5 border-l-2 border-l-[#EB8A0C]" style={{ borderLeft: '3px solid #EB8A0C' }}>
                  <div className="p-4 pb-2">
                    <span className="text-base font-bold text-foreground">{latestWindows.version}</span>
                    <p className="text-xs text-muted mt-0.5">Released {latestWindows.date} · Stable</p>
                    <p className="text-xs text-muted mt-1.5">{latestWindows.notes}</p>
                  </div>
                  <div className="px-4 pb-4 pt-2">
                    <DownloadButton url={latestWindows.downloadUrl!} fileName={latestWindows.fileName!} />
                  </div>
                </div>
              </div>

              {/* Previous */}
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-muted mb-3">Previous versions</p>
                <div className="space-y-2">
                  {previousWindows.map((v) => (
                    <div key={v.version} className="rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                      <div className="p-3.5 pb-2">
                        <span className="text-sm font-bold text-foreground">{v.version}</span>
                        <p className="text-xs text-muted mt-0.5">{v.date}</p>
                        <p className="text-xs text-muted mt-1">{v.notes}</p>
                      </div>
                      <div className="px-3.5 pb-3.5 pt-1">
                        <DownloadButtonSmall url={v.downloadUrl!} fileName={v.fileName!} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Android Column */}
            <div className="rounded-2xl border border-white/[0.08] bg-surface p-6">
              <div className="flex items-center gap-2 mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#3EBA3A] flex-shrink-0">
                  <path d="M4 16.5C4 17.88 5.12 19 6.5 19h11c1.38 0 2.5-1.12 2.5-2.5V10H4v6.5zM14.5 5.27L15.77 4 15 3.23l-1.4 1.4A6 6 0 0012 4.5c-.57 0-1.12.1-1.6.13L9 3.23 8.23 4l1.27 1.27A5 5 0 004 10h16a5 5 0 00-5.5-4.73zM10 8.5a.5.5 0 110-1 .5.5 0 010 1zm4 0a.5.5 0 110-1 .5.5 0 010 1z" fill="currentColor"/>
                </svg>
                <span className="text-sm font-bold text-foreground tracking-wide">Android</span>
              </div>

              {/* Latest */}
              <div className="mb-6">
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-[#3EBA3A]/15 text-[#3EBA3A] border border-[#3EBA3A]/30">
                    Latest release
                  </span>
                </div>
                <div className="rounded-xl border border-[#3EBA3A]/25 bg-[#3EBA3A]/5" style={{ borderLeft: '3px solid #3EBA3A' }}>
                  <div className="p-4 pb-2">
                    <span className="text-base font-bold text-foreground">{latestAndroid.version}</span>
                    <p className="text-xs text-muted mt-0.5">Released {latestAndroid.date} · Stable</p>
                    <p className="text-xs text-muted mt-1.5">{latestAndroid.notes}</p>
                  </div>
                  <div className="px-4 pb-4 pt-2">
                    <a
                      href={latestAndroid.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#3EBA3A] text-[#080B12] border border-[#3EBA3A] hover:bg-[#5dd65a] hover:border-[#5dd65a] transition-all duration-200 shadow-lg shadow-[#3EBA3A]/20 hover:shadow-[#3EBA3A]/40"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                        <path d="M3 2.5L13 8 3 13.5V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      </svg>
                      Play Store
                    </a>
                  </div>
                </div>
              </div>

              {/* Previous */}
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-muted mb-3">Previous versions</p>
                <div className="space-y-2">
                  {previousAndroid.map((v) => (
                    <div key={v.version} className="rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                      <div className="p-3.5 pb-2">
                        <span className="text-sm font-bold text-foreground">{v.version}</span>
                        <p className="text-xs text-muted mt-0.5">{v.date}</p>
                        <p className="text-xs text-muted mt-1">{v.notes}</p>
                      </div>
                      {v.playStoreUrl && (
                        <div className="px-3.5 pb-3.5 pt-1">
                          <a
                            href={v.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-transparent text-[#3EBA3A] border border-[#3EBA3A]/40 hover:bg-[#3EBA3A]/10 hover:border-[#3EBA3A]/70 transition-all duration-200"
                          >
                            <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                              <path d="M3 2.5L13 8 3 13.5V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                            </svg>
                            Play Store
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
