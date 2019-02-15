import React, { Component } from 'react';
import styled from 'styled-components';
import jello from '../pictures/jello.jpg';
import trassets from '../pictures/trassets.jpg';

const BoxParent = styled.div`
  display: flex;
  justify-content: center;
  height: 250px;
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
const InnerBox = styled.img`
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
      <div>
        <BoxParent onClick={ () => this.props.showJello() }>
          <ProjectBox>
            <InnerBox src={ jello }></InnerBox>
            <ProjectTitle>Jello Project Tracker</ProjectTitle>
          </ProjectBox>
        </BoxParent>
        <BoxParent onClick={ () => this.props.showTrassets() }>
          <ProjectBox>
            <InnerBox src={ trassets }></InnerBox>
            <ProjectTitle>Asset Tracker</ProjectTitle>
          </ProjectBox>
        </BoxParent>
      </div>
    );
  }
}

export default ProjectBoxes;