import React, { Component } from 'react';
import styled from 'styled-components';
import detail from '../pictures/detail.jpg';

const BackBtn = styled.div`
  padding: 8px;
  color: grey;
`
const Title = styled.h1`
  margin: 10px;
  font-size: 30px;
  padding: 0 25px 10px 25px;
  color: rgb(73, 73, 73);
  border-bottom: 1px solid #eaeaea;
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
const Image = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
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
          Personally developed a responsive web application to to assist developers in planning projects managing their time effectively.
        </Description>
        <Image src={detail}></Image>
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