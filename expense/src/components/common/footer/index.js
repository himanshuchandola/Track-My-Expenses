import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h4>
       Made  by{" "}
        <a
          href="https://github.com/himanshuchandola"
          className="author-name"
          target="_blank"
          rel="noreferrer"
        >
          Himanshu Chandola
        </a>{" "}
        as{" "}
          MCA 4th Sem Project
      </h4>
    </div>
  );
};

export default Footer;
