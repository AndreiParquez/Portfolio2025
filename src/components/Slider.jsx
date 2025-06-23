import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "https://picsum.photos/id/237/100/100",
  "https://picsum.photos/id/238/200/300",
  "https://picsum.photos/id/239/200/300",
  "https://picsum.photos/id/240/200/300",
  "https://picsum.photos/id/241/200/300",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = images.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? totalSlides - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden mt-10">
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * (100 / totalSlides)}%` }}
        transition={{ duration: 0.5 }}
        style={{
          width: `${totalSlides * 100}%`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${100 / totalSlides}%`,
            }}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="h-64 w-full border-2 border-gray-300 object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Navigation */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prev}
          className="bg-black/50 text-white p-2 rounded hover:bg-black/70"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="bg-black/50 text-white p-2 rounded hover:bg-black/70"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
