import React from "react";

const TxTAnim = ({ tag = "div", children, className = "" }) => {
  return (
    <div className="inline-block relative">
      <span className={`relative z-10 inline-block ${className}`.trim()}>
        {React.createElement(tag, null, children)}
      </span>
      <span
        className="absolute top-0 left-0 h-full w-full bg-orange-500"
        style={{
          animation: "slide-close 1s forwards ease-in-out",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default TxTAnim;
