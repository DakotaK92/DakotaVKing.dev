"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const photos = [
  {
    src: "/assets/DakotaKPic2.png",
    alt: "Portrait of Dakota King",
    caption: "Designer & Developer",
  },
  {
    src: "/assets/dk-mouse.jpg",
    alt: "Dakota with Mickey Mouse at Walt Disney World",
    caption: "A day at Walt Disney World",
  },
  {
    src: "/assets/dk-tower.jpg",
    alt: "Dakota at Disney's Hollywood Studios",
    caption: "At Hollywood Studios",
  },
];

const Photo = () => {
  const [activePhoto, setActivePhoto] = useState(0);

  const showPrevious = () => {
    setActivePhoto((current) => (current - 1 + photos.length) % photos.length);
  };

  const showNext = () => {
    setActivePhoto((current) => (current + 1) % photos.length);
  };

  return (
    <div
      className="relative mx-auto flex w-full max-w-[470px] items-center justify-center py-8 md:py-10"
      role="region"
      aria-label="Photo slideshow"
      aria-roledescription="carousel"
    >
      <div className="absolute inset-[8%] rounded-full bg-[var(--accent-soft)] blur-3xl" aria-hidden="true" />
      <div className="absolute inset-[7%] rounded-full border border-dashed border-[var(--border-soft)]" aria-hidden="true" />
      <div className="relative aspect-square w-[min(82vw,410px)]">
        <div className="absolute inset-[9%] rounded-full border border-[var(--border-soft)] bg-[radial-gradient(circle_at_45%_35%,rgba(251,191,36,0.12),rgba(14,27,46,0.92)_70%)] shadow-[var(--shadow)]" />
        <Image
          key={photos[activePhoto].src}
          src={photos[activePhoto].src}
          priority={activePhoto === 0}
          fill
          sizes="(max-width: 768px) 82vw, 410px"
          alt={photos[activePhoto].alt}
          className="object-contain p-3 transition-opacity duration-300"
        />
        <div className="absolute bottom-[8%] left-0 rounded-2xl border border-[var(--border-soft)] bg-[var(--panel-strong)]/95 px-4 py-3 shadow-xl backdrop-blur">
          <p className="text-lg font-black text-[var(--text)]">Dakota King</p>
          <p className="mt-0.5 text-sm text-[var(--muted-text)]" aria-live="polite">
            {photos[activePhoto].caption}
          </p>
        </div>

        <div className="absolute bottom-[8%] right-0 flex gap-2">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous photo"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--panel-strong)]/95 text-[var(--text)] shadow-lg backdrop-blur hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FiChevronLeft className="text-xl" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Show next photo"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--panel-strong)]/95 text-[var(--text)] shadow-lg backdrop-blur hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FiChevronRight className="text-xl" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActivePhoto(index)}
            aria-label={`Show photo ${index + 1} of ${photos.length}: ${photo.caption}`}
            aria-pressed={activePhoto === index}
            className={`h-2.5 rounded-full transition-all ${
              activePhoto === index
                ? "w-7 bg-[var(--accent)]"
                : "w-2.5 bg-[var(--muted-text)]/50 hover:bg-[var(--muted-text)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Photo;
