import React, { Component } from 'react';
import styled from 'styled-components';
import Intro from './Intro.jsx';
import ProjectBoxes from './ProjectBoxes.jsx';

const StyledHome = styled.div`
  height: 100vh;
  background-color: #E7E9E9;
`
const LatestWork = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  color: #666666;
`

class Home extends Component {
  render() {
    return (
      <StyledHome>
        <Intro />
        <LatestWork><div>Some of my latest work</div></LatestWork>
        <ProjectBoxes />
      </StyledHome>
    );
  }
}

export default Home;