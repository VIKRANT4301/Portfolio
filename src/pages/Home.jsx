import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/Image.jpg'; // Ensure this path is correct
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../style/Home.css'
const Home = () => {
  return (
    <section className="home-container">
      <div className="intro-left">
        <h1>Hi, I'm <span className="highlight">Vikrant</span></h1>
        <h2>Full-Stack Developer | Creative Technologist | Problem Solver</h2>
        <p>
          I specialize in building fast, scalable web applications using MongoDB,
          Express, React, and Node.js. Passionate about clean code and great UX.
        </p>

        <div className="cta-buttons">
          <Link to="/projects" className="btn">View My Work</Link>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>

      <div className="intro-right">
        <img src={profilePic} alt="Vikrant" className="profile-photo" />
      </div>
    </section>
  );
};

export default Home;
