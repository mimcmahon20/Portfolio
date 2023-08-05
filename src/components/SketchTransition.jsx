import React from "react";
import Sketch from "react-p5";

let width;
let height;
// eslint-disable-next-line
let cnv;
let initialYLevel;
let finalYLevel;
let scrollPercentage = 0;
let rSequence;
// eslint-disable-next-line
export default (props) => {
  class Sequence {
    constructor() {
      this.sequence = [];
      this.numsInSequence = [];
      this.biggest = 0;
      this.numToDraw = 0;
    }

    addToSequence(num) {
      this.sequence.push(num);
      if (num > this.biggest) {
        this.biggest = num;
      }
    }

    drawSequence(p5) {
      for (let i = 0; i < this.numToDraw; i++) {
        if (i % 2 === 0) {
          //p5.arc(-i, 0, this.sequence[i], this.sequence[i], p5.PI, 0);
          p5.arc(i, 0, this.sequence[i], this.sequence[i], p5.PI, 0);
        } else {
          p5.arc(i, 0, this.sequence[i], this.sequence[i], 0, p5.PI);
          //p5.arc(-i, 0, this.sequence[i], this.sequence[i], 0, p5.PI);
        }
      }
    }

    fillSequence() {
      let counter = 0;
      let index = 0;
      for (let amountInSeq = 0; amountInSeq < 1000; amountInSeq++) {
        let next = index - counter;
        if (next < 0 || this.numsInSequence[next] === true) {
          next = index + counter;
        }
        this.numsInSequence[next] = true;
        index = next;
        this.addToSequence(next);
        counter++;
      }
    }
  }

  const setup = (p5, canvasParentRef) => {
    //logic for creating p5 canvas in React
    let canvasExists = p5.canvas.id[p5.canvas.id.length - 1];
    if (canvasExists !== "1") {
      cnv = p5
        .createCanvas(props.style.width, props.style.height)
        .parent(canvasParentRef);
    } else {
      p5.remove();
    }

    //set width and height to the p5 canvas
    width = props.style.width;
    height = props.style.height;
    p5.frameRate(60);

    //create a new sequence
    rSequence = new Sequence();
    rSequence.fillSequence();

    //checks to see if on Screen
    initialYLevel = canvasParentRef.getBoundingClientRect().top;
    finalYLevel = canvasParentRef.getBoundingClientRect().bottom;
  };

  const draw = (p5) => {
    //clears the canvas (have to in react to combat lag)
    p5.clear();
    //calculating the scroll percentage
    let currentY = window.scrollY;
    scrollPercentage = p5.map(
      currentY,
      initialYLevel - height,
      finalYLevel,
      0,
      100
    );
    rSequence.numToDraw = scrollPercentage;
    //if on screen, draw the graph
    if (scrollPercentage > 0 && scrollPercentage < 100) {
      p5.background("rgba(255,255,255, 0)");
      p5.push();
      p5.translate(width / 2, height / 2);
      p5.strokeWeight(0.5);
      p5.stroke(p5.map(scrollPercentage, -100, 100, 255, 0));
      p5.noFill();
      p5.scale(width / rSequence.numToDraw / 2);
      rSequence.drawSequence(p5);
      p5.pop();
      drawGraph(p5);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

function drawGraph(p5) {
  p5.push();
  p5.translate(width / 2, height / 2);
  p5.line(0, -height / 2, 0, height / 2);
  p5.line(-width / 2, 0, width / 2, 0);
  p5.pop();
}