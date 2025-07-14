'use client'

import React, { useEffect, useRef, useState } from "react";

const TxTAnim = ({ tag = "div", children, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <span ref={ref} className="relative inline-block overflow-hidden">
      <span className={`relative z-10 inline-block ${className}`}>
        {React.createElement(tag, { className: "inline" }, children)}
      </span>
      <span
        className={`absolute top-0 left-0 h-full bg-orange-500 z-20 pointer-events-none 
          ${visible ? "animate-slide-close" : ""}`}
        style={{ width: '100%' }}
      />
    </span>
  );
};

export default TxTAnim;
