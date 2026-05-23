"use client";
import { useState } from "react";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading || success) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1400);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="wrap">
        <div className="section-head-row reveal x-in">
          <div>
            <span className="label">/ 11 - GET IN TOUCH</span>
            <h2 className="section-title">Start a <em>conversation.</em></h2>
          </div>
          <p className="kicker" style={{ maxWidth: "340px" }}>
            Tell us about your project - we respond within 24 hours.
          </p>
        </div>
        <div className="contact-grid">
          <aside className="contact-info reveal">
            <div className="ci-row">
              <div className="ci-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <div className="ci-text">
                <span className="l">Email</span>
                <span className="v">nextronsolution@gmail.com</span>
              </div>
            </div>
            <div className="ci-row">
              <div className="ci-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </div>
              <div className="ci-text">
                <span className="l">Phone</span>
                <span className="v">+91 9586 141 881</span>
              </div>
            </div>
            <div className="ci-row">
              <div className="ci-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s7-7 7-13a7 7 0 0 0-14 0c0 6 7 13 7 13z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div className="ci-text">
                <span className="l">Studio</span>
                <span className="v">Kadi, Gujarat - India</span>
              </div>
            </div>
            <div className="ci-row">
              <div className="ci-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <div className="ci-text">
                <span className="l">Hours</span>
                <span className="v">Mon - Sat · 10 - 7 IST</span>
              </div>
            </div>
            <div className="socials" aria-label="Social links">
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
          </aside>

          <form
            className="contact-form reveal delay-1"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="fld">
              <label htmlFor="cf-name">Full Name</label>
              <input id="cf-name" type="text" placeholder="Your name" required data-cursor="" />
            </div>
            <div className="fld">
              <label htmlFor="cf-company">Company</label>
              <input id="cf-company" type="text" placeholder="Company name" data-cursor="" />
            </div>
            <div className="fld">
              <label htmlFor="cf-email">Email Address</label>
              <input id="cf-email" type="email" placeholder="you@company.com" required data-cursor="" />
            </div>
            <div className="fld">
              <label htmlFor="cf-phone">Phone Number</label>
              <input id="cf-phone" type="tel" placeholder="+91" data-cursor="" />
            </div>
            <div className="fld">
              <label htmlFor="cf-service">Service Needed</label>
              <select id="cf-service" data-cursor="">
                <option>Web Development</option>
                <option>Digital Marketing</option>
                <option>SEO Optimization</option>
                <option>Mobile Development</option>
                <option>UI / UX Design</option>
                <option>Analytics &amp; Insights</option>
                <option>AI / ML Development</option>
                <option>E-Commerce</option>
                <option>WordPress</option>
              </select>
            </div>
            <div className="fld">
              <label htmlFor="cf-budget">Project Budget</label>
              <select id="cf-budget" data-cursor="">
                <option>&lt; ₹1 Lakh</option>
                <option>₹1 - 3 Lakh</option>
                <option>₹3 - 10 Lakh</option>
                <option>₹10 Lakh +</option>
              </select>
            </div>
            <div className="fld full">
              <label htmlFor="cf-brief">Project Brief</label>
              <textarea
                id="cf-brief"
                rows={4}
                placeholder="Tell us about your project, goals and timeline."
                data-cursor=""
              />
            </div>
            <button
              type="submit"
              className={`submit${loading ? " is-loading" : ""}${success ? " is-success" : ""}`}
              data-cursor=""
            >
              <span className="sub-text">
                {success
                  ? "✓ Message Sent · We'll be in touch"
                  : (<>Send Message <span className="arr">→</span></>)}
              </span>
              <span className="sub-spin"><span className="sp" /></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
