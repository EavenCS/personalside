import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ title, description, link, comingSoon }) {
  return (
    <div className="ProjectCard">
      <h2>{title}</h2>
      <p>{description}</p>
      {comingSoon ? (
        <span className="ComingSoon">🚀 Coming Soon</span>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" className="ProjectLink">View Project</a>
      )}
    </div>
  );
}
