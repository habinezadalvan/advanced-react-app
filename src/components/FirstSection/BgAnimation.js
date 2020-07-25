import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import whitebox from '../../assets/images/white correct-min.png';
import blackbox from '../../assets/images/box black png-min.png';
import openkbox from '../../assets/images/Last box open-min.png';


const BgAnimation = () => {
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
      y: -7,
      duration: 20,
      scale: 6,
      ease:"bounce",
      repeat: -1
    });

  }, [box1, box3, box2Small, topbox]); 

    return(
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
    )
}

export default BgAnimation;