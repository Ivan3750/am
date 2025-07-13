"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const hoverElements = document.querySelectorAll("a, button, .cursor-hover");

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: position.x - 25,
          y: position.y - 25,
          scale: hovered ? 1.5 : 1,
          backgroundColor: "transparent",
          borderColor: "#000000",
        }}
        transition={{
          type: "spring",
          mass: 0.2, // Швидший відгук
          stiffness: 300, // Жорсткість для швидкого слідування
          damping: 20,
        }}
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          border: "1px solid",
          position: "fixed",
          mixBlendMode: "difference",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Малий кружечок всередині */}
        <motion.div
          animate={{
            width: hovered ? 12 : 6,
            height: hovered ? 12 : 6,
            backgroundColor: hovered ? "#F47820" : "#000000",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          style={{
            borderRadius: "50%",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomCursor;
