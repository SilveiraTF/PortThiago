"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({
  images,
  index,
  onClose,
  onChangeIndex,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onChangeIndex: (i: number) => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-bg/95 flex items-center justify-center p-6"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
      >
        <button
          aria-label="Fechar"
          onClick={onClose}
          className="absolute top-6 right-6 text-text-primary hover:text-gold"
        >
          <X size={28} />
        </button>

        {images.length > 1 && (
          <button
            aria-label="Imagem anterior"
            onClick={(e) => {
              e.stopPropagation();
              onChangeIndex((index - 1 + images.length) % images.length);
            }}
            className="absolute left-6 text-text-primary hover:text-gold"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        <motion.img
          key={images[index]}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          src={images[index]}
          alt=""
          className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />

        {images.length > 1 && (
          <button
            aria-label="Próxima imagem"
            onClick={(e) => {
              e.stopPropagation();
              onChangeIndex((index + 1) % images.length);
            }}
            className="absolute right-6 text-text-primary hover:text-gold"
          >
            <ChevronRight size={32} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
