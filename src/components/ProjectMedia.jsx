import React from "react";
import "../styles/ProjectMedia.css";

export default function ProjectMedia(props) {
  const { url, type } = props;

  return (
    <div className="project-media">
      <video className="project-video" autoPlay muted controls loop>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
}
