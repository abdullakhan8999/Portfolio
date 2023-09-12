import MaNaCaseMaster from "../assets/ProjectsImg/mana-case-master.jpg";
import Quran from "../assets/ProjectsImg/Quran.jpg";
import Ecommerce from "../assets/ProjectsImg/ecom.png";
import ToDoApp from "../assets/ProjectsImg/ToDoApp.jpg";
import ProBox from "./ProBox.jsx";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "MaNa Ecommerce",
      img: Ecommerce,
      description:
        "Built an e-commerce app with MERN stack, leveraging MongoDB for data storage. Implemented robust backend with Node.js and Express for authentication, product management, cart, and orders. Created dynamic and responsive frontend with React, showcasing full-stack proficiency for a seamless shopping experience.",
      tech: ["MERN STACK", "REDUX", "Tailwind"],
      code: "https://github.com/abdullakhan8999/MERN-STACK-ECOMMERCE-PROJECT",
      demo: "https://master--unrivaled-granita-450d81.netlify.app/",
      scrollY: "-60%",
      icon: "🛒",
      cName: "reversed-proj",
    },
    {
      title: "Al Quran Web app",
      img: Quran,
      description:
        "Al Quran website with convenient access, English translation, and explanation. Users can freely browse diverse Surahs without an account. It's responsive, offers dark mode.",
      tech: ["React", "BOOTSTRAP"],
      code: "https://github.com/abdullakhan8999/Al_Quran.git",
      demo: "https://649b459540807c0008ffe91b--friendly-tulumba-8fe712.netlify.app/",
      scrollY: "-10%",
      icon: "📗",
      cName: "reversed-proj",
    },
    {
      title: "MaNa Case Master",
      img: MaNaCaseMaster,
      description:
        "MaNaCaseMaster website, a text conversion tool that allows users to effortlessly convert text between various cases. The tool features an intuitive and visually appealing interface, designed to enhance user experience.",
      tech: ["React", "BOOTSTRAP"],
      code: "https://github.com/abdullakhan8999/TEXT-EDITOR",
      demo: "https://mana-case-master.netlify.app/",
      scrollY: "-5%",
      icon: "✏️",
      cName: "reversed-proj",
    },
    {
      title: "MaNaTodo Web app",
      img: ToDoApp,
      description:
        "MaNaTodo is a responsive to-do app that offers efficient task management. Users can add, edit, complete, and delete tasks, while data is stored locally for persistence. Built with HTML, CSS, JavaScript, Bootstrap, React.js, and React-Toastify, MaNaTodo showcases a user-friendly interface and intuitive design.",
      tech: ["React", "BOOTSTRAP", " React-Toastify"],
      code: "https://github.com/abdullakhan8999/MaNaTodo-App.git",
      demo: "https://master--grand-paprenjak-97212b.netlify.app/",
      scrollY: "-10%",
      icon: "📝",
      cName: "reversed-proj",
    },
  ];
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              {projects.map((project) => (
                <ProBox
                  title={project.title}
                  img={project.img}
                  description={project.description}
                  tech={project.tech}
                  code={project.code}
                  demo={project.demo}
                  scrollY={project.scrollY}
                  icon={project.icon}
                  key={project.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
