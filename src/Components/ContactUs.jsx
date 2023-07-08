import React from "react";
import { RiFileList3Fill } from "react-icons/ri";
import "./Contact.css";

function Contact() {
  const downloadResume = () => {
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__title">
            <p>contact</p>
            <h3>Don't be shy! Hit me up! 👇</h3>
          </div>
          <div className="contact__icons">
            <div className="contact__icon-box">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </span>
              <div className="contact__info">
                <h3>Phone</h3>
                <p>+91 8247707629</p>
              </div>
            </div>

            <div className="contact__icon-box">
              <span>
                <i className="fas fa-solid fa-envelope-open-text"></i>
              </span>
              <div className="contact__info">
                <h3>Mail</h3>
                <a href="mailto:abdullakhan8999@gmail.com">
                  abdullakhan8999@gmail.com
                </a>
              </div>
            </div>
            <div className="contact__icon-box">
              <span>
                <RiFileList3Fill />
              </span>
              <div className="contact__info">
                <h3>Resume</h3>
                <a onClick={() => downloadResume()}>pdf</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
