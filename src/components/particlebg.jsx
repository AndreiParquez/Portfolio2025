import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: '#18181B'
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: false,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff', 
        },
        links: {
          enable: false, 
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 0.8, // Slow movement speed
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 300, // Higher density for more particles
          },
          value: 60, // Number of particles
        },
        opacity: {
          value: 0.5, // Full opacity
        },
        shape: {
          type: 'circle', // Circular particles
        },
        size: {
          value: { min: 1, max: 2 }, // Smaller particles to resemble stars
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
      />
    );
  }

  return null;
};

export default App;