import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Menu } from "lucide-react";
import { buildWhatsappLink, navItems, reservationDefaultMessage } from "../data/content";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="mobile-menu" type="button" aria-label="Abrir menu">
          <Menu aria-hidden="true" size={30} strokeWidth={1.7} />
        </button>

        <Link className="brand" href="/" aria-label="A Varanda — voltar ao início">
          <Image
            src="/images/logo.png"
            alt="A Varanda"
            width={270}
            height={112}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="reserve-button header-reserve"
          href={buildWhatsappLink(reservationDefaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CalendarDays aria-hidden="true" size={23} strokeWidth={1.8} />
          <span>Reservar</span>
        </a>
      </div>
    </header>
  );
}
