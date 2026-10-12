import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Vayukah Drone Systems',
  description: 'Terms of Service for Vayukah Drone Systems And Services Pvt Ltd.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg text-foreground font-body relative">
      <div className="scan-line" />
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0656D6]/30 bg-[#0656D6]/10 text-[#4B9EFF] text-xs font-semibold uppercase tracking-widest mb-4">
            Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted text-sm">Last updated: March 31, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-muted leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 border-l-2 border-[#0656D6] pl-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website, products, or services of Vayukah Drone Systems And Services Pvt Ltd ("Vayukah", "we", "our", or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
            <p className="mt-3">
              We reserve the right to update these Terms at any time. Continued use of our services after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 border-l-2 border-[#0656D6] pl-4">2. Use of Services</h2>
            <p className="mb-3">You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Use our services in any way that violates applicable local, national, or international laws or regulations</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
              <li>Attempt to gain unauthorized access to any part of our systems or services</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
              <li>Use our services to infringe upon the intellectual property rights of others</li>
              <li>Reverse engineer, decompile, or disassemble any of our software or hardware products</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 border-l-2 border-[#0656D6] pl-4">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, images, software, and other materials — is the property of Vayukah or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
            </p>
            <p className="mt-3">
              The Vayukah name, logo, and all related product names and marks are trademarks of Vayukah Drone Systems And Services Pvt Ltd. Unauthorized use is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 border-l-2 border-[#0656D6] pl-4">4. Products and Services</h2>
            <p className="mb-3">
              Vayukah offers drone hardware, software platforms, and related services. The following terms apply to all product and service engagements:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>All product specifications and pricing are subject to change without notice</li>
              <li>Orders are subject to acceptance and availability</li>
              <li>Delivery timelines are estimates and may vary based on logistics and regulatory requirements</li>
              <li>Software licenses are granted on a non-exclusive, non-transferable basis unless otherwise agreed in writing</li>
              <li>Support and maintenance terms are governed by separate service agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 border-l-2 border-[#0656D6] pl-4">5. Regulatory Compliance</h2>
            <p>
              The use of drones and unmanned aerial vehicles (UAVs) is subject to regulations by civil aviation authorities and other government bodies. It is your sole responsibility to ensure compliance with all applicable laws, regulations, and airspace rules in your jurisdiction before operating any Vayukah drone product. Vayukah shall not be liable for any violations arising from non-compliant use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 border-l-2 border-[#0656D6] pl-4">6. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our services will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 border-l-2 border-[#0656D6] pl-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Vayukah shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, goodwill, or other intangible losses — arising out of or in connection with your use of our services, even if we have been advised of the possibility of such damages.
            </p>
            <p className="mt-3">
              Our total liability to you for any claims arising under these Terms shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 border-l-2 border-[#0656D6] pl-4">8. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Vayukah and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your access to or use of our services, your violation of these Terms, or your infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 border-l-2 border-[#0656D6] pl-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 border-l-2 border-[#0656D6] pl-4">10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or for any other reason. Upon termination, all provisions of these Terms that by their nature should survive will continue to apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 border-l-2 border-[#0656D6] pl-4">11. Contact Us</h2>
            <p className="mb-3">If you have any questions about these Terms of Service, please contact us:</p>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 space-y-2">
              <p className="text-foreground font-semibold">Vayukah Drone Systems And Services Pvt Ltd</p>
              <p>Email: <a href="mailto:info@vayukah.com" className="text-[#4B9EFF] hover:underline">info@vayukah.com</a></p>
              <p>Website: <a href="https://vayukah.com" className="text-[#4B9EFF] hover:underline">vayukah.com</a></p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
