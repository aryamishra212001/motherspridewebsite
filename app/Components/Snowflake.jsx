"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import next/image for optimized images

const Snowfall = ({ numFlakes = 5 }) => {
  const [flakes, setFlakes] = useState([]);

  // Helper function to generate random styles for snowflakes
  const randomStyles = () => ({
    left: `${Math.random() * 100}vw`, // Random horizontal position (left to right)
    fontSize: `${Math.random() * 10 + 10}px`, // Random size (10px to 20px)
    animationDuration: `${Math.random() * 2 + 2}s`, // Random fall duration (5s to 10s)
    animationDelay: `${Math.random() * 3}s`, // Random delay (0s to 3s)
  });

  // Generate snowflakes when the component mounts
  useEffect(() => {
    const snowflakes = Array.from({ length: numFlakes }).map(() => randomStyles());
    setFlakes(snowflakes);

    // Cleanup snowflakes on component unmount
    return () => {
      setFlakes([]);
    };
  }, [numFlakes]);

  return (
    <div
      className="Snow"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Prevent interaction with snowflakes
        zIndex: 9999, // Ensure snowflakes are above other content
      }}
    >
      {/* Render each snowflake */}
      {flakes.map((flakeStyle, i) => (
        <div
          key={i}
          className="snowflake-img"
          style={{
            ...flakeStyle,
            position: "absolute",
            opacity: 0,
            pointerEvents: "none", // Prevent interaction with snowflakes
          }}
        >
          <Image
            src="/greenheart.svg" // Your image for the snowflake (replace with your image path)
            alt="Snowflake"
            width={55}  // Image width (adjust as needed)
            height={50} // Image height (adjust as needed)
          />
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
