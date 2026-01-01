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
                A dedicated ServiceNow Developer <br /> based in Vijayawada,
                Andhra Pradesh.
              </h4>
              <p>
                Skilled ServiceNow developer and full-stack web developer with
                expertise in Service Portal development, ITSM, ReactJS,
                AngularJS, and Bootstrap. Proficient in crafting responsive,
                user-centric interfaces using modern web technologies and
                creating Service Portal solutions. Strong problem-solver with
                excellent collaboration and communication skills, committed to
                delivering high-quality applications and driving digital
                transformation initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
