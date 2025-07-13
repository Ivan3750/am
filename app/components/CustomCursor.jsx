"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [clicks, setClicks] = useState([]);

  // Плавний рух курсора
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      setMouseX(e.clientX - 25);
      setMouseY(e.clientY - 25);
    };

    const click = (e) => {
      const id = crypto.randomUUID();
      setClicks((prev) => [...prev, { x: e.clientX, y: e.clientY, id }]);

      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== id));
      }, 700);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, []);

  // Відстеження hover-елементів (динамічно)
  useEffect(() => {
    const handleHover = (e) => {
      const target = e.target;
      if (target.closest("a, button, .cursor-hover")) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleHover);

    return () => {
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleHover);
    };
  }, []);

  return (
    <>
      {/* Основний кастомний курсор */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          width: 50,
          height: 50,
          borderRadius: "50%",
          border: "1px solid black",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
          mixBlendMode: "difference",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: hovered ? "0 0 8px #F47820" : "none",
          transition: "box-shadow 0.3s ease",
          backdropFilter: "invert(1)",
        }}
      >
        <motion.div
          animate={{
            width: hovered ? 12 : 6,
            height: hovered ? 12 : 6,
            backgroundColor: hovered ? "#F47820" : "#000",
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

      {/* Ефекти кліку */}
      {clicks.map((click) => (
        <motion.div
          key={click.id}
          initial={{
            x: click.x - 25,
            y: click.y - 25,
            opacity: 0.5,
            scale: 0,
          }}
          animate={{
            scale: 1.5,
            opacity: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          style={{
            position: "fixed",
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "rgba(150, 150, 150, 0.3)",
            pointerEvents: "none",
            top: 0,
            left: 0,
            zIndex: 9998,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
