import React, { Component } from 'react';
import styled from 'styled-components';

const SkillsParent = styled.div`
  display: flex;
  justify-content: center;
`
const SkillsBox = styled.div`
  margin-top: 40px;
  width: 280px;
  height: 400px;
  background-color: yellow;
`
const Skill = styled.div`
  
`

class Skills extends Component {
  render() {
    return (
      <SkillsParent>
        <SkillsBox></SkillsBox>
      </SkillsParent>
    );
  }
}

export default Skills;