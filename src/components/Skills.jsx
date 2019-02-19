import React, { Component } from 'react';
import styled from 'styled-components';
import js from '../pictures/js.jpg';
import css from '../pictures/css.jpg';
import html from '../pictures/red-html.jpg';
import nodejs2 from '../pictures/nodejs2.jpg';
import postgres from '../pictures/postgres.jpg';
import react from '../pictures/react.jpg';


const Container = styled.div`
  background-color: white;
  background-image: -webkit-linear-gradient(50deg, #52afff 50%, white 50%);
  min-height: 100px;
`
const SkillsParent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column
  width: 100%;
`
const SubTitle = styled.h2`
  margin-top: 10px;
  font-size: 30px;
  padding: 0 25px 0 25px;
  color: rgb(73, 73, 73);
`
const SkillsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 100%;
`
const SkillWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  align-items: center;
`
const Skill = styled.img`
  margin: 10px;
  width: 100px;
  height: 100px;
  padding: 7px;
  background-color: white;
  border: 1px solid black;
`
const SkillSubtitle = styled.p`
  font-size: 20px;
  padding: 0 0 15px 25px;
`

class Skills extends Component {
  render() {
    return (
      <Container>
        <SkillsParent>
          <SubTitle>Skills</SubTitle>
          <SkillsBox>
            <SkillWrapper>
              <Skill src={ js } alt="js"></Skill>
              <SkillSubtitle>JavaScript</SkillSubtitle>
            </SkillWrapper>
            <SkillWrapper>
              <Skill src={ react } alt="react"></Skill>
              <SkillSubtitle>React</SkillSubtitle>
            </SkillWrapper>
            <SkillWrapper>
              <Skill src={ nodejs2 } alt="nodejs"></Skill>
              <SkillSubtitle>NodeJS</SkillSubtitle>
            </SkillWrapper>
            <SkillWrapper>
              <Skill src={ postgres } alt="postgres"></Skill>
              <SkillSubtitle>PostgreSQL</SkillSubtitle>
            </SkillWrapper>
            <SkillWrapper>
              <Skill src={ html } alt="html"></Skill>
              <SkillSubtitle>HTML</SkillSubtitle>
            </SkillWrapper>
            <SkillWrapper>
              <Skill src={ css } alt="css"></Skill>
              <SkillSubtitle>CSS</SkillSubtitle>
            </SkillWrapper>
          </SkillsBox>
        </SkillsParent>
      </Container>
    );
  }
}

export default Skills;