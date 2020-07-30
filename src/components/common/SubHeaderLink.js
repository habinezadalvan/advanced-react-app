import React, {useState } from "react";
import { useParams } from "@reach/router";
const SubHeaderLink = ({icon, title, id}) => {

const params = useParams();


const [isClicked, setIsClick] = useState(false);

  return (
    <div className={`sub-header__link ${isClicked && (Number(params.processId) === id) ? 'active' : ''}`} onClick={() => setIsClick(true)}>
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <div className="text">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SubHeaderLink;
