import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-32 border-t border-current/10 transition-colors duration-500">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-8">
              <img src="/images/logo.png" alt="Nextron Solution" className="h-[36px] w-auto" />
            </Link>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight mb-8 max-w-md uppercase" style={{ fontFamily: "Author, sans-serif" }}>
              Next Digital Success —<br />Building The Future Together.
            </h3>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] opacity-40 mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              <a href="https://www.linkedin.com/company/nextronsolution/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                Linkedin
              </a>
              <a href="https://www.instagram.com/nextronsolution" target="_blank" rel="noopener noreferrer" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                Instagram
              </a>
            </div>

            <h4 className="text-xs uppercase tracking-[0.2em] opacity-40 mb-6">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:nextronsolution@gmail.com" className="block text-sm opacity-60 hover:opacity-100 transition-opacity uppercase">
                nextronsolution@gmail.com
              </a>
              <a href="tel:+919586141881" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">
                +91 9586 141 881
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] opacity-40 mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">About</Link>
              <Link href="/services" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Services</Link>
              <Link href="/projects" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Projects</Link>
              <Link href="/careers" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Careers</Link>
              <Link href="/client" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Clients</Link>
            </div>

            <h4 className="text-xs uppercase tracking-[0.2em] opacity-40 mb-6 mt-8">Legal</h4>
            <div className="space-y-3">
              <Link href="/privacy" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Privacy</Link>
              <Link href="/terms" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Terms</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-current/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs uppercase opacity-40">&copy; 2026 NEXTRON SOLUTION. ALL RIGHTS RESERVED.</p>
          <p className="text-xs uppercase opacity-40">Kadi, Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}
