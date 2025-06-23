import { useEffect, useRef, useState } from "react";

export default function DinoMinigame() {
  const dinoRef = useRef(null);
  const cactusRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let scoreInterval = null;
    let collisionInterval = null;

    if (!isGameOver) {
      // Move cactus
      cactusRef.current.style.animation = "cactusMove 1.5s infinite linear";

      // Score counter
      scoreInterval = setInterval(() => {
        setScore((prev) => prev + 1);
      }, 100);

      // Collision check
      collisionInterval = setInterval(() => {
        const dinoTop = parseInt(
          window.getComputedStyle(dinoRef.current).getPropertyValue("top")
        );
        const cactusLeft = parseInt(
          window.getComputedStyle(cactusRef.current).getPropertyValue("left")
        );

        if (cactusLeft < 60 && cactusLeft > 0 && dinoTop >= 140) {
          setIsGameOver(true);
          clearInterval(scoreInterval);
          clearInterval(collisionInterval);
          cactusRef.current.style.animation = "none";
          cactusRef.current.style.left = `${cactusLeft}px`;
        }
      }, 10);
    }

    return () => {
      clearInterval(scoreInterval);
      clearInterval(collisionInterval);
    };
  }, [isGameOver]);

  const jump = () => {
    if (isJumping || isGameOver) return;

    setIsJumping(true);
    dinoRef.current.classList.add("jump");

    setTimeout(() => {
      dinoRef.current.classList.remove("jump");
      setIsJumping(false);
    }, 500);
  };

  const restart = () => {
    setScore(0);
    setIsGameOver(false);
    cactusRef.current.style.left = "100%";
    cactusRef.current.style.animation = "cactusMove 1.5s infinite linear";
  };

  return (
    <div className="relative w-full h-64 bg-gray-800 overflow-hidden" onClick={jump}>
      <div
        ref={dinoRef}
        className="absolute left-12 bottom-0 w-12 h-12 bg-green-500 rounded jumpAnim"
      ></div>

      <div
        ref={cactusRef}
        className="absolute bottom-0 left-full w-10 h-20 bg-red-500"
      ></div>

      <div className="absolute top-2 left-2 text-white text-sm font-mono">
        Score: {score}
      </div>

      {isGameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white text-xl font-bold">
          Game Over! <button className="ml-4 px-3 py-1 bg-white text-black" onClick={restart}>Restart</button>
        </div>
      )}
    </div>
  );
}
