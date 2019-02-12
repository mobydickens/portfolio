import React, { Component } from 'react';
import styled from 'styled-components';

const BoxParent = styled.div`
  display: flex;
  justify-content: center;
`

const ProjectBox = styled.div`
  background-color: white;
  width: 300px;
  height: 200px;
`

class ProjectBoxes extends Component {
  render() {
    return (
      <BoxParent>
        <ProjectBox>

        </ProjectBox>
      </BoxParent>
    );
  }
}

export default ProjectBoxes;