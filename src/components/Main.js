import React from 'react';
import avatar from '../Images/avatar.png';
import linkedinLogo from '../Images/linkedinLogo.png';
import githubLogo from '../Images/githubLogo.png';
import Card from './Card';
import '../index.css';

export default function Main() {
  return (
    <Card>
      <div className="MainContent">
        <img src={avatar} alt="Example" className="AvatarImage" />
        <h1 className='text'>Hi, I am Eaven, a Fullstack Software Developer</h1>
        <div>
          <a href="https://www.linkedin.com/in/eaven/" target="_blank" rel="noopener noreferrer" className="Button">
            <img src={linkedinLogo} alt="LinkedIn" className="Icon" />
            LinkedIn
          </a>
          <a href="https://github.com/EavenCS" target="_blank" rel="noopener noreferrer" className="Button">
            <img src={githubLogo} alt="GitHub" className="Icon" />
            GitHub
          </a>
        </div>
      </div>
    </Card>
  );
}
