import { useEffect, useRef, useState } from "react";

export default function DinoMinigame() {
 const dinoRef = useRef(null);
 const cactusRef = useRef(null);
 const [isJumping, setIsJumping] = useState(false);
 const [isGameOver, setIsGameOver] = useState(false);
 const [score, setScore] = useState(0);
 const [cactusDuration, setCactusDuration] = useState(3); // Start slower

 // Gradually speed up cactus as score increases
 useEffect(() => {
  if (!isGameOver) {
   // Decrease duration but not below 0.7s
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
    const dinoTop = parseInt(
     window.getComputedStyle(dinoRef.current).getPropertyValue("top")
    );
    const cactusLeft = parseInt(
     window.getComputedStyle(cactusRef.current).getPropertyValue("left")
    );

    if (cactusLeft < 60 && cactusLeft > 0 && dinoTop >= 140) {
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
 }, [isGameOver, cactusDuration]);

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
  <div className="relative w-full h-64 bg-gray-800 overflow-hidden" onClick={jump}>
   <div
    ref={dinoRef}
    className="absolute left-12 bottom-0 w-12 h-12 bg-green-500 rounded jumpAnim"
   ></div>
   <div
    ref={cactusRef}
    className="absolute bottom-0 left-full w-10 h-14 bg-red-500"
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
