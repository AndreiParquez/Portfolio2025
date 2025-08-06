import { use, useEffect, useRef, useState } from "react";
import runningSprite from "../assets/cat/running.gif";
import jumpingSprite from "../assets/cat/jumping.gif";
import deathSprite from "../assets/cat/gameover.png";
import idleSprite from "../assets/cat/idle.gif";
import jumpSound from "../assets/audio/jump.mp3";
import bgMusic from "../assets/audio/bg-music.mp3";
import meowSound from "../assets/audio/meowrgh.mp3";
import { motion, AnimatePresence } from "framer-motion";

const GAME_WIDTH = 370; // px, adjust as needed
const CACTUS_WIDTH = 32; // px, adjust as needed

export default function DinoMinigame() {
  const dinoRef = useRef(null);
  const bgRef = useRef(null);
  const cactusRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);
  const [isIdle, setIsIdle] = useState(true);
  const [isDeath, setIsDeath] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStart, setIsGameStart] = useState(false);
  const [score, setScore] = useState(0);

  const jumpAudioRef = useRef(null);
  const meowAudioRef = useRef(null);
  const bgMusicRef = useRef(null);

  useEffect(() => {
    jumpAudioRef.current = new Audio(jumpSound);
    meowAudioRef.current = new Audio(meowSound);
    bgMusicRef.current = new Audio(bgMusic);
    bgMusicRef.current.loop = true;
  }, []);
  useEffect(() => {
    const images = [runningSprite, jumpingSprite, deathSprite, idleSprite];
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (score > 9) {
      bgRef.current.classList.add("flashing");
    } else {
      bgRef.current.classList.remove("flashing");
    }
  }, [score]);

  // For manual animation
  const requestRef = useRef();
  const lastTimeRef = useRef();
  const cactusXRef = useRef(GAME_WIDTH);
  const speedRef = useRef(200); // px/sec, increases with score

  // Handle jump
  const jump = () => {
    if (isJumping || isGameOver) return;
    setIsJumping(true);
    dinoRef.current.classList.add("jump");
    if (jumpAudioRef.current) {
      jumpAudioRef.current.currentTime = 0;
      jumpAudioRef.current.play();
    }
    setTimeout(() => {
      dinoRef.current.classList.remove("jump");
      setIsJumping(false);
    }, 600);
  };

  // Main game loop
  const gameLoop = (timestamp) => {
    if (isGameOver) return;
    if (!bgMusicRef.current.paused) {
      bgMusicRef.current.play();
    } else {
      bgMusicRef.current.currentTime = 0;
      bgMusicRef.current.play();
    }
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = (timestamp - lastTimeRef.current) / 1000; // seconds
    lastTimeRef.current = timestamp;

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
    // Collision detection using vertical position
    if (cactusXRef.current < 96 && cactusXRef.current > 48) {
      const dinoBottom = dinoRef.current?.getBoundingClientRect().bottom;
      const gameBottom =
        dinoRef.current?.parentElement?.getBoundingClientRect().bottom;

      if (dinoBottom && gameBottom && gameBottom - dinoBottom < 25) {
        if (meowAudioRef.current) {
          meowAudioRef.current.currentTime = 0;
          meowAudioRef.current.play();
        }
        setIsGameOver(true);
        setIsDeath(true);
        setIsJumping(false);
        setIsIdle(false);
        bgMusicRef.current.pause();
        return;
      }
    }

    requestRef.current = requestAnimationFrame(gameLoop);
  };

  // Start/stop game loop
  useEffect(() => {
    if (isGameStart && !isGameOver) {
      cactusXRef.current = GAME_WIDTH;
      lastTimeRef.current = undefined;
      requestRef.current = requestAnimationFrame(gameLoop);
    }
    return () => cancelAnimationFrame(requestRef.current);
    // eslint-disable-next-line
  }, [isGameStart, isGameOver]);

  function startGame() {
    if (!isGameOver) {
      setIsGameStart(true);
      setIsIdle(false);
    }
  }
  // Handle restart
  const restart = () => {
    setIsDeath(false);
    setScore(0);
    setIsGameOver(false);
    speedRef.current = 200;
    setIsGameStart(true);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === " " || event.keyCode === 32) {
        event.preventDefault();
        if (isGameOver) {
          restart();
        } else if (!isGameStart) {
          startGame();
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
    <div className="mt-10 ">
      <div className="my-4">
        <span className="text-zinc-300 text-xs px-2 rounded-md py-1 bg-zinc-700 text-start">
          Mini Game
        </span>
      </div>
      <div
        className="relative  w-full max-w-xl h-64 font-pixellari rounded-t-xl text-sm border-b-4 border-zinc-800  overflow-hidden"
        onClick={jump}
        ref={bgRef}
      >
        <div
          ref={dinoRef}
          className={`absolute left-12 bottom-0 w-12 h-12 rounded jumpAnim`}
        >
          <img
            src={
              isJumping
                ? jumpingSprite
                : isDeath
                ? deathSprite
                : isIdle
                ? idleSprite
                : runningSprite
            }
            alt="Dino"
            className="w-full h-full object-cover cat "
          />
        </div>
        <div
          ref={cactusRef}
          className="absolute bottom-0 w-8 h-12 bg-zinc-800"
          style={{ left: cactusXRef.current }}
        ></div>
        <div className="absolute top-2 right-2 tracking-widest text-white  ">
          {score}
        </div>

        <AnimatePresence>
          {isGameOver && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center  bg-black/25 text-white text-xs tracking-widest"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button className="ml-4 px-3 py-1 " onClick={restart}>
                Game Over! Restart
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isGameStart && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 text-white text-sm tracking-widest"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={startGame}
            >
              <p className="text-2xl text-center font-bold">
                Just a Cat Jumping Game
              </p>
              <motion.button
                className="ml-4 px-3 py-1 text-zinc-400"
                onClick={startGame}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                Click to start or Press Space ...
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
