import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LoopVideo } from "./LoopVideo";

export function Hero() {
  return (
    <section className="hero-section" id="historia" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-portrait">
          <LoopVideo
            webm="/animations/tarcila_animacao.webm"
            mp4="/animations/tarcila_animacao.mp4"
            poster="/images/story_images/tarcila.png"
            className="hero-tarcila-video"
          />
        </div>

        <div className="hero-copy">
          <p className="eyebrow ornate-line">Bem-vindo à nossa casa</p>
          <h1 id="hero-title">
            A história
            <span> de Tarcila</span>
          </h1>
          <p className="hero-lede">
            Da Bahia para a Bélgica, da Bélgica para a sua mesa. Três décadas de tempero
            que atravessou continentes — e voltou para casa.
          </p>
          <p className="script-note">Seja bem-vindo à nossa varanda.</p>
          <a className="story-link" href="#capitulos">
            Conheça essa história
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
          </a>
        </div>

        <div className="hero-house">
          <Image
            src="/images/story_images/story_07.png"
            alt="Ilustracao da fachada de A Varanda"
            fill
            sizes="(max-width: 900px) 100vw, 47vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
