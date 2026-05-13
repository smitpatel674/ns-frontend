"use client";

import { useState } from "react";

export const CareersForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
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
      // In a real app, you would send this to an API
      // const res = await fetch("/api/careers", { ... });
      
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        portfolio: "",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
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
          <div className="space-y-2">
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
          <div className="space-y-2">
            <label htmlFor="phone" className="text-xs uppercase tracking-widest opacity-60">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-current/20 py-4 focus:outline-none focus:border-current transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="position" className="text-xs uppercase tracking-widest opacity-60">Position Applied For *</label>
            <select
              id="position"
              name="position"
              required
              value={formData.position}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-current/20 py-4 focus:outline-none focus:border-current transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-black">Select a position</option>
              <option value="Frontend Developer" className="text-black">Frontend Developer</option>
              <option value="Backend Developer" className="text-black">Backend Developer</option>
              <option value="Full Stack Developer" className="text-black">Full Stack Developer</option>
              <option value="UI/UX Designer" className="text-black">UI/UX Designer</option>
              <option value="Digital Marketer" className="text-black">Digital Marketer</option>
              <option value="SEO Specialist" className="text-black">SEO Specialist</option>
              <option value="Other" className="text-black">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="experience" className="text-xs uppercase tracking-widest opacity-60">Years of Experience</label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-current/20 py-4 focus:outline-none focus:border-current transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-black">Select experience</option>
              <option value="Fresher" className="text-black">Fresher (0-1 years)</option>
              <option value="Junior" className="text-black">Junior (1-3 years)</option>
              <option value="Intermediate" className="text-black">Intermediate (3-5 years)</option>
              <option value="Senior" className="text-black">Senior (5+ years)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="portfolio" className="text-xs uppercase tracking-widest opacity-60">Portfolio / LinkedIn URL</label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-current/20 py-4 focus:outline-none focus:border-current transition-colors"
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs uppercase tracking-widest opacity-60">Tell Us About Yourself</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-current/20 py-4 focus:outline-none focus:border-current transition-colors resize-none"
            placeholder="Share your goals and why you want to join us..."
          />
        </div>

        {status === "success" && (
          <div className="p-4 bg-green-500/10 text-green-600 border border-green-500/20 rounded">
            Application submitted successfully! We'll review it and get back to you.
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
          className="bg-black text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3"
        >
          {status === "loading" ? "Submitting..." : "Submit Application"}
          {status !== "loading" && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
          )}
        </button>
      </form>
    </div>
  );
};
