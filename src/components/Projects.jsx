import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectBoxes from './ProjectBoxes';

const StyledProjects = styled.div`
  height: 100vh;
  background-color: #E7E9E9;
`

class Projects extends Component {
  render() {
    return (
      <StyledProjects>
        <ProjectBoxes />
      </StyledProjects>
    );
  }
}

export default Projects;