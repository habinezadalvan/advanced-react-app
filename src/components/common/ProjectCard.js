import React from 'react';
import images from '../../assets/imageUrls';

export default function ProjectCard({name,description, site, cover, btn}) {
    return (
        <div className="project-box">
        <figure className="caption">
        <img src={cover || images.digitologo} className="coverimage" alt="myimage"/>
        <figcaption className="story__username">
        <h2>{name}</h2>
          <p>{description}</p>
          <div className="button"> <a target="_blank" rel="noreferrer" href={site} >
              {btn}
          </a></div>
        </figcaption>
        </figure>
      </div>
    )
}
