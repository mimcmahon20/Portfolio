import React from "react";
import Sketch from "react-p5";

let frameCount;
let width;
let height;
let dots;
let active;

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    dots = [];
    active = true;
    frameCount = 0;
    let canvasExists = p5.canvas.id[p5.canvas.id.length - 1];
    if (canvasExists !== "1") {
      p5.createCanvas(props.style.width, props.style.height).parent(
        canvasParentRef
      );
    } else {
      p5.remove();
    }
    width = props.style.width;
    height = props.style.height;
    console.log(width, height);
    for (let i = 0; i < 100; i++) {
      dots.push(new dot(50, 0.0025 * i, p5));
    }
    p5.frameRate(24);
  };

  const draw = (p5) => {
    p5.clear();
    p5.background('rgba(255,255,255, 0)');
    p5.translate(width / 2, height / 2);
    p5.strokeWeight(20);
    dots.forEach((dot) => {
      if (active) {
        dot.update();
      }
      p5.point(dot.vec.x, dot.vec.y);
      dot.colorDot(p5);
    });
    frameCount++;
  };

  return <Sketch setup={setup} draw={draw} />;
};

class dot {
  constructor(amp, v, p5) {
    this.vel = p5.createVector(0, 0);
    this.amp = amp;
    this.angle = 0;
    this.angV = v;
    this.vec = p5.createVector(width / 2, height / 2);
  }

  update() {
    let x = this.amp * Math.cos(this.angV * 0.65 * frameCount);
    let y = this.amp * Math.sin(this.angV * 0.5 * frameCount);
    //y = -abs(y);
    this.vec.set(x, y);
  }

  colorDot(p5) {
    p5.stroke(
      220 * Math.sin(this.angV * frameCount),
      255 * Math.cos(this.angV * frameCount),
      225 * Math.tan(this.angV * frameCount)
    );
  }
}
