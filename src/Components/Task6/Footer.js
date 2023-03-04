import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#FFF",

        bottom: "0px",
        width: "500px",
        textAlign: "center",
        margin: "auto",
        marginTop: "70px",
      }}
    >
      <a
        href="www.google.com"
        style={{ textDecoration: "none", color: "black" }}
      >
        <BsInstagram />
      </a>{" "}
      <a
        href="www.google.com"
        style={{ textDecoration: "none", color: "black" }}
      >
        <BsGithub />
      </a>{" "}
      <a
        href="www.google.com"
        style={{ textDecoration: "none", color: "black" }}
      >
        <BsTwitter />
      </a>{" "}
      <a
        href="www.google.com"
        style={{ textDecoration: "none", color: "black" }}
      >
        <BsLinkedin />
      </a>
      <p style={{ fontSize: "13px" }}>&copy;- 2022 AntonX</p>
    </div>
  );
}

export default Footer;
