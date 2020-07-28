import React from "react";
import {Link} from '@reach/router';

const Nav = ({link1, link2, link3, link4, link5}) => {
  console.log('link5 --', link5);
  return (
    <div className="header__nav header--section">
       <ul>
       <Link className="link" to="/"> <li>{link1}</li></Link>
       {/* <li><a href="#services">{link2}</a></li> */}
       <Link className="link" to="team"> <li>{link5}</li></Link>
      </ul>
    </div>
  );
};

export default Nav;