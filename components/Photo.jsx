"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPause,
  FiPlay,
} from "react-icons/fi";

const photos = [
  {
    src: "/assets/DakotaKPic2.png",
    alt: "Portrait of Dakota King",
    caption: "Designer & Developer",
    imageStyle: "object-contain p-3",
  },
  {
    src: "/assets/dk-mouse.jpg",
    alt: "Dakota with Mickey Mouse at Cool Kids Summer",
    caption: "Mickey Mouse at Cool Kids Summer",
    imageStyle: "object-cover object-[center_38%]",
  },
  {
    src: "/assets/dk-tower.jpg",
    alt: "Dakota at work in Disney's Hollywood Studios",
    caption: "Working at Disney's Hollywood Studios",
    imageStyle: "object-cover object-[center_30%]",
  },
];

const Photo = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsPaused(true);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      setActivePhoto((activePhoto + 1) % photos.length);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [activePhoto, isPaused]);

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
      <div className="relative aspect-[4/5] w-[min(82vw,380px)]">
        <div className="absolute inset-[9%] rounded-full border border-[var(--border-soft)] bg-[radial-gradient(circle_at_45%_35%,rgba(251,191,36,0.12),rgba(14,27,46,0.92)_70%)] shadow-[var(--shadow)]" />
        <Image
          key={photos[activePhoto].src}
          src={photos[activePhoto].src}
          priority={activePhoto === 0}
          fill
          sizes="(max-width: 768px) 82vw, 380px"
          alt={photos[activePhoto].alt}
          className={`rounded-[1.75rem] transition-opacity duration-300 ${photos[activePhoto].imageStyle}`}
        />
        <div className="absolute bottom-[8%] left-0 rounded-2xl border border-[var(--border-soft)] bg-[var(--panel-strong)]/95 px-4 py-3 shadow-xl backdrop-blur">
          <p className="text-lg font-black text-[var(--text)]">Dakota King</p>
          <p className="mt-0.5 text-sm text-[var(--muted-text)]" aria-live={isPaused ? "polite" : "off"}>
            {photos[activePhoto].caption}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
          className="absolute right-0 top-[8%] flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--panel-strong)]/95 text-[var(--text)] shadow-lg backdrop-blur hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          {isPaused ? (
            <FiPlay className="text-lg" aria-hidden="true" />
          ) : (
            <FiPause className="text-lg" aria-hidden="true" />
          )}
        </button>

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

      <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActivePhoto(index)}
            aria-label={`Show photo ${index + 1} of ${photos.length}: ${photo.caption}`}
            aria-pressed={activePhoto === index}
            className="relative h-2.5 w-7 overflow-hidden rounded-full bg-[var(--muted-text)]/35 transition-colors hover:bg-[var(--muted-text)]/60"
          >
            {activePhoto === index && (
              <span
                className={`photo-progress absolute inset-0 rounded-full bg-[var(--accent)] ${
                  isPaused ? "photo-progress-paused" : ""
                }`}
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Photo;
