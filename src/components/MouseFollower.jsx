import React from "react";
import "@lottiefiles/lottie-player";
import "../styles/MouseFollower.css";


export default function MouseFollower() {
  //make the mouse follower class follow the cursor around the screen

  return (
    <div className="mouse-follower">
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://lottie.host/a0bcd7b0-d918-47e8-ab7b-38d109283b02/XXuIvWS93Z.json"
      ></lottie-player>
    </div>
  );
}
