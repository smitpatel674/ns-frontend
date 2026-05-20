const ROW1 = [
  "Pokar Greens", "Wealth Genius Institute", "Metal Made Global", "NBFAB Tech Solutions",
  "Saffron Ventures", "Vihana Studio", "Banyan Tech", "Northpoint Labs",
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
        {[...ROW1, ...ROW1].map((c, i) => (
          <span className="client-badge" key={i}>{c}</span>
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
