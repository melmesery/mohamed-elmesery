import React from "react";
import project_1 from "../../images/1.png";
import project_2 from "../../images/2.png";
import project_3 from "../../images/3.png";
import project_4 from "../../images/4.png";
import project_5 from "../../images/5.png";
import project_6 from "../../images/6.png";
import project_7 from "../../images/7.png";
import project_8 from "../../images/8.png";
import Link from "next/link";
import "../../styles/Portfolio.css";
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      name: "UpVote App",
      des: "Social photo app interaction",
      tech: "Node.js | Express.js | React.js",
      img: project_1,
      github: "https://github.com/melmesery/UP_VOTE_API",
      live: "https://melmesery.github.io/MERN_UP_VOTE",
    },
    {
      name: "CRUD System",
      des: "CRUD system to manage and manipulate data in a structured manner",
      tech: "Node.js | Express.js | React.js",
      img: project_2,
      github: "https://github.com/melmesery/CRUD_API",
      live: "https://melmesery.github.io/MERN_CRUD/",
    },
    {
      name: "Chat App",
      des: "Real time chat application",
      tech: "Node.js | Socket.io | React.js ",
      img: project_3,
      github: "https://github.com/melmesery/Chat",
      live: "https://chat-lac-tau.vercel.app/login",
    },
    {
      name: "Forecast App",
      des: "Check daily weather condition by this simple app",
      tech: "React.js | API",
      img: project_4,
      github: "https://github.com/melmesery/Forecast",
      live: "https://melmesery.github.io/Forecast/",
    },
    {
      name: "Watch Plus",
      des: "Streaming platform to watch movies & tv shows.",
      tech: "React.js | API",
      img: project_5,
      github: "https://github.com/melmesery/Cinema",
      live: "https://melmesery.github.io/Cinema/",
    },
    {
      name: "Car Agency",
      des: "Template for cars renting & selling agency",
      tech: "HTML | CSS | Bootstrap",
      img: project_6,
      github: "https://github.com/melmesery/Cars-Dealership",
      live: "https://github.com/melmesery/Cars-Dealership",
    },
    {
      name: "Renting",
      des: "Rent houses any where in the world",
      tech: "HTML | CSS | Bootstrap",
      img: project_7,
      github: "https://github.com/melmesery/Renting",
      live: "https://melmesery.github.io/Renting/",
    },
    {
      name: "Sunnyside",
      des: "Simple bootstrap design",
      tech: "Bootstrap",
      img: project_8,
      github: "https://github.com/melmesery/Sunnyside",
      live: "https://melmesery.github.io/Sunnyside",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <Link href="/" className="home">
        HOME
      </Link>
      <div className="projects">
        {projects.map((project) => {
          return (
            <div className="project-card" key={project.name}>
              <div className="project-card-top">
                <p className="project-name">{project.name}</p>
                <mark className="project-des">{project.des}</mark>
                <p className="project-tech">{project.tech}</p>
                <a
                  href={project.github}
                  target="_blank"
                  className="project-view"
                >
                  Check on Github
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="project-view"
                >
                  Or go live
                </a>
              </div>
              <div className="project-card-bottom">
                <Image src={project.img} className="project-img" alt="" />
              </div>
            </div>
          );
        })}</div>
    </section>
  );
};

export default Portfolio;
