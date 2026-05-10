import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { motionDelay } from "@/lib/motion";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-32">
        <div className="container-wide max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8" style={{ fontFamily: "Author, sans-serif" }} data-animate="fade-up">
            Privacy Policy
          </h1>
          <p className="text-sm opacity-50 mb-12 font-mono uppercase tracking-widest" data-animate="fade-up" style={motionDelay(1, 80)}>
            Last Updated: May 2024
          </p>

          <div className="space-y-12 text-base md:text-lg opacity-80 leading-relaxed" data-animate="fade-up" style={motionDelay(2, 80)}>
            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">1. Introduction</h2>
              <p>
                Welcome to Nextron Solution. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">2. The Data We Collect</h2>
              <p className="mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 opacity-90">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">3. How We Use Your Data</h2>
              <p className="mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 opacity-90">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">5. Your Legal Rights</h2>
              <p className="mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 opacity-90">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">6. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at our provided email address or through our contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
