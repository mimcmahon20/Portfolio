import React from "react";
import "../styles/Footer.css";
import ContactAnimation from "./ContactAnimation";

export default function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer-header">Let's make something <span className="footer-span">Amazing</span>!</h3>
            <div className="footer-button-container">
                <a className="footer-button" href="mailto:mimcmahon20@vt.edu?&subject=Let's get in touch&body=Dear Maguire McMahon" target="_blank" rel="noreferrer">Contact <ContactAnimation></ContactAnimation></a>
            </div>
        </footer>
    )
}