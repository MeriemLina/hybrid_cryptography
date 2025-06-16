import React from 'react';
import { motion } from "framer-motion";

const InputScreen = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src='/assets/e75bf1b7ee091691771901f77543a825.jpg'
        alt="cybersecurity bg"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-8 font-mono tracking-wide text-sky-600 drop-shadow-lg"
            >
            enter your message...
        </motion.h1>

        <motion.input
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            type="text"
            placeholder="Type something confidential..."
            className="w-96 px-6 py-3 rounded-xl bg-gray-900 bg-opacity-80 text-sky-300 border-2 border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 hover:shadow-[0_0_15px_#0ea5e9] transition duration-300 ease-in-out"
        />

      </div>
    </div>
  );
};

export default InputScreen;
