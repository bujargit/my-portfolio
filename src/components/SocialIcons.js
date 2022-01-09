import React from "react";
import "./SocialIcons.css";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { socialprofiles } from "../data/content";

export default function Socialicons(params) {
  return (
    <div className="stick_follow_icon">
      <ul>        
        <li>
          <a href={socialprofiles.facebook}>
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href={socialprofiles.linkedin}>
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p>Follow Me</p>
    </div>
  );
}
