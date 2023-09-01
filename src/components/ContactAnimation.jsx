import React from "react";
import "@lottiefiles/lottie-player";
import "../styles/Footer.css"

export default function ContactAnimation() {
  return (
    <div className="contact-animation">
      <lottie-player
        autoplay
        mode="normal"
        speed="0.5"
        loop
        delay="3000"
        src="https://lottie.host/e24f1aa2-b5fc-4f95-a374-9d278f7784ed/gEFCKPpmpO.json"
      ></lottie-player>
    </div>
  );
}
