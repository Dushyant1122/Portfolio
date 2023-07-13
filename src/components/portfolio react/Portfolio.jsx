import React from "react";
import IMG1 from "../../assets/Burgerbuilder.jpg";
import IMG2 from "../../assets/maths.jpg";
import IMG4 from "../../assets/EcommerceApp.jpg";

import "./portfolio.css";

const PortfolioReact = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Burger Builder",
      img: IMG1,
      description: `The app Burger Builder would have a simple interface with a list of ingredients on the left and a burger on the right. The user would be able to select ingredients from the list and add them to the burger. The burger would be updated in real time as the user adds ingredients.

The app would use class components to manage the state of the burger. The state would track the ingredients that have been added to the burger, as well as the price of the burger.`,
      technologies: "React JS",
      link: "https://burger-builder-master.vercel.app/",
      github: "https://github.com/Dushyant1122/BurgerBuilder-master",
    },
    {
      id: 2,
      title: "Ecommerce App",
      img: IMG4,
      description: `The e-commerce site is a single-page application (SPA) that is built using React JS. The frontend of the application is responsible for displaying the product catalog, allowing users to add products to their cart, and processing payments. The backend of the application is built using Node JS and Express. The backend is responsible for storing product data, processing payments, and sending email notifications to customers. 
        The payment gateway for the e- commerce site is Brain-Tree. Brain-Tree is a secure and reliable payment processing platform that allows businesses to accept payments online.Brain-Tree offers a variety of features, including:
          Credit card payments
          Debit card payments
          PayPal payments`,
      technologies: "React JS | Node JS | Rest Api",
      link: "https://ill-rose-chick-gown.cyclic.app/",
      github: "https://github.com/Dushyant1122/Ecommerce-2023",
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
  ];

  return (
    <section id="portfolio">
      <h2>REACT JS</h2>
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
                rel="noopener noreferrer"
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

export default PortfolioReact;
