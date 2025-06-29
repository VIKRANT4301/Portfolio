import React, { useState,useEffect } from 'react';
import './App.css';
import profileImage from './assets/Image3.jpg';
import { FaDownload,FaEye } from "react-icons/fa";

import {
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaStar,
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaGitAlt, FaJava, FaPython, FaBootstrap,FaAngular,FaDatabase,FaLock
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTailwindcss, SiGnubash
} from 'react-icons/si';

const certifications = [
   {
    title: "NPTEL",
    issuer: "SWAYAM",
    date: "December 2024",
    file: "/certificates/NPTEL.png",
    type: "image",
  },
   {
    title: "MERN Stack Application Development",
    issuer: "EDUNET & TECHSAKSHAM",
    date: "March 2025",
    file: "/certificates/VIKRANT PRASHANT CHAKOLE_MERN Stack Application Development.png",
    type: "image",
  },
   {
    title: " Create and manage canvas apps with Power Apps",
    issuer: "Microsoft",
    date: "June 2025",
    file: "/certificates/Microsoft Applied Skills.png",
    type: "image",
  },
  {
    title: "Data science and machine learning Solution ",
    issuer: "Microsoft",
    date: "December 2024",
    file: "/certificates/Microsoft Applied Skills[1].png",
    type: "image",
  },
  {
    title: "Microsoft Copilot for Productivity",
    issuer: "Microsoft and LinkedIn",
    date: "October 2024",
    file: "/certificates/Productvity.jpg",
    type: "image",
  },
    {
    title:"Career Essentials in Software Development",
    issuer: "Microsoft and LinkedIn",
    date: "October 2024",
    file: "/certificates/software development.jpg",
    type: "image",
  },
 
  {
    title: "Fundamentals in Cybersecurity",
    issuer: "FORTINET",
    date: "October 2023",
    file: "/certificates/Fortinet_Certified_Fundamentals_in_Cybersecurity.png",
    type: "image",
  },
 
  {
    title: "Hacker's Heist Team Member",
    issuer: "SVPCET",
    date: "November 2023",
    file: "/certificates/hackerheist.jpg",
    type: "image",
  },
  {
    title: "Associates in Cyber Security",
    issuer: "FORTINET",
    date: "Oct 2023-Oct 2025",
    file: "/certificates/Fortinet_Certified_Associate_in_Cybersecurity.png",
    type: "image",
  },
  
];



