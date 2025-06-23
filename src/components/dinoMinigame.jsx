import { useEffect, useRef, useState } from "react";
import runningSprite from "../assets/cat/running.gif";
import jumpingSprite from "../assets/cat/jumping.gif";

export default function DinoMinigame() {
  const dinoRef = useRef(null);
  const cactusRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [cactusDuration, setCactusDuration] = useState(3);
  const isGameOverRef = useRef(isGameOver);

  useEffect(() => {
    isGameOverRef.current = isGameOver;
  }, [isGameOver]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === " " || event.keyCode === 32) {
        event.preventDefault();
        if (isGameOver) {
          restart();
        } else {
          jump();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isGameOver]);

  // Gradually speed up cactus as score increases
  useEffect(() => {
    if (!isGameOver) {
      setCactusDuration(Math.max(0.7, 2 - score * 0.02));
    }
  }, [score, isGameOver]);

  useEffect(() => {
    let scoreInterval = null;
    let animationFrameId = null;

    if (!isGameOver) {
      cactusRef.current.style.animation = `cactusMove ${cactusDuration}s infinite linear`;

      scoreInterval = setInterval(() => {
        setScore((prev) => prev + 1);
      }, 600);

      const checkCollision = () => {
        const cactusLeft = parseInt(
          window.getComputedStyle(cactusRef.current).getPropertyValue("left")
        );

        // If dino is not jumping and cactus is close, it's a collision
        if (cactusLeft < 10 && cactusLeft > 0 && !isJumping) {
          setIsGameOver(true);
          clearInterval(scoreInterval);
          cactusRef.current.style.animation = "none";
          cactusRef.current.style.left = `${cactusLeft}px`;
          return;
        }
        animationFrameId = requestAnimationFrame(checkCollision);
      };
      animationFrameId = requestAnimationFrame(checkCollision);
    }

    return () => {
      clearInterval(scoreInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isGameOver, cactusDuration, isJumping]);

  const jump = () => {
    if (isJumping || isGameOver) return;
    setIsJumping(true);
    dinoRef.current.classList.add("jump");
    setTimeout(() => {
      dinoRef.current.classList.remove("jump");
      setIsJumping(false);
    }, 400);
  };

  const restart = () => {
    setScore(0);
    setIsGameOver(false);
    setCactusDuration(2); // Reset to slow
    cactusRef.current.style.left = "100%";
    cactusRef.current.style.animation = `cactusMove 2s infinite linear`;
  };

  return (
    <div
      className="relative w-full h-64 bg-gray-800 overflow-hidden"
      onClick={jump}
    >
      <div
        ref={dinoRef}
        className={`absolute left-12 bottom-0 w-12 h-12 rounded jumpAnim`}
      >
        <img
          src={isJumping ? jumpingSprite : runningSprite}
          alt="Dino"
          className="w-full h-full object-cover cat bg-amber-400"
        />
      </div>
      <div
        ref={cactusRef}
        className="absolute bottom-0 left-full w-16 h-12 bg-red-500"
      ></div>
      <div className="absolute top-2 left-2 text-white text-sm font-mono">
        Score: {score}
      </div>
      {isGameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white text-xl font-bold">
          Game Over!{" "}
          <button
            className="ml-4 px-3 py-1 bg-white text-black"
            onClick={restart}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
