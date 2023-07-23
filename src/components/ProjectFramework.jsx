import React from "react";

export default function ProjectFramework(props) {
  const { languages } = props;

  function languageDecoder(languages) {
    let lan = [];
    languages.forEach((language, index) => {
      lan.push(
        <li key={index}>
          <h3 key={index}>{language}</h3>
        </li>
      );
    });
    return lan;
  }
  return (
    <div className="project-framework">
      <ul>{languageDecoder(languages)}</ul>
    </div>
  );
}