function App() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

 useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCert]);

  return (

    <>

      <header className="header">
        <div className="container">
              <div className="logo"><span>V</span>ikrant.</div>
      <nav className="navbar">
       <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`navlist ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#timeline-section">Journey</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
   </div>
  </header>


      <main>
        <section className="home" id="home">

  <video className="bg-video" autoPlay loop muted playsInline>
    <source src="../public/certificates/network.mp4" type="video/mp4" />
  </video>

          <div className="home-content">
            <div className="content-right">
              <h1><strong>Hi I'M</strong></h1>
              <h2><strong>VIKRANT</strong></h2>
              <p className="roles"> Full Stack Developer | Java Developer | React.js | UI&UX Designer</p>

 <div className="social-icons">
  <a href="https://github.com/VIKRANT4301" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://www.linkedin.com/in/vikrant-chakole-a063a0269/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://x.com/VChakole2032" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>
  <a href="https://www.instagram.com/vikrant.32_" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
</div> 
        <div className="btn-group">
                <a href="#contact" className="btn">Contact</a>
              </div>
            </div>
          </div>
        </section>


   <section id="about" className="about-section">
              <h2 className="about-title">About Me</h2>
  <div className="container">
    <div className="about-content">
      <div className="about-text">
        <h2>
          I’m <span>Vikrant Chakole</span>, a Full Stack Developer focused on Creative and Efficient web apps.
        </h2>
        <p className="text">
          I'm currently pursuing my B.Tech in <strong>Computer Science Engineering</strong> with Specialization in <strong>Cyber Security</strong> at St. Vincent Pallotti College of Engineering and Technology, Nagpur. I’m skilled in both frontend and backend development, transforming ideas into functional digital experiences using modern technologies.
        </p>
        <p className="text">
          I’m passionate about <strong>JavaScript, React, Node.js, MongoDB</strong>, and bringing smooth, responsive UIs to life with animations and performance in mind. Outside of code, I love exploring new places, tech, and new ideas.
        </p>
      </div>
      <div className="about-image">
        <img src={profileImage} alt="Vikrant Chakole" className="profile-img" />
      </div>
    </div>
  </div>

  <div className="cv-section">
    <a href="../public/certificates/Vikrant Chakole .pdf" className="btn-down" download>
      <FaDownload className="icon" />
      Download CV
    </a>
    <a href="../public/certificates/Vikrant Chakole .pdf" className="btn-down" target="_blank" rel="noopener noreferrer">
      <FaEye className="icon" />
      Preview CV
    </a>
  </div>
</section>



        <section className="timeline-section" id="timeline-section">
          <h2 className="timeline-title">My Journey</h2>
          <div className="timeline-container">
            <div className="timeline-line" />
            <div className="timeline-item left">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Internship at @TechSaksham</h3>
                <p><strong>Aug 2024 – Nov 2024</strong><br />Built full-stack apps using MERN, integrated APIs and deployed live projects.</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>B.Tech – CSE (Cyber Security)</h3>
                <p><strong>St. Vincent Pallotti College, Nagpur (2022 – 2026)</strong><br />Specialized in full-stack development, AI, and secure computing systems.</p>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>High School – CS</h3>
                <p><strong>Major Hemant Jakate Institute of Science (2022)</strong><br />Built projects in Python, HTML/CSS, and participated in coding competitions.</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Schooling</h3>
                <p><strong>St. Paul High School (2020)</strong><br />Developed strong fundamentals in math, logic, and teamwork.</p>
              </div>
            </div>
          </div>
        </section>


    <section id="skills" className="skills-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {[
                { icon: <FaHtml5 />, label: "HTML" },
                { icon: <FaCss3Alt />, label: "CSS" },
                { icon: <FaJsSquare />, label: "JavaScript" },
                { icon: <FaReact />, label: "React" },
                { icon: <FaAngular />, label: "Angular" },
                { icon: <SiTailwindcss />, label: "Tailwind CSS" },
                { icon: <FaNodeJs />, label: "Node.js" },
                { icon: <SiExpress />, label: "Express" },
                { icon: <SiMongodb />, label: "MongoDB" },
                { icon: <FaJava />, label: "Java" },
                { icon: <FaPython />, label: "Python" },
                { icon: <FaBootstrap />, label: "Bootstrap" },
                { icon: <FaGitAlt />, label: "Git" },
                { icon: <FaGithub />, label: "GitHub" },
                { icon: <SiGnubash />, label: "DSA " },
              ].map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon">{skill.icon}</div>
                  <p>{skill.label}</p>
                </div>
              ))}
            </div>
        </section>


<section id="projects" className="projects-section">
    <h2 className="section-title">Projects</h2>
    <div className="projects-grid">
      {[
         {
          title: "Income Prediction Model",
          description: "Income Predictor is a Flask-based web app that uses a pre-trained Random model to predict if an individual's income .",
          tech: ["React", "React Icons","Django, Flask, Scikit-learn, Pandas"],
          link: "https://github.com/VIKRANT4301/Income_predictor",
          screenshot: "../public/certificates/Project.png",

        },
         {
          title: "Gemini Clone",
          description: "A responsive Gemini Clone built with React and Vite, delivering real-time AI-powered chat interactions with a sleek, modern UI.",
          tech: [ "React", "Gemini API"],
          link: "https://github.com/VIKRANT4301/Gemini_Clone",
          screenshot: "../public/certificates/Project3.png",
         },
         {
          title: "Population Find Web",
          description: "A web-based tool that fetches and displays real-time population data by country or region using public APIs, built with HTML, CSS, JavaScript, and RESTful integration.",
          tech: ["React", "CSS", "React Icons","API"],
          link: "https://github.com/VIKRANT4301/Population_Find",
          screenshot: "../public/certificates/Project2.png",

        },
        {
          title: "Medicine Management System",
          description: "A full-stack React and Vite application for efficiently managing medicines, dealers, and customers with real-time CRUD operations.",
          tech: ["MongoDB", "Express", "React", "Node.js"],
          link: "https://github.com/VIKRANT4301/Medicine-Store",
          screenshot: "../public/certificates/medicine.png",

        },

        {
          title: "Portfolio Website",
          description: "A responsive and animated React portfolio showcasing skills, projects, certifications, and more.",
          tech: ["React", "CSS", "React Icons"],
          link: "https://vikrant4301.github.io/My-Portfolio/",
          screenshot: "../public/certificates/port.png",

        },
        {
          title: "Stock Prediction App",
          description: "A web app using React and Django with ML model (Jupyter notebook) to predict stock trends.",
          tech: ["React", "Django", "Python"],
          link: "https://github.com/VIKRANT4301/Stock-Prediction",
          screenshot: "../public/certificates/stock.jpeg",

        },
      ].map((project, index) => (
        <div className="project-card" key={index}>

          <img
            src={project.screenshot}
            alt={project.title}
            className="project-screenshot"
          />


          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
          </div>
        </div>
      ))}
    </div>
</section>

        <section id="certifications" className="certifications-section">
            <h2 className="section-title">Certifications</h2>
            <div className="certification-grid">
              {certifications.map((cert, index) => (
                <div
                  className="certification-card"
                  key={index}
                  onClick={() => setSelectedCert(cert)}
                >
                  <h4><strong>{cert.title}</strong></h4>
                  <p><strong>Issuer:</strong> {cert.issuer}<br /><strong>Date:</strong> {cert.date}</p>
                  <button className="preview-btn">Preview</button>
                </div>
              ))}
            </div>
{selectedCert && (
  <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
    <div className="modal-content modern" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close-top" onClick={() => setSelectedCert(null)}>
        ✖
      </button>

      <div className="modal-cert-grid">
        <div className="modal-cert-info">
          <h3><strong>{selectedCert.title}</strong></h3>
          <p>
            <strong>Issuer:</strong> {selectedCert.issuer}<br />
            <strong>Date:</strong> {selectedCert.date}
          </p>
        </div>

        {/* Certificate Preview */}
        <div className="modal-cert-preview">
          {selectedCert.file ? (
            selectedCert.type === "image" ? (
              <img src={selectedCert.file} alt={selectedCert.title} className="cert-preview-img" />
            ) : (
              <iframe
                src={selectedCert.file}
                title={selectedCert.title}
                className="cert-preview-pdf"
              ></iframe>
            )
          ) : (
            <p style={{ color: 'red' }}>Certificate preview not available.</p>
          )}
        </div>
      </div>
    </div>
  </div>
)}
  </section>



<section id="services" className="services-section">
    <h2 className="section-title">My Services</h2>
    <div className="services-grid">
      {[
        {
          title: "Frontend Development",
          icon: <FaReact />,
          description:
            "Build scalable and modern web apps using the MERN stack (MongoDB, Express, React, Node.js) with responsive UIs and REST APIs.",
        },
        {
          title: "Backend Development",
          icon: <span><FaNodeJs /> <FaJava /></span>,
          description:
            "Design and implement fast, scalable backend systems using Node.js (Express) and Java (Spring Boot) . Build secure RESTful APIs, handle database operations, and integrate authentication systems for modern web applications.",
        },
        {
          title: "UI/UX Design",
          icon: <FaCss3Alt />,
          description:
            "Design interactive, pixel-perfect user interfaces with Figma, CSS, and Tailwind for seamless user experiences.",
        },
        {
          title: "Authentication & Authorization Systems",
          icon: <FaLock />,
          description:
            "Implement secure login systems using JWT, OAuth2, or session-based auth for both frontend and backend systems.",
        },
        {
          title: "API Integration & Deployment",
          icon: <FaNodeJs />,
          description:
            "Connect third-party APIs, build custom endpoints, and deploy apps on platforms like Vercel, Render, or GitHub Pages.",
        },
        {
          title: "Database Design & Optimization",
          icon: <FaDatabase/>,
          description:
            "Design efficient database schemas, set up indexing, and optimize queries for scalable, high-performance applications using MongoDB or SQL.",
        },
      ].map((service, index) => (
        <div className="service-card" key={index}>
          <div className="service-icon">{service.icon}</div>
          <h3><strong>{service.title}</strong></h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
</section>


  <section id="contact" className="contact-showcase">
      <div className="contact-inner">
        <h2 className="section-title">Get Consultant</h2>
        <p className="contact-text">
          Have a project or idea? Let's talk! Get expert guidance on web apps, UI/UX, and deployment.
        </p>
        <a href="mailto:vikrantchakole36@gmail.com" className="contact-email">
          vikrantchakole36@gmail.com
        </a>

        <div className="contact-github">
          <a
            href="https://github.com/VIKRANT4301"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="github-icon" />
            <span>Star on GitHub</span>
            <FaStar className="star-icon" />
            <span>10</span>
          </a>
        </div>
      </div>
    </section>


      </main>

      <footer>
        <button><a href="#home">Back to Top</a></button>
      </footer>
    </>
  );
}

export default App;
