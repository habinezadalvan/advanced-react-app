import React from "react";
import images from "../../../assets/imageUrls";
import videosrc from "../../../assets/efc3a9ff-9ef3-4457-8ab0-8b4b68d5a29f.mp4";
import videoHope from "../../../assets/1080p.mov";
import office from "../../../assets/IMG_1645.jpg";
import gif from "../../../assets/d8f3ed02-4f08-4af2-98c2-5dc1a47efca7.jpg";
import dfltravel from '../../../assets/edbdfbd3-2fde-4092-8f05-231e38ed82e2.jpg';

const FourthSection = () => {
  return (
    <div className="fourth-section" id="aboutme">
      <div className="heading">
        <h1>About me</h1>
      </div>

      <div className="about-me-boxes-container">
        <div className="about-me-box">
          <img src={images.education} alt="eduction" />
        </div>
        <div className="about-me-box">
          <div className="info">
            <h2 className="heading">Education</h2>
            <div className="about-me-content">
              <p>
                My eduction background is in Health sector. I have bachalor's
                degree in Clinical Medicine and Community Health. However, the
                passion I had for Designs and Graphics lead to web development,
                and now; I do software development as a profession.
              </p>
            </div>
          </div>
        </div>
        <div className="about-me-box">
          <div className="info">
            <h2 className="heading">Professional experience</h2>
            <div className="about-me-content">
              <p>
                I work at <a href="https://muhaburatechgroup.com/" target="_blank">Muhabura Tech Group</a> as frontend developer and UI/UX designer. 
              </p>
              <br/>
              <p>
                I Worked at <a href="https://andela.com/">Andela Kigali</a> as a Javascript Full-stack engineer
                (PREN Stack). Mastered technologies like HTML 5, CSS 3,
                JavaScript, React, Node.js, ExpressJS, MongoDB and Postgres.
              </p>
            </div>
          </div>
        </div>
        <div className="about-me-box">
          <img src={office} alt="eduction" />
        </div>
        <div className="about-me-box">
          <video className="small-video-content" controls>
            <source src={videoHope} type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
        <div className="about-me-box">
          <div className="info">
            <h2 className="heading">Leadership</h2>
            <div className="about-me-content">
              <p>
                I co-founded Hope Initiative Rwanda with an aim of making a
                significant impact on the lives of disadvantaged people living
                on street through a holistic support to their families.
              </p>
            </div>
          </div>
        </div>
        <div className="about-me-box">
          <div className="info">
            <div className="about-me-content">
              <p>
                I'm a <a href="https://www.dalailamafellows.org/dalai-lama-fellows">Dalai-Lame Fellow 2018</a>. Dalai Lama Fellows cultivates and
                supports a global movement of next generation leaders applying
                universal values to solve global challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="about-me-box">
          <img src={gif} alt="dlffamily" />
        </div>

        <div className="about-me-box">
          <video className="small-video-content" controls>
            <source src={videosrc} type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
        <div className="about-me-box">
          <div className="info">
            <h2 className="heading">Hobbies</h2>
            <div className="about-me-content">
              <p>
                When I'm not codding, I enjoy playing Guitar, cooking, having
                fun with friends, and most importantly having my me time.
              </p>
            </div>
          </div>
        </div>

        <div className="about-me-box">
          <div className="info">
            <div className="about-me-content">
              <p>
                I enjoy traveling, meeting people, and having new adventures.
              </p>
            </div>
          </div>
        </div>

        <div className="about-me-box">
          <img src={dfltravel} alt="eduction" />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
