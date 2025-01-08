import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/kmv-logo.png";

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background-light via-background-light to-primary/5 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Corners */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position, i) => (
        <motion.div
          key={`corner-${i}`}
          className={`absolute ${position.includes('top') ? 'top-0' : 'bottom-0'} ${position.includes('left') ? 'left-0' : 'right-0'} w-32 h-32`}
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1],
            rotate: [0, position.includes('right') ? 90 : -90]
          }}
          transition={{ duration: 1.5, delay: i * 0.3, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-full h-full border-4 border-primary/20"
            style={{
              borderRadius: position.includes('top') ? '0 0 100% 0' : '100% 0 0 0',
              borderTop: position.includes('top') ? '4px solid' : 'none',
              borderLeft: position.includes('left') ? '4px solid' : 'none',
              borderColor: 'rgba(31, 127, 80, 0.2)'
            }}
          />
        </motion.div>
      ))}

      {/* Floating Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute w-8 h-8"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-full h-full border-2 border-primary/10"
            style={{
              borderRadius: i % 2 === 0 ? '50%' : '20%',
              transform: `rotate(${i * 30}deg)`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}

      {/* Wave Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute w-full h-px bg-primary/10"
            style={{ top: `${20 + i * 15}%` }}
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Logo Container */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{
          scale: [0.2, 1.2, 1.5],
          opacity: 1,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="KMV Enterprises"
          className="w-48 h-48"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Progress Bar */}
      <div className="mt-8 relative">
        <motion.div
          className="w-64 h-1.5 bg-primary/10 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary-light via-accent to-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 4,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Loading Indicators */}
        <div className="mt-4 flex justify-center space-x-3">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="w-2 h-2 bg-primary/30 rounded-full"
              animate={{
                y: [-3, 3, -3],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner Lines */}
      <div className="absolute inset-4 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-16 h-px bg-primary/20"
          animate={{ scaleX: [0, 1], originX: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-px h-16 bg-primary/20"
          animate={{ scaleY: [0, 1], originY: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 right-0 w-16 h-px bg-primary/20"
          animate={{ scaleX: [0, 1], originX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 right-0 w-px h-16 bg-primary/20"
          animate={{ scaleY: [0, 1], originY: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
