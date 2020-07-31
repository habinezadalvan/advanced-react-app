import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from '@reach/router';


const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    
    li {
      padding: 40px;
      width: 10%
      border: 2px solid #000;

      .link{
        text-decoration: none;
        color: #fff
      }
    }

    @media (max-width: 900px){
        flex-flow: column;
        background-color: #048ffae3;
        // border-radius: 1rem;
        height: 100vh;
        position: fixed;
        top: 0px;
        width: 100%;
        right: 0px;
        align-content: center;
        text-align: center;
        pointer-events: none
        clip-path: ${({clicked}) => clicked ? 'circle(1500px at 90% -10%)' : 'circle(0px at 90% -10%)'};
        -webkit-clip-path: ${({clicked}) => clicked ? 'circle(1500px at 90% -10%)' : 'circle(0px at 90% -10%)'};
        pointer-events: ${({clicked}) => clicked ? 'all' : 'none'};
        transition: all .5s ease-out;
        z-index: 8;
        li {
            
           .link {
                color: #fff;
                font-weight: bold;
                font-size: 18px;
           }
        }
    }

`;

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
      
      <Ul clicked={clicked}  >
        <li onClick={() => setClicked(!clicked)}> <Link className="link" to="/" >Home</Link> </li>
        <li onClick={() => setClicked(!clicked)}> <Link className="link" to="/team" >Team</Link> </li>
      </Ul>
      </>
    )
}
