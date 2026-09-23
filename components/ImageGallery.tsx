"use client";

import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import { cn } from "@/lib/utils";

export default function ImageGallery({ images, emptyLabel }: { images: string[]; emptyLabel: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-borderc p-10 text-center text-sm text-text-secondary">
        {emptyLabel}
      </div>
    );
  }

  return (
    <>
      <div
        className={cn(
          "grid gap-4",
          images.length === 1 ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setOpenIndex(i)}
            className="relative aspect-video rounded-xl overflow-hidden border border-borderc glow-blue-hover group"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox images={images} index={openIndex} onClose={() => setOpenIndex(null)} onChangeIndex={setOpenIndex} />
      )}
    </>
  );
}
