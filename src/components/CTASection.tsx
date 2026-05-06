import Link from "next/link";

export function CTASection() {
  return (
    <section className="container-wide py-32 border-t border-current/10 gsap-fade-up">
      <div className="flex flex-col gap-10">
        <p className="text-xs uppercase tracking-[0.2em] opacity-40">Get In Touch</p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.85] tracking-tighter" style={{ fontFamily: "Author, sans-serif" }}>
          Have A Project To<span className="block">Collaborate On?</span>
        </h2>
        <p className="text-sm uppercase tracking-widest opacity-40">Get A Quote</p>
        <p className="text-lg opacity-70 max-w-xl leading-relaxed">
          If you think we can do the job for you, do not hesitate. Drop us a message/call us for any web services in Calicut or anywhere in world.
        </p>
        <Link href="/contact" className="btn-pro self-start px-8 py-4 text-[10px]">
          Start Project ↗
        </Link>
      </div>
    </section>
  );
}
