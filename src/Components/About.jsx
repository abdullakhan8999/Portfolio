import AboutImg from "../assets/img/about-img.webp";
import RoundedText from "/techImg/frontend-cricle.svg";
import WorkingEmoji from "../assets/img/working-emoji.png";
import "./About.css";
function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated Front-end Developer <br /> based in Vijayawada,
                Andhra Pradesh.
              </h4>
              <p>
                As a passionate Front-End Developer, I possess an impressive
                arsenal of skills in HTML, CSS, JavaScript, React, Bootstrap,
                Mongodb and NodeJs. I excel in designing and maintaining
                responsive websites that offer a smooth user experience. My
                expertise lies in crafting dynamic, engaging interfaces through
                writing clean and optimized code and utilizing cutting-edge
                development tools and techniques. I am also a team player who
                thrives in collaborating with cross-functional teams to produce
                outstanding web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
