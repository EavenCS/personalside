import React from 'react';
import avatar from '../Images/avatar.png';
import linkedinLogo from '../Images/linkedinLogo.png';
import githubLogo from '../Images/githubLogo.png';
import Card from './Card'; // Importpfad angepasst
import '../index.css';

export default function Main() {
  return (
    <Card>
      <div className="MainContent">
        <img src={avatar} alt="Example" className="AvatarImage" />
        <h1 className='text'>Hi, I am Eaven, a Fullstack Software Developer</h1>
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
    </Card>
  );
}
