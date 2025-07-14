import { motion } from "framer-motion";



const AnimatedText = ({ text, className = "" }) => {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } },
  };

  return (
    <motion.span
      className={className}
      style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {char === "\n" ? <br /> : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
