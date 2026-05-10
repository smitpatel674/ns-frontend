import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { motionDelay } from "@/lib/motion";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-40 pb-32">
        <div className="container-wide max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8" style={{ fontFamily: "Author, sans-serif" }} data-animate="fade-up">
            Terms & Conditions
          </h1>
          <p className="text-sm opacity-50 mb-12 font-mono uppercase tracking-widest" data-animate="fade-up" style={motionDelay(1, 80)}>
            Last Updated: May 2024
          </p>

          <div className="space-y-12 text-base md:text-lg opacity-80 leading-relaxed" data-animate="fade-up" style={motionDelay(2, 80)}>
            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">1. Agreement to Terms</h2>
              <p>
                By accessing our website and using our services, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on Nextron Solution's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 opacity-90">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose or for any public display;</li>
                <li>Attempt to reverse engineer any software contained on Nextron Solution's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">3. Disclaimer</h2>
              <p>
                All the materials on Nextron Solution's website are provided "as is". Nextron Solution makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Nextron Solution does not make any representations concerning the accuracy or reliability of the use of the materials on its website or otherwise relating to such materials or any sites linked to this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">4. Limitations</h2>
              <p>
                Nextron Solution or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Nextron Solution's website, even if Nextron Solution or an authorize representative of this website has been notified, orally or written, of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">5. Revisions and Errata</h2>
              <p>
                The materials appearing on Nextron Solution's website may include technical, typographical, or photographic errors. Nextron Solution will not promise that any of the materials in this website are accurate, complete, or current. Nextron Solution may change the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">6. Links</h2>
              <p>
                Nextron Solution has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Nextron Solution of the site. The use of any linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4 text-black">7. Site Terms of Use Modifications</h2>
              <p>
                Nextron Solution may revise these Terms of Use for its website at any time without prior notice. By using this website, you are agreeing to be bound by the current version of these Terms and Conditions.
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
