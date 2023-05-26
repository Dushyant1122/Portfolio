import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/ME.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <a href="/#">1 year</a>
            </article>
            <a href="https://dushyant1122.github.io/advance-project-list/">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5 style={{color : "white"}}>Projects</h5>
                <a href="https://dushyant1122.github.io/advance-project-list/">
                  20+ Completed Projects
                </a>
              </article>
            </a>
          </div>
          <p>
            Hello, I'm Dushyant Jangid, a Full Stack Developer. I completed my
            Full Stack Development training at Aeeron Academy from July 2022 to
            April 2023. During my training, I worked on a major project using
            HTML and CSS, and built 25 projects with JavaScript, including a
            to-do list, tic-tac-toe game, and an API project using the Unsplash
            API. Additionally, I have hands-on experience in building four
            projects with CRUD (Create, Read, Update, and Delete) operations in
            NodeJS.
          </p>
          <p>
            As a Full Stack Developer, I enjoy working with both the front-end
            and back-end of web development, and I'm always eager to learn new
            technologies and techniques. I believe in writing clean, efficient,
            and maintainable code to build scalable and robust web applications.
          </p>
          <p>
            In my free time, I enjoy exploring new programming languages and
            frameworks, and contributing to open-source projects. I also like to
            read tech blogs and attend coding events to keep myself updated with
            the latest industry trends.
          </p>
          <p>
            If you have any questions or would like to discuss a potential
            project, please feel free to contact me. I'm always happy to
            collaborate and create innovative solutions to meet your business
            needs.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro