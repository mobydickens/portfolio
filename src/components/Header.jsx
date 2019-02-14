import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: black;
`
// bars are white when menu is closed, grey when open
const NavBars = styled.i`
  color: ${props => props.inputColor};
  font-size: 24px;
  padding: 15px;
`
const Drop = styled.div`
  position: absolute;
  width: 100vw;
  height: 50vh;
  background-color: #333333;
`
const MenuItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  border-bottom: 1px solid rgb(73, 73, 73);
  color: white;
  font-size: 30px;
`

const Name = styled(NavBars)`
  color: white;
`

class Header extends Component {
  state = {
    hide: true
  }

  handleMenuClick = (route) => {
    this.setState({ hide: true });
    this.props.history.push(`/${route}`);
  }

  render() {

    return (
      <div>
        <StyledHeader>
          <Name onClick={ () => this.props.history.push('/') }>Megan Shepherd</Name>
          <NavBars 
            onClick={ () => this.setState({ hide: !this.state.hide }) }
            className="fas fa-bars"
            inputColor={ this.state.hide ? 'white' : 'rgb(73, 73, 73)' }>
          </NavBars>
        </StyledHeader>
        { this.state.hide ? null : 
        <Drop>
          <MenuItems onClick={ () => this.handleMenuClick('about') }>About</MenuItems>
          <MenuItems onClick={ () => this.handleMenuClick('skills') }>Skills</MenuItems>
          <MenuItems onClick={ () => this.handleMenuClick('projects') }>Projects</MenuItems>
          <MenuItems onClick={ () => this.handleMenuClick('contact') }>Contact</MenuItems>
        </Drop> }
      </div>
    );
  }
}

export default withRouter(Header);