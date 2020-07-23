import React, {useEffect} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Heading from "../common/Heading";
import image from '../../assets/images/mockup last.png';

const SecondSection = () => {
  const team = React.createRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(team.current, {
      scrollTrigger:{
        trigger: team.current,
        scrub: true,
        toggleActions: 'restart pause none none'
      },
    duration: 2,
    x: 200,
  })

  }, [team]);
  return (
    <div className="second-section">
      <div className="second-section--left">
        <div className="second-section__heading"><Heading text1="Why we do" text2="What we do"/></div>
        <div className="content">
            <p>We want to support campanies, institurions, and individuals with amazing and quality products and services but with less visibility and accessibility. </p>
            <p>Our purpose is to serve you selflessly and make you business grow tremendously.</p>
        </div>
      </div>
      <div className="second-section--right">
        <img ref={team} src={image} alt="teamimage"/>
      </div>
    </div>
  );
};

export default SecondSection;
