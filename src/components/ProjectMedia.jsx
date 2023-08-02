import React from "react";
import "../styles/ProjectMedia.css";

export default function ProjectMedia(props) {
  const { url, type } = props;

  function generateMedia() {
    if (type === "video") {
      return (
        <video className="project-video" autoPlay muted controls loop>
          <source src={url} type="video/mp4" className={type} />
        </video>
      );
    } else if(type === "image") {
      return (
        <img src={url} alt="Project media" className={type} />
      )
    }
  }

  return <div className="project-media">{generateMedia()}</div>;
}
