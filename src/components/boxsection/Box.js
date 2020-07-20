import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import box from '../../assets/images/spread-box.png';


const Box = () => {

    const cover = React.createRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(cover.current, {scrollTrigger: {
            trigger: cover.current,
            scrub: true,
            toggleActions: "restart pause none none"
        },
        duration: 2,
        y:600,
        opacity: 0
    })
    }, [cover]);
    return(
        <div className="box-section">
            <img src={box} alt="box-section"/>
            <div className="box-section__cover" ref={cover}><h1>Turning impossibilities into possibilities.</h1></div>
         </div>
    )
}

export default Box;