import React, { useEffect, useRef } from "react";
import Nav from "../components/Nav";
import TransitionToProject from "../components/TransitionToProject";
import "../styles/Project.css";
import "../styles/ProjectsList.css";
import "../fonts/fonts.css"
import ProjectMedia from "../components/ProjectMedia";
import ProjectTitle from "../components/ProjectTitle";
import ProjectDescription from "../components/ProjectDescription";
import ProjectFramework from "../components/ProjectFramework";
import ProjectLinks from "../components/ProjectLinks";
import BackButton from "../components/BackButton";
import jammmingscreenshot from "../media/jammmingscreenshot.png";

import gsap from "gsap";

export default function Jammming() {
  
  function generateProject() {
    let titleSection = (<div className="project-section">
    <ProjectTitle title={"Jammming"} />
    <ProjectDescription
      description={
        "Jammming is a React app that uses the Spotify API to search for songs, create a playlist, and save it to your Spotify account. I also had to learn how to use the Spotify API to authenticate the user's account. This initially was a project for my Codecademy course, but I evolved it to allow users to also add their most listened to songs to the playlist, and create multiple playlists in one instance."
      }
    />
  </div>);

    let frameworkSection = (<div className="project-section framework-section">
    <h2>Framework</h2>
    <ProjectFramework languages={["React"]} />
    <ProjectLinks className="outgoing-links" github={"https://github.com/mimcmahon20/Jammming-Spotify-Playlists"} live={"https://64b6e8a50d37e00008c83a2d--zippy-churros-8887e2.netlify.app/"}/>
  </div>);

    let descriptionSection = (<div className="project-section">
    <h2>Challenges</h2>
    <ProjectDescription
      description={
        "The biggest challenge I faced with this project was learning how to use the Spotify API. This was my first experience using an API, and had the most complications getting the user authentication to work."
      }
    />
  </div>);


    if(window.innerWidth < 1000) {
        return (
            <>
            {titleSection}
            {frameworkSection}
            {descriptionSection}
            </>
        )
    } else {
        return (
            <>
            {frameworkSection}
            {titleSection}
            {descriptionSection}
            </>
        )
    }
  }

  //we will just set the window y to the top of the page
  useEffect(() => {
    let thirtyVh = window.innerHeight * 0.3;
   window.scrollTo(0, thirtyVh);

  }, []);


  //GSAP CAROUSEL
  let carousel = useRef(null);
  let xPos = 0;
  let amountMedia = 2;
  let mediaWidth;
  if(window.innerWidth < 1000) {
    mediaWidth = 500;
  } else {
    mediaWidth = 1000;
  }

  window.addEventListener('resize', () => {
    if(window.innerWidth < 1000) {
      mediaWidth = 500;
    } else {
      mediaWidth = 1000;
    }
  })
  


  //gsap helper functions

  useEffect(() => {
    window.addEventListener('error', e => {
      console.log(e);
        if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
            const resizeObserverErrDiv = document.getElementById(
                'webpack-dev-server-client-overlay-div'
            );
            const resizeObserverErr = document.getElementById(
                'webpack-dev-server-client-overlay'
            );
            if (resizeObserverErr) {
                resizeObserverErr.setAttribute('style', 'display: none');
            }
            if (resizeObserverErrDiv) {
                resizeObserverErrDiv.setAttribute('style', 'display: none');
            }
        }
    });
}, []);

  const slideRight = () => {
    if(xPos < -mediaWidth * (amountMedia - 2)) {
      gsap.to(carousel, {
        x: 0,
        duration: 0.4,
        ease: "power4.out",
        });
      xPos = 0;
    } else {
      gsap.to(carousel, {
        x: "-=" + mediaWidth,
        duration: 0.4,
        ease: "power4.out",
      });
      xPos -= mediaWidth;
    }
  }

  const slideLeft = () => {
    if(xPos > -mediaWidth) {
      gsap.to(carousel, {
        x: -mediaWidth * (amountMedia - 1),
        duration: 0.4,
        ease: "power4.out",
        });
      xPos = -mediaWidth * (amountMedia - 1);
    } else {
      gsap.to(carousel, {
        x: "+=" + mediaWidth,
        duration: 0.4,
        ease: "power4.out",
      });
      xPos += mediaWidth;
    }
  }


  return (
    <div style={{backgroundColor: '#0a0a0a', position: 'relative'}}>
      <Nav />
        <BackButton />
      <TransitionToProject>
        {/* <JammmingListItem numHeadings={numHeadings} /> */}
        <div className="center-carousel">
          <div className="carousel-container">
            <div className="media-carousel" ref={(el) => (carousel = el)}>
              <ProjectMedia url={"/Videos/jammmingvideo.mp4"} type={"video"} />
              <ProjectMedia url={jammmingscreenshot} type={"image"} />
            </div>
            <div className="carousel-buttons">
              <button className="left-carousel carousel-button" onClick={slideLeft}></button>
              <button className="right-carousel carousel-button" onClick={slideRight}></button>
            </div>
          </div>
        </div>
        <div className="project-layout">
          {generateProject()}
        </div>
      </TransitionToProject>
    </div>
  );
}
