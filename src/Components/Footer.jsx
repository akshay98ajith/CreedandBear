import React from "react";
import mail from "../Assets/mail.svg";
import phone from "../Assets/phone.svg";
import linkedin from "../Assets/linkedin.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div>Akshay Ajith</div>
      <div className="d-flex">
        <a href="mailto:akshay98aji@gmail.com">
          <img src={mail} alt="" />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <a href="tel:+971567410549">
          <img src={phone} alt="" />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <a href="https://www.linkedin.com/in/akshay-ajith-webdeveloper">
          <img src={linkedin} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
