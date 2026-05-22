import Image from "next/image";

const LOGO_ROW = [
  { name: "Pokar Greens", src: "/images/pokar.png" },
  { name: "Wealth Genius Institute", src: "/images/wealth.png" },
  { name: "Metal Made Global", src: "/images/metal%20made%20global.jpeg" },
  { name: "N.B.FABTECH", src: "/images/nbfabtech.png" },
];

const ROW2 = [
  "Aspen Retail Co.", "Krona Health", "Habit School", "Foundry 9",
  "Tula Logistics", "Marigold Capital", "Sequence Labs", "Open Atlas",
];

export function ClientMarquee() {
  return (
    <section className="client-marquee" id="clients">
      <div className="cm-label">/ CLIENTS &amp; PARTNERS</div>
      <div className="cm-row a">
        {[...LOGO_ROW, ...LOGO_ROW].map((client, i) => (
          <span className="client-badge logo-badge" key={i}>
            <Image
              src={client.src}
              alt={client.name}
              width={180}
              height={48}
              priority={false}
            />
          </span>
        ))}
      </div>
      <div className="cm-row b">
        {[...ROW2, ...ROW2].map((c, i) => (
          <span className="client-badge" key={i}>{c}</span>
        ))}
      </div>
    </section>
  );
}
