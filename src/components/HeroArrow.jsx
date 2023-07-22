import React from 'react';
import "../styles/HeroArrow.css";



export default function HeroArrow(props) {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    
    const {width} = props;
    let left = windowWidth/2 - width/2;
    let top = windowHeight/2 - width/2;
    const styles = {
        width: width + 'px',
        left: left,
        top: top,
    }

   

  return (
    <div style={{position: 'absolute', top: '50%'}}>
      <div className="arrow" style={styles}></div>
    </div>
  );
}
