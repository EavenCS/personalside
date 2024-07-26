import React from 'react';
import avatar from '../Images/avatar.png';
import linkedinLogo from '../Images/linkedinLogo.png';
import githubLogo from '../Images/githubLogo.png';
import Card from './Card';
import ProjectCard from './ProjectCard';
import '../index.css';
import Footer from './Footer';

export default function Main() {
  const projects = [
    {
      title: '🤫 Pssst',
      description: 'Something awesome is coming soon!',
      link: '',
      comingSoon: true
    },
    // Weitere Projekte hier hinzufügen
  ];

  return (
    <>
      <Card>
        <div className="MainContent">
          <img src={avatar} alt="Example" className="AvatarImage" />
          <h1 className='text'>Hi, I am Eaven, a Fullstack Software Developer</h1>
          <div>
            <a href="https://www.linkedin.com/in/eavencs" target="_blank" rel="noopener noreferrer" className="Button">
              <img src={linkedinLogo} alt="LinkedIn" className="Icon" />
              LinkedIn
            </a>
            <a href="https://github.com/EavenCS" target="_blank" rel="noopener noreferrer" className="Button">
              <img src={githubLogo} alt="GitHub" className="Icon" />
              GitHub
            </a>
          </div>
          <div className="Projects">
            <h1>Projects</h1>
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title} 
                description={project.description} 
                link={project.link} 
                comingSoon={project.comingSoon} 
              />
            ))}
          </div>
        </div>
      </Card>
      <Footer />
    </>
  );
}
