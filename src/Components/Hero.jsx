import "./Hero.css";
import Html from "/techImg/html.svg";
import Css from "/techImg/css3.svg";
import Js from "/techImg/javascript.svg";
import React from "/techImg/react.svg";
import Bootstrap from "/techImg/bootstrap.svg";
// import Mongodb from "/techImg/mongodb.svg";
import Git from "/techImg/Git.svg";
import NodeJs from "/techImg/node.svg";
import Redux from "/techImg/redux.png";
import Tailwind from "/techImg/tailwind.png";
import ServiceNow from "/techImg/SNOW.png";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { RiFileList3Fill } from "react-icons/ri";

function Hero() {
  const skillsIcons = [
    {
      img: ServiceNow,
      title: "ServiceNow",
    },
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: React,
      title: "React",
    },
    {
      img: Tailwind,
      title: "Tailwind",
    },
    {
      img: Redux,
      title: "Redux",
    },
    {
      img: Bootstrap,
      title: "Bootstrap CSS",
    },
    {
      img: NodeJs,
      title: "NodeJs",
    },
    // {
    //   img: Mongodb,
    //   title: "Mongodb",
    // },
    {
      img: Git,
      title: "Git & Github",
    },
  ];

  const downloadResume = () => {
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>ServiceNow Developer</h1>
                <img src="/waving.png" alt="waving_hand" />
                <p>
                  Hi, I'm Patan Abdulla Khan. A passionate ServiceNow Developer
                  based in Vijayawada, Andhra Pradesh, IN. 📍
                </p>
                <span>
                  <a
                    title="linkedin"
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/abdulla-p-6047602a6/"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    title="github"
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/abdullakhan8999"
                  >
                    <AiOutlineGithub />
                  </a>
                  <a
                    title="Resume"
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    onClick={() => downloadResume()}
                  >
                    <RiFileList3Fill />
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
