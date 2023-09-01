import React from "react";
import "../styles/AboutContent.css";

export default function AboutContent() {
  return (
    <div className="about-content">
      <div className="about-container">
        <div className="skills-container">
            <div className="about-svg star-svg"></div>
          <h3 className="skills-header">Skills</h3>
          <div className="about-divider"></div>
          <div className="about-skills">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Router</li>
              <li>GSAP</li>
              <li>P5</li>
              <li>Java</li>
              <li>SQL</li>
              <li>C</li>
            </ul>
          </div>
        </div>
        <div className="education-container">
          <h3 className="education-header">Education</h3>
          <div className="about-divider"></div>
          <div className="about-svg pencil-svg"></div>
          <div className="about-education">
            <ul > <div className="mid-header">Virginia Tech</div>
                <li>Graduation: May 2025</li>  
                <li>GPA: 3.0 | Major: 3.65 | Minor: 3.3</li>  
              <li>Major: Industrial & Systems Engineering</li>
              <li>Minors: Computer Science & </li>
              <li>Human-Computer Interaction</li>
            </ul>
            <br/>
            <ul > <div className="mid-header">Codecademy</div>  
              <li>Frontend Engineering Career Course</li>
              <li>Learned:</li>
              <li style={{marginLeft: '20px'}}>Web development from HTML to React</li>
              <li style={{marginLeft: '20px'}}>Interview skills</li>
              <li style={{marginLeft: '20px'}}>Git</li>
            </ul>
          </div>
        </div>

        <div className="employeement-container">
          <h3 className="employeement-header">Employment</h3>
          <div className="about-svg work-svg"></div>

          <div className="about-divider"></div>
          <div className="about-employeement">
            <ul > <div className="mid-header">Rugged Organics</div>
                <li>Website Development Team Lead</li>  
                <li>Fall '22 - Fall '23</li>  
              <li>Oversaw website transition between companies,<br/>4 interns, website front & backend in Wordpress, <br/> and generated weekly & monthly goals & reports.</li>
              <li>Promoted from Web Dev Intern to Development Team Lead in January '23.</li>
              <li>Rate: Unpaid</li>
            </ul>
            <br/>
            <ul > <div className="mid-header">Scale A.I.</div>  
              <li>Code Analyser & Categorizer</li>
              <li>Summer '23</li>
              <li>Helped categorize and analyze code from several Large Language Models.</li>
              <li>Rate: $25 / hour</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
