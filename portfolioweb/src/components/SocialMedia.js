import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
    
          <a href="https://github.com/enrriquep3" target="_blank" rel="noopener noreferrer"  className="gitHub social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/enrrique-pimentel-3a3686174/" target="_blank" rel="noopener noreferrer"
        className="linkedIn social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCAk1fhSTBUxwHIT9gMpDbhQ" target="_blank" rel="noopener noreferrer"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      
    </div>
  );
}
