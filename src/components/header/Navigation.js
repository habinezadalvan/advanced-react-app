import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from '../common/Logo';

const Nav = styled.nav`
  height: 5vh;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: relative;

`;

function Navigation({url}) {
  

  return (
    <Nav>
      <Logo/>
     <Burger url={url}/>
    </Nav>
  );
}

export default Navigation;
