"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PROMOTIONS } from "@/app/lib/mockData";

const AUTO_MS = 4000;

export default function PromotionCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (PROMOTIONS.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PROMOTIONS.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, []);

  const go = (i: number) => setIndex((i + PROMOTIONS.length) % PROMOTIONS.length);

  return (
    <section
      className="relative w-full overflow-hidden rounded-xl bg-black/5 ring-1 ring-black/5"
      aria-label="carousel โปรโมชัน"
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {PROMOTIONS.map((p) => (
          <div
            key={p.id}
            className="relative aspect-[16/9] w-full flex-shrink-0"
          >
            <Image
              src={p.image}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
        {PROMOTIONS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            aria-label={`ไปสไลด์ที่ ${i + 1}`}
            onClick={() => go(i)}
            className={[
              "h-1.5 rounded-full transition-all",
              i === index
                ? "w-5 bg-white shadow"
                : "w-1.5 bg-white/60 hover:bg-white/80",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
}
