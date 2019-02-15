import React, { Component } from 'react';
import styled from 'styled-components';
import Intro from './Intro.jsx';
import ProjectBoxes from './ProjectBoxes.jsx';

const StyledHome = styled.div`
  background-color: #E7E9E9;
`
const LatestWork = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  color: #666666;
`

class Home extends Component {

  state = {
    showJello: false,
    showTrassets: false
  }

  showJello = () => { this.setState({ showJello: true }) }
  showTrassets = () => { this.setState({ showTrassets: true }) }
  
  render() {
    return (
      <StyledHome>
        <Intro />
        <LatestWork><div>Some of my latest work</div></LatestWork>
        <ProjectBoxes showJello={ this.showJello } showTrassets={ this.showTrassets }/>
      </StyledHome>
    );
  }
}

export default Home;