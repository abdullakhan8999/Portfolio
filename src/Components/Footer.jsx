import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc__socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/stefan-topalovic-dev/"
              >
                <AiFillLinkedin />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/stefvndev"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
