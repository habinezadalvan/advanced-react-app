import React, {useState} from 'react';
import styled from 'styled-components';
import UlComponent from './UlComponent';

const StyledBurger = styled.div`
  @media (max-width: 900px) {
    width: 40px;
    height: 40px;
    background-color: ${({clicked}) => clicked ? 'transparent' : '#0570c1'};
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
    .burger div{
      width: 20px;
      height: 2px;
      background-color: ${({clicked}) => clicked ? '#ccc' : '#fff'};
      margin: 5px;
      border-radius: 10px;
      transform-origin: .1px;
      transition: all .5s ease;
      &:nth-child(1){
        transform: ${({clicked}) => clicked ? 'rotate(47deg)' : 'rotate(0)'};
      }
      &:nth-child(2){
        opacity: ${({clicked}) => clicked ? 0 : 1};
      }
      &:nth-child(3){
        transform: ${({clicked}) => clicked ? 'rotate(-47deg)' : 'rotate(0)'};
      }
  }
  }
    

`;

export default function Burger() {
  
   const [clicked, setClicked] = useState(false);

    return (
      <>
        <StyledBurger clicked={clicked} onClick={() => setClicked(!clicked)}>
        <div className="burger" >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line2"></div>
        </div>
      </StyledBurger>
      
      <UlComponent clicked={clicked} link1="Home" link2="Team"/>
      </>
    )
}
