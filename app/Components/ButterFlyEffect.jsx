"use client"
import { motion } from 'framer-motion';

const ButterflyAnimation = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-blue-400 to-white overflow-hidden">
      {/* Butterfly 1 */}
      <motion.div
        className="absolute w-12 h-12"
        style={{ top: '50%', left: '50%' }}
        animate={{ rotate: 360, x: 200, y: 200 }}
        transition={{ loop: Infinity, duration: 8, ease: "linear" }}
      >
        <div className="relative w-12 h-12">
          <div className="absolute w-3 h-6 bg-black top-2 left-4 rounded-full"></div>
          <div className="absolute w-6 h-8 bg-pink-500 opacity-50 border-2 border-pink-500 top-0 left-0 rounded-full animate-flap"></div>
          <div className="absolute w-6 h-8 bg-pink-500 opacity-50 border-2 border-pink-500 top-0 right-0 rounded-full animate-flap"></div>
        </div>
      </motion.div>

      {/* Butterfly 2 */}
      <motion.div
        className="absolute w-12 h-12"
        style={{ top: '50%', left: '50%' }}
        animate={{ rotate: 360, x: -200, y: 200 }}
        transition={{ loop: Infinity, duration: 10, ease: "linear" }}
      >
        <div className="relative w-12 h-12">
          <div className="absolute w-3 h-6 bg-black top-2 left-4 rounded-full"></div>
          <div className="absolute w-6 h-8 bg-green-500 opacity-50 border-2 border-green-500 top-0 left-0 rounded-full animate-flap"></div>
          <div className="absolute w-6 h-8 bg-green-500 opacity-50 border-2 border-green-500 top-0 right-0 rounded-full animate-flap"></div>
        </div>
      </motion.div>

      {/* Butterfly 3 */}
      <motion.div
        className="absolute w-12 h-12"
        style={{ top: '50%', left: '50%' }}
        animate={{ rotate: 360, x: 200, y: -200 }}
        transition={{ loop: Infinity, duration: 12, ease: "linear" }}
      >
        <div className="relative w-12 h-12">
          <div className="absolute w-3 h-6 bg-black top-2 left-4 rounded-full"></div>
          <div className="absolute w-6 h-8 bg-blue-500 opacity-50 border-2 border-blue-500 top-0 left-0 rounded-full animate-flap"></div>
          <div className="absolute w-6 h-8 bg-blue-500 opacity-50 border-2 border-blue-500 top-0 right-0 rounded-full animate-flap"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ButterflyAnimation;
