import React, { Component } from 'react';
import styled from 'styled-components';

const BoxParent = styled.div`
  display: flex;
  justify-content: center;
`
const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 40px 0;
  padding-top: 15px;
  background-color: white;
  width: 300px;
  height: 220px;
  border: 1px solid #DEE0E0;
  border-radius: 3px;
  box-shadow: 5px 10px 10px #DEE0E0;
`
const InnerBox = styled.div`
  align-self: center;
  width: 270px;
  height: 170px;
  background-color: grey;
`
const ProjectTitle = styled.div`
  margin-top: 15px;
`

class ProjectBoxes extends Component {
  render() {
    return (
      <BoxParent>
        <ProjectBox>
          <InnerBox></InnerBox>
          <ProjectTitle>Test Title</ProjectTitle>
        </ProjectBox>
      </BoxParent>
    );
  }
}

export default ProjectBoxes;