"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronLeft, ChevronRight, MessageCircle, Sparkles } from "lucide-react";
import { buildMenuItemMessage, menuCategories } from "../data/menu";
import { buildWhatsappLink, reservationDefaultMessage } from "../data/content";

export function MenuPage() {
  const [activeId, setActiveId] = useState<string>(menuCategories[0]?.id ?? "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const reserveLink = buildWhatsappLink(reservationDefaultMessage);

  return (
    <main className="menu-main">
      <section className="menu-hero" aria-labelledby="menu-title">
        <Link href="/" className="menu-back">
          <ChevronLeft size={18} strokeWidth={2} />
          Voltar para A Varanda
        </Link>
        <p className="menu-eyebrow">— Cozinha autoral de Tarcila —</p>
        <h1 id="menu-title">Cardápio</h1>
        <p className="menu-tagline">
          Da Bahia para a Bélgica, da Bélgica para a sua mesa. Cada prato carrega três
          décadas de tempero — e uma viagem inteira no caminho.
        </p>
      </section>

      <nav className="menu-tabs" aria-label="Categorias do cardápio">
        <div className="menu-tabs-inner">
          {menuCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className={`menu-tab${activeId === category.id ? " menu-tab--active" : ""}`}
            >
              {category.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="menu-sections">
        {menuCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="menu-category"
            ref={(el) => {
              sectionRefs.current[category.id] = el;
            }}
            aria-labelledby={`${category.id}-title`}
          >
            <header className="menu-category-header">
              <h2 id={`${category.id}-title`}>
                <span aria-hidden="true">—</span>
                {category.label}
                <span aria-hidden="true">—</span>
              </h2>
              {category.intro ? <p>{category.intro}</p> : null}
            </header>

            <div className="menu-grid">
              {category.items.map((item) => {
                const message = item.whatsappMessage ?? buildMenuItemMessage(item.title);
                return (
                  <article
                    className={`menu-card${item.highlight ? " menu-card--highlight" : ""}`}
                    key={item.id}
                  >
                    <div className="menu-card-image">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 720px) 92vw, (max-width: 1200px) 44vw, 360px"
                        quality={90}
                      />
                      {item.highlight ? (
                        <span className="menu-card-badge" aria-label="Destaque do chef">
                          <Sparkles size={12} strokeWidth={2.2} />
                          Destaque
                        </span>
                      ) : null}
                    </div>

                    <div className="menu-card-body">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>

                      <div className="menu-card-foot">
                        <span className="menu-card-price">{item.price}</span>
                        <a
                          className="menu-card-order"
                          href={buildWhatsappLink(message)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Quero esse
                          <MessageCircle size={14} strokeWidth={2} />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section className="menu-final-cta" aria-label="Reservar mesa">
        <div className="menu-final-cta-inner">
          <p className="menu-final-eyebrow">Reserve sua mesa</p>
          <h2>Pronto para viver o cardápio?</h2>
          <p>
            Reservas e pedidos diretamente pelo WhatsApp. Atendimento rápido — geralmente no
            mesmo dia.
          </p>
          <a
            className="reserve-button reserve-large"
            href={reserveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CalendarDays aria-hidden="true" size={22} />
            Fazer reserva
            <ChevronRight aria-hidden="true" size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
