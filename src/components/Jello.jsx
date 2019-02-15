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
`
const Buttons = styled.a`
  background-color: #2D89E5;
  color: white;
`

class Jello extends Component {
  render() {
    return (
      <div>
        <BackBtn onClick={ () => this.props.backBtnFn() }>Back</BackBtn>
        <Title>"Jello" Project Tracker</Title>
        <ButtonParent>
          <Buttons href='https://jello.mrsshepherdspie.com/#/'>See live site</Buttons>
          <Buttons href='https://github.com/mobydickens/personal_project'>Github repo</Buttons>
        </ButtonParent>
        <Description>
          Personally developed a web application to to assist developers in planning projects managing their time effectively.
        </Description>
        <Description>Tech stack: React, Javascript, PostgreSQL, HTML5, NodeJS, Massive (SQL), Express, Plotly.js, Tailwind, Moment, Jest, Socket.io, and bcrypt</Description>
        <ul>
          <List>Allows users to break projects down into tasks</List>
          <List>Allows users to track time for individual tasks and update estimates</List>
          <List>Implemented drag and drop using a 3rd party library for moving tasks through stages of completion</List>
          <List>Generated reports to show if user is on schedule to complete project on time</List>
        </ul>
      </div>
    );
  }
}

export default Jello;