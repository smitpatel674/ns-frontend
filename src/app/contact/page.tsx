"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motionDelay } from "@/lib/motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 container-wide">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-8" style={{ fontFamily: "Author, sans-serif" }} data-animate="fade-up">
            Let's Start a <br /> Project Together
          </h1>
          <p className="text-lg opacity-70 mb-16 max-w-2xl" data-animate="fade-up" style={motionDelay(1, 90)}>
            Fill out the form below to get in touch. We will get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8" data-animate="fade-up" style={motionDelay(2, 90)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 gsap-reveal" style={motionDelay(0, 50)}>
                <label htmlFor="name" className="text-xs uppercase tracking-widest opacity-60">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-current/20 py-4 focus:outline-none focus:border-current transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2 gsap-reveal" style={motionDelay(1, 50)}>
                <label htmlFor="email" className="text-xs uppercase tracking-widest opacity-60">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-current/20 py-4 focus:outline-none focus:border-current transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2 gsap-reveal" style={motionDelay(2, 50)}>
                <label htmlFor="phone" className="text-xs uppercase tracking-widest opacity-60">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-current/20 py-4 focus:outline-none focus:border-current transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2 gsap-reveal" style={motionDelay(3, 50)}>
                <label htmlFor="service" className="text-xs uppercase tracking-widest opacity-60">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-current/20 py-4 focus:outline-none focus:border-current transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-black">Select a service</option>
                  <option value="Web Development" className="text-black">Web Development</option>
                  <option value="Digital Marketing" className="text-black">Digital Marketing</option>
                  <option value="SEO Optimization" className="text-black">SEO Optimization</option>
                  <option value="UI/UX Design" className="text-black">UI/UX Design</option>
                  <option value="Mobile App Development" className="text-black">Mobile App Development</option>
                  <option value="Other" className="text-black">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 gsap-reveal" style={motionDelay(4, 50)}>
              <label htmlFor="message" className="text-xs uppercase tracking-widest opacity-60">Project Details *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-current/20 py-4 focus:outline-none focus:border-current transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {status === "success" && (
              <div className="p-4 bg-green-500/10 text-green-600 border border-green-500/20 rounded">
                Thank you! Your message has been sent successfully. We will contact you soon.
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-red-500/10 text-red-600 border border-red-500/20 rounded">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              style={motionDelay(5, 50)}
              className="bg-black text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              {status !== "loading" && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              )}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
