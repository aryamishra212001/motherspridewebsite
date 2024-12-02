// import React from 'react';

// const BubbleAnimation = () => {
//   return (
//     <div className="h-screen flex items-center justify-center ">
//       <div className="relative w-72 h-72 flex items-center justify-center">
//         {/* Bubble */}
//         <div className="w-full h-full rounded-full border-8 border-yellow-300 animate-bounce scale-100">
//           {/* Shine effect */}
//           <div className="absolute top-[5%] left-[5%] w-[90%] h-[90%] rounded-full bg-gradient-to-t from-white to-transparent blur-md"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BubbleAnimation;


////////////////////////////////////





// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// import pedacycle from '../../public/pedacycle.png'
// import study from '../../public/study.jpg';
// const BubbleAnimation = ({image}) => {
// // const BubbleAnimation = () => {

//     const img={
//         study:study,
//         pedacycle:pedacycle
//     }
//   return (
//     <div className="h-full flex items-center justify-center ">
//       <motion.div
//         className="w-[20rem] h-[20rem] rounded-full border-yellow-400 border-8 "
//         initial={{ x: "-100%", y: 0, scale: 1 }}
//         whileInView={{          
//             x: ["-100%", "100%"],
//             y: [0, -30, 30, 0],  
//             scale: [0,0.2,0.4, 0.6, 0.8, 1] }}
//         transition={{
//           duration: 3,
//           ease: "easeInOut",
//           repeat: false,
//           times: [0,0.2,0.4,0.6,0.8,1],
//         }}
//         viewport={{ once: true }}
//       >
//         <motion.div className="absolute top-[0%] left-[0%] opacity-0 w-full h-full border-2 rounded-[50%]" initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 3, duration: 1 }} >
//             {/* <Image src={img[image]} layout="fill" className="rounded-[50%]" alt="image" /> */}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default BubbleAnimation;
