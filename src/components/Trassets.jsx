import React, { Component } from 'react';
import styled from 'styled-components';

const BackBtn = styled.div`
  padding: 8px;
`
const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 30px;
  padding: 0 25px 0 25px;
  color: rgb(73, 73, 73);
`
const Description = styled.p`
  margin: 10px 0 10px 0;
  font-size: 20px;
  padding: 0 25px 0 25px;
`
const List = styled.li`
  font-size: 15px;
  padding: 5px 25px 0 25px;
`
const ButtonParent = styled.div`
  display: flex;
  margin-left: 20px;
`
const Buttons = styled.a`
  font-size: 12px;
  margin: 5px;
  border-radius: 5px;
  padding: 4px;
  background-color: #2D89E5;
  color: white;
  :link, :visited, :active {
    text-decoration: none;
  }
`

class Trassets extends Component {
  render() {
    return (
      <div>
        <BackBtn onClick={ () => this.props.backBtnFn() }>Back</BackBtn>
        <Title>Asset Tracker</Title>
        <ButtonParent>
          <Buttons href='https://trassets.jaredchoatepro.com/#/'>See live site</Buttons>
          <Buttons href='https://github.com/team-awesome99999/personal-finance'>Github repo</Buttons>
        </ButtonParent>
        <Description>
          As a group, developed a web application to to assist users in tracking their assets and planning their finances.
        </Description>
        <Description>Tech stack: React, Javascript, PostgreSQL, HTML5, NodeJS, Massive (SQL), Express, Plotly.js, React-Bootstrap, Moment, Jest, NodeMailer, and bcrypt</Description>
        <ul>
          <List>Allows users to add all of their accounts they would like to track</List>
          <List>Allows users to add and edit balances as often as they like.</List>
          <List>Users can track their financial progress with personalized graphs.</List>
          <List>Implemented NodeMailer so user can schedule reminders to update their balances.</List>
          <List>Users can create financial goals for themselves track their progress in reaching those goals</List>
        </ul>
      </div>
    );
  }
}

export default Trassets;
