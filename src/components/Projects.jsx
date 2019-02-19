import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectBoxes from './ProjectBoxes';
import Jello from './Jello';
import Trassets from './Trassets';

const StyledProjects = styled.div`
  height: 100vh;
`

class Projects extends Component {

  state = {
    showJello: false,
    showTrassets: false
  }

  backBtnFn = () => {
    this.setState({ showJello: false, showTrassets: false });
  }

  showJello = () => { this.setState({ showJello: true }) }
  showTrassets = () => { this.setState({ showTrassets: true }) }

  render() {

    return (
      <StyledProjects>
        { this.state.showJello ?
          <Jello backBtnFn={ this.backBtnFn } /> 
        : this.state.showTrassets ? 
          <Trassets backBtnFn={ this.backBtnFn } />
        : 
          <ProjectBoxes showJello={ this.showJello } showTrassets={ this.showTrassets } />
        }
      </StyledProjects>
    );
  }
}

export default Projects;