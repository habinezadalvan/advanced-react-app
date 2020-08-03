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
  .logo{
    height: 4rem;
    width: 4rem;
    margin-right: auto;
  }

`;

function Navigation({url}) {

  return (
    <Nav>
      <div className="logo">
        <Logo />
      </div>
     <Burger url={url}/>
    </Nav>
  );
}

export default Navigation;
