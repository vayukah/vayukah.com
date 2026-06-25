'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  web3FormsKey: string;
  fileUrl: string;
  fileName: string;
  submitLabel: string;
  successMessage: string;
  subject: string;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  org: string;
  comment: string;
}

interface FormErrors {
  name: string;
  phone: string;
  email: string;
}

const initialForm: FormState = { name: '', phone: '', email: '', org: '', comment: '' };
const initialErrors: FormErrors = { name: '', phone: '', email: '' };

export default function DownloadModal({
  isOpen,
  onClose,
  title,
  subtitle,
  web3FormsKey,
  fileUrl,
  fileName,
  submitLabel,
  successMessage,
  subject,
}: DownloadModalProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [submitError, setSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const reset = useCallback(() => {
    setForm(initialForm);
    setErrors(initialErrors);
    setSubmitError(false);
    setLoading(false);
    setSuccess(false);
  }, []);

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(reset, 300);
  }, [onClose, reset]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleClose]);

  const validate = (): boolean => {
    const errs: FormErrors = { name: '', phone: '', email: '' };
    let valid = true;
    if (!form.name.trim()) { errs.name = 'Name is required.'; valid = false; }
    if (!form.phone.trim()) { errs.phone = 'Phone number is required.'; valid = false; }
    if (!form.email.trim()) {
      errs.email = 'Email is required.'; valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address.'; valid = false;
    }
    setErrors(errs);
    return valid;
  };

  const triggerDownload = async () => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error('Fetch failed');
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error('Download error:', err);
    }
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    setSubmitError(false);

    const payload = {
      access_key: web3FormsKey,
      subject,
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      organisation: form.org.trim() || 'N/A',
      comment: form.comment.trim() || 'N/A',
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        await triggerDownload();
        setSuccess(true);
      } else {
        throw new Error('Web3Forms error');
      }
    } catch (err) {
      setSubmitError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        className="w-full max-w-[460px] max-h-[90vh] overflow-y-auto rounded-2xl p-6 shadow-2xl"
        style={{
          background: 'var(--color-surface, #1e293b)',
          border: '1px solid rgba(255,255,255,0.08)',
          scrollbarWidth: 'none',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="text-base font-semibold text-foreground mb-0.5">{title}</p>
            <p className="text-xs text-muted">{subtitle}</p>
          </div>
          <button
            onClick={handleClose}
            className="flex-shrink-0 p-1 text-muted hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {!success ? (
          <div className="flex flex-col gap-3">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="John Smith"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full text-sm px-3 py-2 rounded-lg outline-none transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${errors.name ? '#e24b4a' : 'rgba(255,255,255,0.1)'}`,
                  color: 'var(--color-foreground, #f1f5f9)',
                }}
                onFocus={(e) => { if (!errors.name) e.currentTarget.style.borderColor = 'rgba(235,138,12,0.5)'; }}
                onBlur={(e) => { if (!errors.name) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
              {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted">
                Phone number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className="w-full text-sm px-3 py-2 rounded-lg outline-none transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${errors.phone ? '#e24b4a' : 'rgba(255,255,255,0.1)'}`,
                  color: 'var(--color-foreground, #f1f5f9)',
                }}
                onFocus={(e) => { if (!errors.phone) e.currentTarget.style.borderColor = 'rgba(235,138,12,0.5)'; }}
                onBlur={(e) => { if (!errors.phone) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
              {errors.phone && <span className="text-xs text-red-400">{errors.phone}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full text-sm px-3 py-2 rounded-lg outline-none transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${errors.email ? '#e24b4a' : 'rgba(255,255,255,0.1)'}`,
                  color: 'var(--color-foreground, #f1f5f9)',
                }}
                onFocus={(e) => { if (!errors.email) e.currentTarget.style.borderColor = 'rgba(235,138,12,0.5)'; }}
                onBlur={(e) => { if (!errors.email) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
              {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
            </div>

            {/* Organisation */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted">
                Organisation <span className="text-xs font-normal" style={{ color: 'rgba(148,163,184,0.7)' }}>(optional)</span>
              </label>
              <input
                type="text"
                placeholder="Acme Corp"
                value={form.org}
                onChange={(e) => setForm((f) => ({ ...f, org: e.target.value }))}
                className="w-full text-sm px-3 py-2 rounded-lg outline-none transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--color-foreground, #f1f5f9)',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(235,138,12,0.5)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
            </div>

            {/* Comment */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted">
                Comment <span className="text-xs font-normal" style={{ color: 'rgba(148,163,184,0.7)' }}>(optional)</span>
              </label>
              <textarea
                placeholder="Anything you'd like to tell us"
                rows={3}
                value={form.comment}
                onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
                className="w-full text-sm px-3 py-2 rounded-lg outline-none transition-colors resize-y"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--color-foreground, #f1f5f9)',
                  minHeight: '72px',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(235,138,12,0.5)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
            </div>

            {submitError && (
              <p className="text-xs text-red-400 text-center">Something went wrong. Please try again.</p>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full mt-1 py-2.5 text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-opacity"
              style={{
                background: '#EB8A0C',
                color: '#ffffff',
                opacity: loading ? 0.65 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                <path d="M8 2v8m0 0L5 7m3 3l3-3M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {loading ? 'Submitting…' : submitLabel}
            </button>

            <p className="text-xs text-center" style={{ color: '#94a3b8' }}>
              Your download will start automatically after submission.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19" stroke="#22c55e" strokeWidth="1.5" />
              <path d="M12 20l6 6 10-12" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-base font-semibold text-foreground">Thank you!</p>
            <p className="text-sm text-muted">{successMessage}</p>
            <button
              onClick={handleClose}
              className="mt-2 px-5 py-2 text-sm font-medium rounded-xl transition-colors"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'transparent',
                color: 'var(--color-foreground, #f1f5f9)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
