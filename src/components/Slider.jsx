import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import ach1 from "../assets/album/slide1.jpg";
import ach2 from "../assets/album/slide2.jpg";
const images = [
  ach1,
  ach2
];

const slides = [
  {
    src: ach1,
    alt: "Slide 1",
    title: "Slide 1",
    subtitle: "This is the first slide",
  },
  {
    src: ach2,
    alt: "Slide 2",
    title: "Slide 2",
    subtitle: "This is the second slide",
  }
]

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
    <div className="mt-10">
      <div className="my-4">
        <span className="text-zinc-300 text-xs px-2 rounded-md py-1 bg-zinc-700 text-start">
          Gallery
        </span>
      </div>

      <div
        className="relative w-full max-w-4xl mx-auto overflow-hidden  rounded-xl "
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={containerRef}
      >
        <motion.div
          className="flex"
          animate={{ x: -currentIndex * containerWidth }}
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
          style={{
            width: `${images.length * 100}%`,
            willChange: "transform",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative"
              style={{ width: `${containerWidth}px` }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                className="h-64 w-full object-cover "
                draggable={false}
              />
              <div className=" bg-black/50  p-1 px-3 absolute bottom-0 w-full">
                <p className=" text-white tracking-widest font-semiboldtext-xs">{slide.title}</p>
                <p className=" text-zinc-300 text-xs">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation */}
        <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
          <motion.button
            onClick={prev}
            className="bg-black/10 text-white p-2 rounded-full hover:bg-black/50 pointer-events-auto"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <RiArrowLeftSLine size={24} />
          </motion.button>
          <motion.button
            onClick={next}
            className="bg-black/10 text-white p-2 rounded-full hover:bg-black/50 pointer-events-auto"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <RiArrowRightSLine size={24} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
