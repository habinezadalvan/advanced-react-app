import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Heading from '../../common/Heading';
import CoreValue from './CoreValue';
import PercentageCard from './PercentageCards';
import images from '../../../assets/imageUrls';

const FifthSection = () => {

    const imgRef = React.createRef();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(imgRef.current, {
            scrollTrigger:{
                trigger: imgRef.current,
                toggleActions: 'restart pause resume pause',
                start: "top center"
            },
            duration: 5,
            y: 580,
            ease:"bounce",
            rotation: 360,
        });
    }, [imgRef]);
    const trust = 'is the pillar and foundation of our work. Trust among our team, our partners, clients and stakeholders makes us function well as a company.  Trust shapes our character, competency, brings clarity, and enhances our connection.';
    const respect = 'among team members, and respect to our client.';
    const unity = 'helps us work as a team. We colaborate as a team and communicate proactive with our clients.';
    const excellence = ', we excel in every thing we do. We deliver high quality work on time.';

    return (
        <div className="fifth-section">
        <div className="fifth-section--left">
            <Heading text1="our core" text2="values" />
            <PercentageCard />
        </div>
        <div className="fifth-section--right">
            <div className="values-container">
                <CoreValue letter="T" coreValue="Trust " text={trust}/>
                <CoreValue letter="R" coreValue="Respect " text={respect}/>
                <CoreValue letter="U" coreValue="Unity " text={unity}/>
                <CoreValue letter="E" coreValue="Excellence" text={excellence}/>
            </div>
            <div className="animated-box">
                <img ref={imgRef} src={images.boxside} alt="animatedimage"/>
            </div>
        </div>
    </div>
    )
}

export default FifthSection;