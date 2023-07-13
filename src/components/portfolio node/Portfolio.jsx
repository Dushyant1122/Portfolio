import React from 'react';
import IMG1 from '../../assets/FileSystem.jpg';
import IMG2 from '../../assets/maths.jpg';
import IMG4 from '../../assets/Mongoose.jpg';


import './portfolio.css';

const PortfolioNode = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Local Storage",
      img: IMG1,
      description:
        "KOPPEE is a coffee shop website that provides a user-friendly platform for customers to browse their menu, place orders, and reserve tables online, making the coffee shop experience more convenient and accessible.",
      technologies: "HTML | CSS ",
      link: "https://node-6eir.onrender.com",
      github: "https://github.com/Dushyant1122/NODE_File_System",
    },
    {
      id: 2,
      title: "Node MongoDB",
      img: IMG4,
      description:
        "A songs app is a software application that allows users to access and stream a collection of music tracks from various genres, artists, and albums, discover new music, and customize their listening experience based on their preferences.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://ecommerce-3b08.onrender.com",
      github: "https://github.com/Dushyant1122/NODE_MongoDb",
    },
    {
      id: 3,
      title: "Node Mongoose",
      img: IMG2,
      description:
        "A maths app is a software application designed to help childrens learn and improve their mathematical skills through interactive  quizzes.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://node-mongodb-l0y1.onrender.com",
      github: "https://github.com/Dushyant1122/Node-MongoDB",
    },
  ];

  return (
    <section id="portfolio">
      <h2>NODE JS</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.technologies}</p>
              <p>{pro.description.substring(0, 250)}...</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PortfolioNode;
