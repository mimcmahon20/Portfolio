import React from "react";
import Sketch from "react-p5";


let width;
let height;
let cnv;
let mouseX, mouseY;
//red, orange, yellow, green, blue, purple, pink, black, white
let active = [false, true, false, false, false, false, false, false, false];
// eslint-disable-next-line
export default (props) => {
  const setup = (p5, canvasParentRef) => {
    let canvasExists = p5.canvas.id[p5.canvas.id.length - 1];
    if (canvasExists !== "1") {
      cnv = p5.createCanvas(props.style.width, props.style.height).parent(
        canvasParentRef
      );
    } else {
      p5.remove();
    }
    width = props.style.width;
    height = props.style.height;
    p5.frameRate(150);
    cnv.mouseMoved((event) => {
      mouseX = event.offsetX;
      mouseY = event.offsetY;
    });
    cnv.mouseClicked(() => {
      let ind = currentColorIndex(active);
      active[ind] = false;
      if(ind === 8) {
        active[0] = true;
      } else {
        active[ind + 1] = true;
      }
    });
  };
  
  const draw = (p5) => {
    
    p5.background('rgba(255,255,255, 0)');
    p5.strokeWeight(20);
    p5.point(mouseX, mouseY);
    p5.push();
    p5.translate(width/2, height/2);
    currentColor(currentColorIndex(active),p5);
    p5.strokeWeight(50);
    p5.point(mouseX - width/2, mouseY - height / 2);
    p5.pop();
  };

  return <Sketch setup={setup} draw={draw} />;
};


function currentColorIndex(activeArray) {
  for (let i = 0; i < activeArray.length; i++) {
    if (activeArray[i] === true) {
      return i;
    }
  }
}

function currentColor(index, p5) {
  if(index === 0) {
    p5.stroke(255, 0, 0);
  }
  if(index === 1) {
    p5.stroke(255, 165, 0);
  }
  if(index === 2) {
    p5.stroke(255, 255, 0);
  }
  if(index === 3) {
    p5.stroke(0, 128, 0);
  }
  if(index === 4) {
    p5.stroke(0, 0, 255);
  }
  if(index === 5) {
    p5.stroke(128, 0, 128);
  }
  if(index === 6) {
    p5.stroke(255, 192, 203);
  }
  if(index === 7) {
    p5.stroke(0, 0, 0);
  }
  if(index === 8) {
    p5.stroke(255, 255, 255);
  }
}