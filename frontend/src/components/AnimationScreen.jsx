import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const AnimationScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result || "";

  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => {
        navigate("/results", { state: { result } });
      }, 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [navigate, result]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/e75bf1b7ee091691771901f77543a825.jpg"
        alt="cybersecurity bg"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-around px-10 text-white font-mono">
        {/* Left Locker */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl flex flex-col items-center"
        >
          <div className="text-4xl mb-2">🔒</div>
          <p>Encrypting...</p>
        </motion.div>

        {/* Center Key + Dots */}
        <motion.div className="text-center text-4xl">
          {step >= 1 ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              🔑
            </motion.div>
          ) : (
            <div className="text-xl mt-2 animate-pulse text-gray-400">...</div>
          )}
        </motion.div>

        {/* Right Locker opens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 30 }}
          transition={{ duration: 1 }}
          className="text-2xl flex flex-col items-center"
        >
          <div className="text-4xl mb-2">🔓</div>
          <p>Decrypted!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimationScreen;
