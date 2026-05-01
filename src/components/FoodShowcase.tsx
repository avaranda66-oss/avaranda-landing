import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { foodItems } from "../data/content";
import { SectionTitle } from "./SectionTitle";

export function FoodShowcase() {
  return (
    <section className="food-section" id="cardapio" aria-labelledby="sabores-title">
      <SectionTitle id="sabores-title" title="Sabores da Varanda" />

      <div className="food-grid" aria-label="Sabores em destaque">
        {foodItems.map((item) => (
          <Link
            href={`/cardapio#${item.categoryId}`}
            className="food-card"
            key={item.title}
          >
            <div className="food-card-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="food-card-link">
                Ver opções
                <ChevronRight aria-hidden="true" size={16} />
              </span>
            </div>
            <div className="food-card-image">
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 78vw, 22vw" />
            </div>
          </Link>
        ))}
      </div>

      <Link className="menu-link" href="/cardapio">
        Ver cardápio completo
        <ChevronRight aria-hidden="true" size={16} />
      </Link>
    </section>
  );
}
