import { CalendarDays, ChevronRight } from "lucide-react";
import { buildWhatsappLink, reservationDefaultMessage } from "../data/content";

export function ReservationCTA() {
  const whatsappLink = buildWhatsappLink(reservationDefaultMessage);

  return (
    <section className="reservation-section" id="reservar" aria-labelledby="reserve-title">
      <div className="reservation-panel">
        <div>
          <p className="eyebrow">Reserve sua mesa</p>
          <h2 id="reserve-title">A próxima memória pode começar na sua mesa.</h2>
          <p>
            Reserve com antecedência e garanta sua noite na Varanda. Atendimento direto pelo
            WhatsApp — respostas no mesmo dia.
          </p>
        </div>
        <a
          className="reserve-button reserve-large"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CalendarDays aria-hidden="true" size={24} />
          Fazer reserva
          <ChevronRight aria-hidden="true" size={20} />
        </a>
      </div>

      <a
        className="mobile-sticky-cta"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fazer reserva
      </a>
    </section>
  );
}

