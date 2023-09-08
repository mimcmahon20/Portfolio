import React from "react";
import "../styles/Scroller.css";
import "@lottiefiles/lottie-player";

export default function Scroller() {
  return (
    <div className="scroller">
      <lottie-player
        autoplay
        loop
        mode="normal"
        direction="-1"
        src="https://lottie.host/a831bf2a-3047-4bfe-920f-f4267402c8ef/x7e5TzqrIj.json"
      ></lottie-player>
    </div>
  );
}
