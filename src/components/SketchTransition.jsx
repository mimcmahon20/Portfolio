import React from "react";
import Sketch from "react-p5";

let x = 50;
let y = 50;
export default (props) => {
  const setup = (p5, canvasParentRef) => {
    let canvasExists = p5.canvas.id[p5.canvas.id.length - 1];
    if (canvasExists !== "1") {
        p5.createCanvas(props.style.width, props.style.height).parent(canvasParentRef);  
    } 
  };

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++
    if(x > 500){
        x = 0;
    }
  };

  return <Sketch className="sketch" style={{width: '100%'}} setup={setup} draw={draw} />;
};