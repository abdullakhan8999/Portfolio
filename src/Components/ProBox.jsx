import { useState } from "react";
import { RiLiveFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";

function ProBox({
  title,
  img,
  description,
  tech,
  code,
  demo,
  scrollY,
  cName,
  icon,
}) {
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <div className={`pro pro__1 ${cName}`}>
        <div className="pro__img">
          <a target="_blank" href={demo} rel="noreferrer">
            <img
              src={img}
              alt="website"
              style={{
                transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                transition: "transform 5s ease-in-out",
              }}
              onMouseEnter={() => setScroll(true)}
              onMouseLeave={() => setScroll(false)}
            />
          </a>
        </div>
        <div className="pro__text">
          <h3>
            {title} {icon}
          </h3>
          <p>{description}</p>
          <div className="stack">
            {tech.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
            {/* {<p>{...tech}</p>} */}
          </div>
          <div className="links">
            {code && (
              <a target="_blank" href={code} rel="noreferrer">
                Code
                <BsGithub />
              </a>
            )}
            {demo && (
              <a target="_blank" href={demo} rel="noreferrer">
                Live Demo
                <RiLiveFill />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProBox;
