import React from 'react';

import photo from '../../assets/DBS_Kevin_web_2640.jpg';

export default function MemberCard() {
    return (
        <div className="member-card">
            <div className="photo">
                <img src={photo} alt="userimage"/>
            </div>
             <div className="personal-info">
                 <p>Mr. Harerimana Carlos</p>
                 <h2>Software developer</h2>
             </div>
        </div>
    )
}
