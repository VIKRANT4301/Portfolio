import React from 'react';
import '../App.css'

const skills = [
  'React & Redux',
  'Node.js & Express',
  'MongoDB',
  'REST APIs',
  'JWT & Authentication',
  'Responsive Design',
  'Git & GitHub',
];

const SkillItem = ({ skill }) => (
  <li className="skill-item">🔹 {skill}</li>
);

const About = () => (
  <section className="about-section">
    <div className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I’m a passionate full-stack developer focused on building scalable,
          performance based  web applications using the MERN stack. I love learning new
          tools and solving complex problems through code.
        </p>
        <p>
          With hands-on experience in both frontend and backend, I bridge the gap
          between design and functionality.
        </p>
      </div>
      <div className="about-skills">
        <h3>My Core Skills</h3>
        <ul className="skills-list">
          {skills.map((skill, idx) => (
            <SkillItem key={idx} skill={skill} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
