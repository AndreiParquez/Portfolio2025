import { use, useEffect, useRef, useState } from "react";
import runningSprite from "../assets/cat/running.gif";
import jumpingSprite from "../assets/cat/jumping.gif";

const GAME_WIDTH = 370; // px, adjust as needed
const CACTUS_WIDTH = 32; // px, adjust as needed

export default function DinoMinigame() {
  const dinoRef = useRef(null);
  const cactusRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  

  console.log(cactusRef.current);

  // For manual animation
  const requestRef = useRef();
  const lastTimeRef = useRef();
  const cactusXRef = useRef(GAME_WIDTH);
  const speedRef = useRef(200); // px/sec, increases with score

  // Handle jump
  const jump = () => {
    if (isJumping || isGameOver) return;

    console.log("Jumping...");
    setIsJumping(true);
    dinoRef.current.classList.add("jump");
    setTimeout(() => {
      dinoRef.current.classList.remove("jump");
      console.log("Jump ended");
      setIsJumping(false);
    }, 600);
  };
  useEffect(() => {
    console.log("Jumping state changed:", isJumping);
  }, [isJumping]);

  // Handle restart
  const restart = () => {
    setScore(0);
    setIsGameOver(false);
    cactusXRef.current = GAME_WIDTH;
    speedRef.current = 200;
    lastTimeRef.current = undefined;
    requestRef.current = requestAnimationFrame(gameLoop);
  };

  // Main game loop
  const gameLoop = (timestamp) => {
    if (isGameOver) return;
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = (timestamp - lastTimeRef.current) / 1000; // seconds
    lastTimeRef.current = timestamp;
    console.log(cactusXRef.current);

    // Increase speed with score
    speedRef.current = 200 + score * 5; // px/sec

    // Move cactus
    cactusXRef.current -= speedRef.current * delta;
    if (cactusXRef.current < -CACTUS_WIDTH) {
      cactusXRef.current = GAME_WIDTH;
      setScore((s) => s + 1);
    }

    // Update cactus position
    if (cactusRef.current) {
      cactusRef.current.style.left = `${cactusXRef.current}px`;
    }

    // Collision detection
    // Collision detection using vertical position
    if (cactusXRef.current < 96 && cactusXRef.current > 48) {
      const dinoBottom = dinoRef.current?.getBoundingClientRect().bottom;
      const gameBottom =
        dinoRef.current?.parentElement?.getBoundingClientRect().bottom;

      if (dinoBottom && gameBottom && gameBottom - dinoBottom < 25) {
        setIsGameOver(true);
        return;
      }
    }

    requestRef.current = requestAnimationFrame(gameLoop);
  };

  // Start/stop game loop
  useEffect(() => {
    if (!isGameOver) {
      cactusXRef.current = GAME_WIDTH;
      lastTimeRef.current = undefined;
      requestRef.current = requestAnimationFrame(gameLoop);
    }
    return () => cancelAnimationFrame(requestRef.current);
    // eslint-disable-next-line
  }, [isGameOver, score]);

  // Keyboard controls
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
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line
  }, [isGameOver]);

  return (
    <div
      className="relative w-full max-w-xl h-64  overflow-hidden"
      
      onClick={jump}
    >
      <div
        ref={dinoRef}
        className={`absolute left-12 bottom-0 w-12 h-12 rounded jumpAnim`}
      >
        <img
          src={isJumping ? jumpingSprite : runningSprite}
          alt="Dino"
          className="w-full h-full object-cover cat "
        />
      </div>
      <div
        ref={cactusRef}
        className="absolute bottom-0 w-8 h-12 bg-red-500"
        style={{ left: cactusXRef.current }}
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
