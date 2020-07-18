import React from 'react';
import Heading from '../common/Heading';
import CoreValue from './CoreValue';
import PercentageCard from './PercentageCards';

const FifthSection = () => {
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
        </div>
    </div>
    )
}

export default FifthSection;