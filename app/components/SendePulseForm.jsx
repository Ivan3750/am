"use client";

import { useEffect } from "react";

const SendPulseForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://web.webformscr.com/apps/fc3/build/default-handler.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="sf-form-4468bf567100db975121ab7126f2cc80"></div>;
};

export default SendPulseForm;
