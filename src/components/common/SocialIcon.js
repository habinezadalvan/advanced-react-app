import React from 'react';


const SocialIcon = ({icon, alt, site}) => {
    return(
        <div className="social-icon">
            <a target="_blank" rel="noreferrer" href={site} >
                <img src={icon} alt={alt}/>
            </a>
        </div>
    )
}

SocialIcon.defaultProps={
    icon: 'twitter',
    alt: 'twitter',
    site: 'https://twitter.com/explore',
}

export default SocialIcon;