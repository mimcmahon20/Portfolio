import React from "react";

import "../styles/HeroText.css";


export default function HeroText() {



    return (
        <div className="heroText-container">
            {/* <h1 className="heroText congratulations">Congratulations!</h1> */}
            <h1 className="heroText first-line">You just found your</h1>
            <div style={{display: 'flex'}}>
                <h1 className="heroText second-line">next</h1>
                <h1 className="heroText"><span className="words"></span><span className="cursor">_</span></h1>
            </div>

        </div>
    );
}