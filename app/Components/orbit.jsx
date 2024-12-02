"use client";
import React, { useEffect, useState } from "react";

// SnowfallEffect component
const SnowfallEffect = () => {
  const totalParticles = 1000; // Number of particles
  const orbSize = 600; // Size of the orb
  const particleSize = 3; // Size of each particle
  const time = 0.5; // Animation duration in seconds
  const baseHue = 0; // Starting color (change to adjust the overall color)

  const [particles, setParticles] = useState([]);

  // Generate random values for each particle
  useEffect(() => {
    const particlesArray = [];

    for (let i = 0; i < totalParticles; i++) {
      const z = Math.random() * 360;
      const y = Math.random() * 360;
      const hue = (40 / totalParticles) * i + baseHue;

      particlesArray.push({
        z,
        y,
        hue,
        animationDelay: i * 0.01, // Animation delay for each particle
      });
    }

    setParticles(particlesArray);
  }, []);

  // Function to generate keyframe styles for each particle
  const getKeyframeStyles = (i) => {
    const z = Math.random() * 360;
    const y = Math.random() * 360;
    const orbSize = 150;
    return `
      @keyframes orbit${i} {
        20% {
          opacity: 1;
        }
        30% {
          transform: rotateZ(${z}deg) rotateY(${y}deg) translateX(${orbSize}px) rotateZ(-${z}deg);
        }
        80% {
          transform: rotateZ(${z}deg) rotateY(${y}deg) translateX(${orbSize}px) rotateZ(-${z}deg);
          opacity: 1;
        }
        100% {
          transform: rotateZ(${z}deg) rotateY(${y}deg) translateX(${orbSize * 3}px) rotateZ(${z}deg);
        }
      }
    `;
  };

  // Inject keyframes into the document head
  const injectKeyframes = () => {
    const styleSheet = document.styleSheets[0];
    particles.forEach((_, i) => {
      const keyframes = getKeyframeStyles(i);
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    });
  };

  useEffect(() => {
    injectKeyframes(); // Inject keyframes once after component mounts
  }, [particles]);

  return (
    <div className="wrap">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="c"
          style={{
            position: "absolute",
            width: `${particleSize}px`,
            height: `${particleSize}px`,
            borderRadius: "50%",
            opacity: 0,
            animation: `orbit${i} ${time}s 7`,
            animationDelay: `${particle.animationDelay}s`,
            backgroundColor: `hsla(${particle.hue}, 100%, 50%, 1)`,
          }}
        />
      ))}
    </div>
  );
};

export default SnowfallEffect;
