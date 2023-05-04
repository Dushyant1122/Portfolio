import React from 'react';
import IMG1 from '../../assets/KOPPEE.png';
import IMG2 from '../../assets/maths.jpg';
import IMG3 from '../../assets/Quote.jpg';
import IMG4 from '../../assets/Songs.jpg';
import IMG5 from '../../assets/Slider.jpg';
import IMG6 from '../../assets/ttt.jpg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "KOPPEE",
      img: IMG1,
      description:
        "KOPPEE is a coffee shop website that provides a user-friendly platform for customers to browse their menu, place orders, and reserve tables online, making the coffee shop experience more convenient and accessible.",
      technologies: "HTML | CSS ",
      link: "https://dushyant1122.github.io/KOPPEEe/",
      github: "https://github.com/Dushyant1122/KOPPEEe",
    },
    {
      id: 2,
      title: "Songs App",
      img: IMG4,
      description:
        "A songs app is a software application that allows users to access and stream a collection of music tracks from various genres, artists, and albums, discover new music, and customize their listening experience based on their preferences.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://dushyant1122.github.io/songs-app/",
      github: "https://github.com/Dushyant1122/songs-app",
    },
    {
      id: 3,
      title: "Maths App",
      img: IMG2,
      description:
        "A maths app is a software application designed to help childrens learn and improve their mathematical skills through interactive  quizzes.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://dushyant1122.github.io/maths-for-kids/",
      github: "https://github.com/Dushyant1122/maths-for-kids",
    },
    {
      id: 4,
      title: "Random Quote",
      img: IMG3,
      description:
        "A random quote generator is a program or tool that generates a random quote or saying from a database of quotes, which can be used for various purposes such as inspiration, motivation, or entertainment.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://dushyant1122.github.io/Quote/",
      github: "https://github.com/Dushyant1122/Quote",
    },
    {
      id: 5,
      title: "Image Slider",
      img: IMG5,
      description:
        "An image slider is a graphical user interface element that displays a series of images in a slideshow format, often used on websites and applications to showcase visual content.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://dushyant1122.github.io/slider/",
      github: "https://github.com/Dushyant1122/slider",
    },
    {
      id: 6,
      title: "Tic-Tac-Toe Game",
      img: IMG6,
      description:
        "Tic Tac Toe is a classic game where two players take turns marking X's and O's in a 3x3 grid, with the objective of getting three in a row either horizontally, vertically, or diagonally.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://dushyant1122.github.io/tic-tac-toe/",
      github: "https://github.com/Dushyant1122/tic-tac-toe",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
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

export default Portfolio;
