import React from "react";
import IMG1 from "../../assets/FileSystem.jpg";
import IMG2 from "../../assets/userManage.jpg";
import IMG3 from "../../assets/Mongoose.jpg";

import "./portfolio.css";

const PortfolioNode = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Local Storage",
      img: IMG1,
      description: `This ecommerce basic app is a simple web app that allows users to browse a catalog of products, add products to their cart, and checkout. The app is built using Node JS and localStorage.
        Features
      The ecommerce basic app has the following features:
      Product catalog: The app displays a catalog of products, including the product name, price, and description.
Cart: Users can add products to their cart by clicking the "Add to Cart" button.
Checkout: Users can checkout by entering their shipping and payment information.
Local storage: The app uses localStorage to save the user's cart data. This means that the user's cart will be saved even if they close the browser.`,
      technologies: "Node JS ",
      link: "https://node-6eir.onrender.com",
      github: "https://github.com/Dushyant1122/NODE_File_System",
    },
    {
      id: 3,
      title: "Node Mongoose",
      img: IMG3,
      description: `This ecommerce app is a web app that allows users to browse a catalog of products, add products to their cart, checkout, make payments, and receive invoices. The app is built using Node JS, MongoDB, and Stripe.
The ecommerce app has the following features:
Product catalog: The app displays a catalog of products, including the product name, price, and description.
Cart: Users can add products to their cart by clicking the "Add to Cart" button.
Checkout: Users can checkout by entering their shipping and payment information.
Payments: The app uses Stripe to process payments.
Invoices: The app generates invoices for each order.
MongoDB: The app stores its data in MongoDB.`,
      technologies: "Node JS",
      link: "https://node-mongodb-l0y1.onrender.com",
      github: "https://github.com/Dushyant1122/Node-MongoDB",
    },
    {
      id: 2,
      title: "User Management",
      img: IMG2,
      description: `This User Management App is a web app that allows users to create, read, update, and delete users. The app is built using Node JS, Express JS, and MongoDB.
The User Management App has the following features:
Create users: Users can create new users by providing their name, email address, and password.
Read users: Users can view a list of all users, or they can view the details of a specific user.
Update users: Users can update the details of their own account, or they can update the details of another user.
Delete users: Users can delete their own account, or they can delete the account of another user.`,
      technologies: "Node JS | Rest Api",
      link: "https://node-user-management.onrender.com/",
      github:
        "https://github.com/Dushyant1122/CRUD_Application_Node-master/tree/main",
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
