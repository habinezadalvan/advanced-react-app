import React from "react";
import Box from "../../common/Box";
import data from '../../../config/fakeDb';

const SecondSection = () => {
 
  const boxes = () => {
    return data.map(box => {
      return <Box key ={box.id} title = {box.title} tags={box.tags} />
    })
  }

  return (
    <div className="second-section" id="skills">
      <div className="heading"><h1>Skills</h1></div>
      <div className="skills-boxes">
        {boxes()}
      </div>

    </div>
  );
};

export default SecondSection;
