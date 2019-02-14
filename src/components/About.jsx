import React, { Component } from 'react';
import styled from 'styled-components';

const AboutTitle = styled.h1`
  font-size: 40px;
  margin-top: 10px;
  padding: 25px;
`
const SubTitle = styled.h2`
  font-size: 30px;
  padding: 0 25px 0 25px;
  color: rgb(73, 73, 73);
`
const Description = styled.p`
  font-size: 20px;
  padding: 25px 25px 10px 25px;
`
const SocialLinks = styled.div`
  display: flex;
`
const SocialIcons = styled.div`
  font-size: 30px;
  color: #2D89E5;
  margin: 5px;
  padding-left: 20px;
  cursor: pointer;
`
const Profile = styled.div`
  background-color: rgb(73, 73, 73);
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  height: 200px;
  width: 200px;
  border-radius: 50%;
`

class About extends Component {
  render() {
    return (
      <div>
        <AboutTitle>About me</AboutTitle>
        <SubTitle>I'm a full stack web developer based near Salt Lake City, Utah.</SubTitle>
        <Description>I love solving problems and am passionate about learning new skills. My favorite hobby when I'm not working is to settle down with a good book of any genre. I also enjoy staying active by backpacking and hiking.</Description>
        <SocialLinks>
          <SocialIcons><i class="fab fa-linkedin"></i></SocialIcons>
          <SocialIcons><i class="fab fa-github"></i></SocialIcons>
          <SocialIcons><i class="fab fa-facebook"></i></SocialIcons>
        </SocialLinks>
        <Profile></Profile>
      </div>
    );
  }
}

export default About;