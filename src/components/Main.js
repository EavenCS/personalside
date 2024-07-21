import React from 'react';
import avatar from '../Images/avatar.png';
import linkedinLogo from '../Images/linkedinLogo.png';
import githubLogo from '../Images/githubLogo.png';
import '../index.css';

export default function Main() {
  return (
    <div>
      <div className="MainContent">
        <img src={avatar} alt="Example" className="AvatarImage" />
        <h1>Hi, I am Eaven, a Fullstack Software Developer</h1>
        <div>
          <button className="Button">
            <img src={linkedinLogo} alt="LinkedIn" />
            LinkedIn
          </button>
          <button className="Button">
            <img src={githubLogo} alt="GitHub" />
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
