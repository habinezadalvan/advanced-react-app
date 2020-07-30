import React from 'react';
import {Link} from '@reach/router';
import styled from 'styled-components';


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
        border-radius: 1rem;
        height: 100vh;
        position: fixed;
        // padding: 100px 0px;
        top: 0px;
        width: 50%;
        right: 0px;
        align-content: center;
        text-align: center;
        pointer-events: none
        clip-path: ${({clicked}) => clicked ? 'circle(1000px at 90% -10%)' : 'circle(0px at 90% -10%)'};
        -webkit-clip-path: ${({clicked}) => clicked ? 'circle(1000px at 90% -10%)' : 'circle(0px at 90% -10%)'};
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

export default function UlComponent({clicked, link1, link2}) {
    
    return (
        <Ul clicked={clicked} >
        <li> <Link className="link" to="/" onClick={clicked} >{link1}</Link> </li>
        <li> <Link className="link" to="/team" onClick={clicked}>{link2}</Link> </li>
        {/* <li> <Link className="link" to="/partners">partners</Link> </li>
        <li> <Link className="link" to="/Services">Services</Link> </li> */}
      </Ul>
    )
}
