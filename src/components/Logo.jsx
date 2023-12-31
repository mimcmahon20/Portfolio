import React from "react";
import "@lottiefiles/lottie-player";
import "../styles/Nav.css";

export default function Logo() {
  return (
    <div className="logo">
      <lottie-player
        autoplay
        mode="normal"
        speed="0.9"
        src="https://lottie.host/37884961-3491-4f6c-8b5e-70e87f3430db/XmMFvM4Ljp.json"
      ></lottie-player>
    </div>
  );
}
