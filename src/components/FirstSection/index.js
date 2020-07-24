import React, {useEffect} from "react";
import Heading from "../common/Heading";
import whitebox from '../../assets/images/white correct.png';
import blackbox from '../../assets/images/box black png.png';
import openkbox from '../../assets/images/Last box open.png';
import {gsap} from 'gsap';
import ContentAndBtn from "./ContentAndBtn";
import Videos from "./Videos";

const FirstSection = () => {
const box1 = React.createRef();
const box3 = React.createRef();
const box2Small = React.createRef();
const topbox = React.createRef();

  useEffect(() => {

    gsap.to(topbox.current, {
      y: 460,
      duration: 20,
      ease:"bounce",
      delay: 10,
      repeat: -1
      
    });
    gsap.to(box1.current, {
      x: 100,
      rotation: 360,
      duration: 35,
      ease:"bounce",
      repeat: -1
    });

    gsap.from(box3.current, {
      x: -170,
      rotation: 360,
      duration: 35,
      ease:"bounce",
      delay: 25,
      repeat: -1
    });

    gsap.from(box2Small.current, {
      y: -10,
      duration: 20,
      scale: 6,
      ease:"bounce",
      repeat: -1
    });

  }, [box1, box3, box2Small, topbox]); 
 
  return (
    <div className="first-section">
      <div className="view">
      <div className="first-section__content">
        <div className="first-section__content--left">
          <ContentAndBtn />
        </div>
        <div className="first-section__content--right">
          <Videos />
        </div>
      </div>
      <div className="first-section__free-space">
        <div className="first-section__free-space--left "></div>
        <div className="first-section__free-space--right">
          <div className="extra-rectangle">
            <div className="second-section-heading">
                <Heading text1="Why we do" text2="what we do" />
            </div>
          </div>
        </div>
      </div>
      </div>
     
      <div className="bg-animations">
        <div className="top-div">
          <img src={blackbox} alt="imagetop" ref={topbox}></img>
        </div>
        <div className="lower-div"> 
            <div className="box-1">
              <img src={blackbox} alt="whitebox" ref={box1}/>
            </div>
            <div className="box-2">
              <img src={openkbox} alt="openkbox" className="big-box"/>
              <img src={whitebox} alt="whitebox" className="small-box" ref={box2Small}/>
            </div>
            <div className="box-3">
              <img src={whitebox} alt="whitebox"  ref={box3}/>
            </div>
        </div>
      </div>
      <div className="first-section__model">
        
      </div>
      <div className="moving-box"> 
          <img src={whitebox} alt="whitebox"/>
        </div>
    </div>
  );
};

export default FirstSection;
