import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: black;
`

const NavBars = styled.i`
  color: white;
  font-size: 30px;
  padding: 15px;
`

const Name = styled(NavBars)``

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Name>MS</Name>
        <NavBars className="fas fa-bars"></NavBars>
      </StyledHeader>
    );
  }
}

export default Header;