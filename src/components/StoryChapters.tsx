"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight, Play, X } from "lucide-react";
import { chapters } from "../data/content";
import { LoopVideo } from "./LoopVideo";
import { SectionTitle } from "./SectionTitle";

export function StoryChapters() {
  const [activeNumber, setActiveNumber] = useState<string | null>(null);
  const active = chapters.find((c) => c.number === activeNumber) ?? null;

  return (
    <section className="story-section" aria-labelledby="capitulos">
      <SectionTitle id="capitulos" title="Nossa história em 7 capítulos" />

      <div className="story-rail" aria-label="Capítulos da história">
        {chapters.map((chapter) => {
          const isActive = chapter.number === activeNumber;
          return (
            <button
              type="button"
              className={`story-card${isActive ? " story-card--active" : ""}`}
              key={chapter.number}
              onClick={() =>
                setActiveNumber((prev) => (prev === chapter.number ? null : chapter.number))
              }
              aria-expanded={isActive}
              aria-controls="chapter-detail-panel"
            >
              <div className="story-card-text">
                <span className="story-card-number">{chapter.number}</span>
                <h3>{chapter.shortTitle}</h3>
              </div>
              <div className="story-card-image">
                {chapter.video ? (
                  <LoopVideo webm={chapter.video} mp4={chapter.mp4} poster={chapter.image} />
                ) : (
                  <Image
                    src={chapter.image}
                    alt=""
                    fill
                    sizes="(max-width: 1200px) 40vw, 480px"
                    quality={92}
                  />
                )}
                <span className="play-badge" aria-hidden="true">
                  <Play size={16} fill="currentColor" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <p className="story-rail-hint">
        {active
          ? "Clique no card novamente para fechar — ou escolha outro capítulo."
          : "Clique em qualquer capítulo para conhecer a história completa."}
      </p>

      <div
        id="chapter-detail-panel"
        className={`chapter-panel${active ? " chapter-panel--open" : ""}`}
        aria-hidden={!active}
      >
        {active ? (
          <article className="chapter-panel-inner" key={active.number}>
            <div className="chapter-panel-media">
              {active.video ? (
                <LoopVideo
                  webm={active.video}
                  mp4={active.mp4}
                  poster={active.image}
                />
              ) : (
                <Image
                  src={active.image}
                  alt=""
                  fill
                  sizes="(max-width: 1200px) 90vw, 600px"
                  quality={92}
                />
              )}
            </div>
            <div className="chapter-panel-copy">
              <span className="chapter-panel-eyebrow">Capítulo {active.number}</span>
              <h3 className="chapter-panel-title">{active.title}</h3>
              <p className="chapter-panel-text">{active.summary}</p>
              <a className="chapter-panel-cta" href="#reservar">
                Viva esse capítulo na sua mesa
                <ChevronRight aria-hidden="true" size={18} />
              </a>
            </div>
            <button
              type="button"
              className="chapter-panel-close"
              onClick={() => setActiveNumber(null)}
              aria-label="Fechar capítulo"
            >
              <X size={20} strokeWidth={1.8} />
            </button>
          </article>
        ) : null}
      </div>

      <div className="story-accordions">
        {chapters.map((chapter, index) => (
          <details className="chapter-detail" key={chapter.number} open={index === 0}>
            <summary>
              <span className="chapter-number">{chapter.number}</span>
              <span className="chapter-title">{chapter.title}</span>
              <span className="chapter-hint">toque para abrir</span>
              <ChevronDown aria-hidden="true" size={22} />
            </summary>
            <div className="chapter-body">
              <div className="chapter-media">
                {chapter.video ? (
                  <LoopVideo webm={chapter.video} mp4={chapter.mp4} poster={chapter.image} />
                ) : (
                  <Image
                    src={chapter.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 92vw, 420px"
                    quality={92}
                  />
                )}
                <span className="loop-chip">
                  <Play size={16} fill="currentColor" />
                  vídeo em loop
                </span>
              </div>
              <div className="chapter-copy">
                <p>{chapter.summary}</p>
                <a href="#reservar">
                  Viva esse capítulo na sua mesa
                  <ChevronRight aria-hidden="true" size={18} />
                </a>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
