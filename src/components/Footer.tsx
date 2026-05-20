import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top reveal">
          <div className="f-brand">
            <Link href="/#top" className="brand" data-cursor="">
              <Image
                src="/images/logo.png"
                alt="Nextron Solution"
                width={140}
                height={140}
                className="footer-logo"
              />
            </Link>
            <p className="b-tag">Next Digital Success — Building The Future Together.</p>
            <div className="f-socials">
              <a
                href="https://www.linkedin.com/company/nextronsolution/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor=""
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V8h3v11zM6.5 6.7C5.5 6.7 4.8 6 4.8 5s.7-1.7 1.7-1.7S8.2 4 8.2 5s-.7 1.7-1.7 1.7zM20 19h-3v-5.6c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V19h-3V8h3v1.3c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1V19z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nextronsolution"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor=""
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="f-col">
            <h6>Follow Us</h6>
            <ul>
              <li>
                <a href="https://www.linkedin.com/company/nextronsolution/" target="_blank" rel="noopener noreferrer" data-cursor="">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nextronsolution" target="_blank" rel="noopener noreferrer" data-cursor="">
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="f-col">
            <h6>Contact</h6>
            <ul>
              <li><a href="mailto:nextronsolution@gmail.com" data-cursor="">nextronsolution@gmail.com</a></li>
              <li><a href="tel:+919586141881" data-cursor="">+91 9586 141 881</a></li>
              <li><a href="#contact" data-cursor="">Kadi, Gujarat — IN</a></li>
            </ul>
          </div>

          <div className="f-col">
            <h6>Quick Links</h6>
            <ul>
              <li><a href="#about" data-cursor="">About</a></li>
              <li><a href="#services" data-cursor="">Services</a></li>
              <li><a href="#works" data-cursor="">Projects</a></li>
              <li><a href="#careers" data-cursor="">Careers</a></li>
              <li><a href="#clients" data-cursor="">Clients</a></li>
            </ul>
          </div>

          <div className="f-col">
            <h6>Legal</h6>
            <ul>
              <li><Link href="/privacy" data-cursor="">Privacy</Link></li>
              <li><Link href="/terms" data-cursor="">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 NEXTRON SOLUTION. ALL RIGHTS RESERVED.</span>
          <span>KADI, GUJARAT, INDIA</span>
        </div>
      </div>
    </footer>
  );
}
