import React from "react";
import Logo from "../assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebook />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Compartilhar</span>
          <span>Carreira</span>
          <span>Depoimento</span>
          <span>Trabalho</span>
        </div>
        <div className="footer-section-columns">
          <span>+55 473333-7785 </span>
          <span>hello@food.com</span>
          <span>imprensa@food.com</span>
          <span>contato@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos & Condições</span>
          <span>Politica e Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
