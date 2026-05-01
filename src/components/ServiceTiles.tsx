import { CalendarDays, Clapperboard, CookingPot, Leaf, PartyPopper } from "lucide-react";
import { buildWhatsappLink, serviceItems } from "../data/content";

const icons = {
  calendar: CalendarDays,
  party: PartyPopper,
  cloche: CookingPot,
  leaf: Leaf,
  delivery: Clapperboard,
};

export function ServiceTiles() {
  return (
    <section className="services-section" id="experiencias" aria-label="Serviços da Varanda">
      <div className="service-question">Como podemos tornar seu momento especial?</div>
      <div className="service-grid">
        {serviceItems.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <article className="service-tile" key={item.title}>
              <Icon aria-hidden="true" size={54} strokeWidth={1.25} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={buildWhatsappLink(item.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba mais
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
