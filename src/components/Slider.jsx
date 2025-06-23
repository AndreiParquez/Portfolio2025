import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

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
  const containerRef = useRef(null);
  const startX = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    startX.current = null;
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden mt-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={containerRef}
    >
      <motion.div
        className="flex"
        animate={{ x: -currentIndex * containerWidth }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }} // smooth cubic-bezier
        style={{
          width: `${images.length * 100}%`,
          willChange: "transform", // GPU optimization
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${containerWidth}px` }}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="h-64 w-full object-cover border-2 border-gray-300"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>

      {/* Navigation */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <button
          onClick={prev}
          className="bg-black/50 text-white p-2 rounded hover:bg-black/70 pointer-events-auto"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="bg-black/50 text-white p-2 rounded hover:bg-black/70 pointer-events-auto"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
