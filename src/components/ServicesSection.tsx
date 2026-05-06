import Link from "next/link";

const services = [
  { number: "01", title: "Frontend Project", desc: "Responsive React/Vue based web application with modern UI." },
  { number: "02", title: "Full Stack App", desc: "Complete MERN/Python Application with Database Integration." },
  { number: "03", title: "AI/ML Model", desc: "Python-based Machine Learning model with Streamlit interface." },
  { number: "04", title: "Custom Web App", desc: "Scalable, production-ready web application for business operations." },
  { number: "05", title: "E-Commerce Store", desc: "Full-featured online store with payment gateway and admin panel." },
  { number: "06", title: "Digital Marketing", desc: "Data-driven digital marketing services to boost brand visibility, traffic, and conversions." },
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
            We deploy cross-functional teams to solve complex architectural challenges and build scalable digital products.
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
