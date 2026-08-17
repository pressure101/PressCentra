import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticleBg(){
  const opts = {
    fpsLimit: 30,
    interactivity: {
      events: { onHover: { enable: true, mode: 'bubble' } },
      modes: { bubble: { distance: 140, size: 9, duration: 0.6, opacity: 1 } }
    },
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: ['#1e9bff', '#ff6b3f', '#8fd6ff'] },
      links: { enable: true, distance: 120, color: '#93c5fd', opacity: 0.12 },
      move: { enable: true, speed: 0.6, direction: 'none', outModes: { default: 'bounce' } },
      opacity: { value: 0.7 },
      size: { value: { min: 1, max: 4 } }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="w-full h-full">
      <Particles init={particlesInit} options={opts} />
    </div>
  );
}
