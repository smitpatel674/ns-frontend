import Link from "next/link";

const services = [
  { number: "01", title: "Web Development", desc: "Modern, responsive websites and web applications built with cutting-edge frameworks for optimal performance." },
  { number: "02", title: "Digital Marketing", desc: "Data-driven digital marketing strategies to boost brand visibility, traffic, and conversions." },
  { number: "03", title: "SEO Optimization", desc: "Expert SEO techniques to improve search rankings and drive organic growth for your business." },
  { number: "04", title: "Mobile Development", desc: "Cross-platform mobile applications with seamless user experience and native performance." },
  { number: "05", title: "UI/UX Design", desc: "Beautiful, intuitive interface designs that capture your brand identity and convert users effectively." },
  { number: "06", title: "Analytics & Insights", desc: "Comprehensive analytics and data-driven insights to measure performance and optimize business outcomes." },
  { number: "07", title: "AI/ML Development", desc: "Intelligent AI and machine learning solutions that automate processes and drive smarter business decisions." },
  { number: "08", title: "E-Commerce", desc: "Scalable online stores with secure payment gateways and comprehensive product management systems." },
  { number: "09", title: "WordPress", desc: "Custom WordPress themes, plugins, and highly manageable content systems tailored to your business needs." },
];

export function ServicesSection() {
  return (
    <section className="container-wide py-32 relative z-10 gsap-fade-up">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-4">Our Expertise</p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]" style={{ fontFamily: "Author, sans-serif" }}>
            Our Services
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-lg leading-relaxed opacity-70 mb-4">
            We deliver comprehensive digital solutions to help businesses grow and succeed in the digital landscape.
          </p>
          <Link href="/services" className="inline-flex items-center text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity border-b border-current/20 pb-1">
            Explore All Services
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {services.map((service) => (
          <Link
            key={service.number}
            href="/services"
            className="group block py-6 border-t border-current/10"
          >
            <span className="text-xs opacity-40 font-mono">{service.number}</span>
            <h3 className="text-xl font-medium mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
              {service.title}
            </h3>
            <p className="text-sm opacity-50 leading-relaxed">{service.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
