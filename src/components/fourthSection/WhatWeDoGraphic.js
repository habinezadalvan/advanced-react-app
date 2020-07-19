import React, {useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import allappleproductsgif from '../../assets/images/appleproducts.gif';
import screenshot from '../../assets/images/screenshot.png';


const WhatWeDoGraphic = ({referance, entry, inView}) => {

    const image = React.createRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(image.current, {
             scrollTrigger: {
                 trigger: image.current, 
                 scrub: true,
                 toggleActions: "restart pause none none"
                },
             duration: 2, x: -200});
    }, [image]);

    return(
        <div className={`fourth-section__image`} ref={image}>
          <img src={allappleproductsgif} alt="all apple products"/>
          <img src={screenshot} alt="screenshot" className="screenshot"/>
        </div>
    )
}

export default WhatWeDoGraphic;