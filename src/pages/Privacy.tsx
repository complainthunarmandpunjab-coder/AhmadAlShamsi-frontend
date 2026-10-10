export default function Privacy() {
  return (
    <div className="min-h-screen bg-ivory py-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto bg-paper p-10 lg:p-16 border border-stone/40 rounded-sm">
        <div className="w-12 h-[2px] bg-gold mb-8"></div>
        <h1 className="text-display text-ink mb-10">Privacy Policy</h1>
        
        <div className="space-y-8 text-ink-soft leading-relaxed text-sm">
          <section>
            <h2 className="text-xl font-heading text-ink mb-4">Information We Collect</h2>
            <p>At Ahmad Al Shamsi Real Estate, we respect your privacy. We may collect personal information such as your name, email address, phone number, and property preferences when you fill out contact forms or engage our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading text-ink mb-4">How We Use Your Information</h2>
            <p>Your information is used strictly to provide you with tailored real estate services. This includes responding to your inquiries, sending you relevant property listings, and improving our customer service experience. We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading text-ink mb-4">Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading text-ink mb-4">Cookies</h2>
            <p>Our website uses cookies to enhance user experience, analyze site traffic, and serve targeted advertisements. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading text-ink mb-4">Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
