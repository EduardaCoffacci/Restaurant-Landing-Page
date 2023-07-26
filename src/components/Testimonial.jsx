import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Depoimento</p>
        <h1 className="primary-heading h1-heading">Oque estão dizendo</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
          </div>
          <h2>
            John Doe
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
