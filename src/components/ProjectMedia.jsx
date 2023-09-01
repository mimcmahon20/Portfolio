import React from "react";
import "../styles/ProjectMedia.css";

export default function ProjectMedia(props) {
  const { url, type, thumbnail } = props;

  function generateMedia() {
    if(window.innerWidth < 600) {
      if (type === "video") {
        return (
          <video className="project-video" poster={thumbnail} muted controls loop>
            <source src={url} type="video/mp4" className={type} />
          </video>
        );
      } else if(type === "image") {
        return (
          <img src={url} alt="Project media" className={type} />
        )
      }
    }
    if (type === "video") {
      return (
        <video className="project-video" poster={thumbnail} muted controls loop>
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
