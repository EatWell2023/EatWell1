import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        "User Friendly with Fast Delivery food items at your own place"

        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          {/* <img src={ava01} alt="avatar" className=" rounded" /> */}
          <h6>Andronicus Lepcha</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "Great Idea and service in digital world for food ordering."

        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          {/* <img src={ava02} alt="avatar" className=" rounded" /> */}
          <h6>Rajeev Puri</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Awesome platform which replaced traditional system for getting food."

        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          {/* <img src={ava03} alt="avatar" className=" rounded" /> */}
          <h6>Aman Bhutia</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
