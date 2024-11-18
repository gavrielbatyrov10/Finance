import React from "react";
import "./Fullimg.less";
import Typewriter from "./Typewriter";
import Home from "./Home";
import AuthForm from "../auth/AuthForm";

const Fullimg = () => {
  const texts = [
    "Learning about your personal finances isn't that hard.",
    "I am Creative.",
    "I Love Design.",
    "I Love to Develop."
  ];
  const period = 2000;

  return (
    <>
    <div className="fullimg-wrapper">
      <div className="fullimg-content">
        <div className="wrapper">

        <div className="wrapper__left">

        <h1>
          <Typewriter texts={texts} period={period} />
        </h1>
        <p className="subtitle">
          Discover how creativity and design can elevate your experiences.
        </p>

        <p className="left__para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus vitae ducimus, consequatur, rem repudiandae dolor delectus aperiam blanditiis facilis facere cumque natus nulla et totam qui, vero quam laboriosam impedit!</p>
        <button className="home__btn">Learn More</button>

        </div>
        <div className="wrapper__right">
          <div className="right__wrapper">
<figure>

<img src="https://www.goldmansachs.com/images/homepage/GS_VM_Photo_SH_NYC3_11375_RGB.jpg" alt="" />
</figure>

        </div>
          </div>
          
        </div>
      </div>
    
    </div>
    <AuthForm />
    <Home />
    </>
  );
};

export default Fullimg;
