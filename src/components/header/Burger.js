import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;


    li {
      padding: 20px 40px;
      width: 10%
      border: 2px solid #000;

      .link{
        text-decoration: none;
        color: gray;
      }
    }

    @media (max-width: 900px){
        flex-flow: column;
        background-color: #f243f58c;
        height: 100vh;
        position: fixed;
        top: 0px;
        width: 100%;
        right: 0px;
        align-content: center;
        text-align: center;
        pointer-events: none
        clip-path: ${({ clicked }) =>
          clicked ? "circle(1500px at 90% -10%)" : "circle(0px at 90% -10%)"};
        -webkit-clip-path: ${({ clicked }) =>
          clicked ? "circle(1500px at 90% -10%)" : "circle(0px at 90% -10%)"};
        pointer-events: ${({ clicked }) => (clicked ? "all" : "none")};
        transition: all .5s ease-out;
        z-index: 8;
        li {
        
           .link {
                color: #fff;
                font-size: 16px;
           }
        }
    }

`;

const StyledBurger = styled.div`
  @media (max-width: 900px) {
    width: 35px;
    height: 35px;
    background-color: ${({ clicked }) => (clicked ? "transparent" : "#F243F5")};
    text-align: center;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 9;
    position: absolute;
    top: 50%;
    right: -10%;
    transform: translate(-5%, -50%);
    .burger div {
      width: 20px;
      height: 2px;
      background-color: ${({ clicked }) => (clicked ? "#ccc" : "#fff")};
      margin: 5px;
      border-radius: 10px;
      transform-origin: 0.1px;
      transition: all 0.5s ease;
      &:nth-child(1) {
        transform: ${({ clicked }) =>
          clicked ? "rotate(47deg)" : "rotate(0)"};
      }
      &:nth-child(2) {
        opacity: ${({ clicked }) => (clicked ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ clicked }) =>
          clicked ? "rotate(-47deg)" : "rotate(0)"};
      }
    }
  }
`;

export default function Burger() {
  const [clicked, setClicked] = useState(false);

  const [home, setHome] = useState(false);
  const [skills, setSkills] = useState(false);
  const [section, setSection] = useState(false);
  const [aboutme, setAboutme] = useState(false);
  const [contacts, setContacts] = useState(false);

  const currentLocation = document.location.href;
  useEffect(() => {

  if(currentLocation.includes("home")){
    setHome(true);
  }else{
    setHome(false);
  }
  if(currentLocation.includes("skills")){
    setSkills(true);
  }else{
    setSkills(false);
  }
  if(currentLocation.includes("section-three")){
    setSection(true);
  }else{
    setSection(false);
  }
  if(currentLocation.includes("aboutme")){
    setAboutme(true);
  }else{
    setAboutme(false);
  }
  if(currentLocation.includes("contacts")){
    setContacts(true);
  }
  else{
    setContacts(false);

    
  }
  });

  return (
    <>
      <StyledBurger clicked={clicked} onClick={() => setClicked(!clicked)}>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line2"></div>
        </div>
      </StyledBurger>

      <Ul clicked={clicked} className="ul">
        <li className={home ? 'active': ''} onClick={() => setClicked(!clicked)}>
          {" "}
          <a className="link" href="#home">
            Home
          </a>{" "}
        </li>
        <li className={skills ? 'active': ''} onClick={() => setClicked(!clicked)}>
          {" "}
          <a className="link" href="#skills">
            Skills
          </a>{" "}
        </li>
        <li className={section ? 'active': ''} onClick={() => setClicked(!clicked)}>
          {" "}
          <a className="link" href="#section-three">
            My work
          </a>{" "}
        </li>
        <li className={aboutme ? 'active': ''} onClick={() => setClicked(!clicked)}>
          {" "}
          <a className="link" href="#aboutme">
            About me
          </a>{" "}
        </li>
        <li className={contacts ? 'active': ''} onClick={() => setClicked(!clicked)}>
          {" "}
          <a className="link" href="#contacts">
            Contacts
          </a>{" "}
        </li>
      </Ul>
      <div className="animation start-home"></div>
    </>
  );
}
