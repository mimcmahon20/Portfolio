import React from "react";
import Nav from "./Nav";
import HeroText from "./HeroText";
import HeroArrow from "./HeroArrow";

export default function Hero() {
    return (
        <div>
            <Nav/>
            <HeroText/>
            <HeroArrow/>
        </div>
    );
}