"use client"

import { useEffect } from "react";

const SendPulseForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://web.webformscr.com/apps/fc3/build/default-handler.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div id="sf-form-123456"></div>
        `,
      }}
    />
  );
};

export default SendPulseForm;
