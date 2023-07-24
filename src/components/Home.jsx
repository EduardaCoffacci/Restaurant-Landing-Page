import React from "react";
import { Navbar } from "./navbar";
import bannerbackground from "../assets/home-banner-background.png";
import bannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={bannerbackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Sua comida favorita entregue quente e fresca
          </h1>
          <p className="primary-text">
            Chefs saudáveis ​​​​fazem todo o trabalho de preparação, como picar e marinar para que
            você possa cozinhar uma comida fresca.
          </p>
          <button className="secondary-button">
            Peça agora <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
