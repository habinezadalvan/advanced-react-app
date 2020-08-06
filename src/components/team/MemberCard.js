import React from 'react';

import photo from '../../assets/DBS_Kevin_web_2640.jpg';

export default function MemberCard({name, avatar, role}) {
    return (
        <div className="member-card">
            <div className="photo">
                <img src={avatar || photo} alt="userimage"/>
            </div>
             <div className="personal-info">
                    <p>{`${name}`}</p>
                    <h2>{`${role}`}</h2>
             </div>
        </div>
    )
}
