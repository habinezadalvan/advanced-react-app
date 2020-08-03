import React, {useState} from "react";
import styled from 'styled-components';

const StyledBurger = styled.div`
display: none;
 div{
  width: 20px;
  height: 2px;
  background-color: ${({clicked}) => clicked ? '#ccc' : '#000'};
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
 @media (max-width: 1300px){
   display: block;
   z-index: 8;
 }
`;

const StyledSubHeaderLink = styled.div`
.actual-link{
display: flex;
}

@media (max-width: 1300px){
  .actual-link{
    flex-flow: column nowrap;
    background-color: #0c0b0bd5;
    height: 100vh;
    position: fixed;
    top: 15vh;
    width: 100%;
    right: 0px;
    pointer-events: none
    clip-path: ${({clicked}) => clicked ? 'circle(1500px at 90% -10%)' : 'circle(0px at 90% -10%)'};
    -webkit-clip-path: ${({clicked}) => clicked ? 'circle(1500px at 90% -10%)' : 'circle(0px at 90% -10%)'};
    pointer-events: ${({clicked}) => clicked ? 'all' : 'none'};
    transition: all .5s ease-out;
    z-index: 8;
  }
}

`;




const SubHeader = (props) => {
const [clicked, setClicked] = useState(false);
  return (
    <>
     <StyledSubHeaderLink clicked={clicked} className="sub-header">
      <StyledBurger clicked={clicked}   onClick= { () => setClicked(!clicked)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line2"></div>
        </StyledBurger>
          <div className="actual-link" onClick= { () => setClicked(!clicked)} >{props.children}</div>
    </StyledSubHeaderLink>
    </>
  );
};

export default SubHeader;
