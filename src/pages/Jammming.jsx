import React, {useEffect} from "react";
import Nav from "../components/Nav";
import "../styles/Jammming.css";
import { gsap } from "gsap";
 
export default function Jammming() {

    //we will just set the window y to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Nav />
            <h1>Jammming</h1>
            </div>
    );
}
