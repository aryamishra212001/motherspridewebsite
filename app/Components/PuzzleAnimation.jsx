"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PuzzleAnimation = () => {
  const [isComplete, setIsComplete] = useState(false); // Track completion state

  // Puzzle piece positions and animation
  const pieces = [
    { id: 1, x: -100, y: -100 }, // Top-left
    { id: 2, x: 100, y: -100 },  // Top-right
    { id: 3, x: -100, y: 100 },  // Bottom-left
    { id: 4, x: 100, y: 100 },   // Bottom-right
  ];

  return (
    <div className="relative w-[300px] h-[300px] mx-auto mt-10 z-10">
      {!isComplete && pieces.map((piece, index) => (
        <motion.div
          key={piece.id}
          initial={{ x: piece.x, y: piece.y, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.5 }} // Sequential animation
          onAnimationComplete={() => index === pieces.length - 1 && setIsComplete(true)}
          className="absolute w-1/2 h-1/2 bg-cover"
          style={{
            backgroundImage: `url('/parent.jpg')`, // Replace with your image
            backgroundPosition: `${index % 2 === 0 ? 'left' : 'right'} ${index < 2 ? 'top' : 'bottom'}`,
            backgroundSize: '300px 300px',
          }}
        />
      ))}

      {isComplete && (
        <Image
          src="/parent.jpg" // Replace with your image path
          alt="Complete Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      )}
    </div>
  );
};

export default PuzzleAnimation;
