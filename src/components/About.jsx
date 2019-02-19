import React, { Component } from 'react';
import styled from 'styled-components';
import me from '../pictures/me.jpg';
import flying from '../pictures/flying.jpg';
import howl from '../pictures/howl.jpg';
import pale from '../pictures/pale.jpg';
import view from '../pictures/view.jpg'

const Container = styled.div`
  background-color: white;
  background-image: -webkit-linear-gradient(30deg, #013A6B 50%, white 50%);
  min-height: 500px;
`
const AboutOuter = styled.div`
//   width: 0;
//   height: 0;
//   border-top: 100px solid gray;
//   border-right: 100px solid white;
`
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
const SocialIcons = styled.a`
  font-size: 30px;
  color: white;
  margin: 10px;
  cursor: pointer;
`
const DarkBox = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: center;
  // background-color: rgb(73, 73, 73);
  height: 100px;

`
const Profile = styled.div`
  position: relative
  background-color: rgb(73, 73, 73);
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  height: 270px;
  width: 270px;
  border-radius: 50%;
`
const Picture = styled.img`
  max-height: 100%;
  max-width: 100%;
  border-radius: 50%;
  object-fit: contain;
`
const RandomFacts = styled.div`
  // background-color: rgb(73, 73, 73);
`
const Facts = styled(Description)`
`
const Pictures = styled.div`
  background-color: rgb(73, 73, 73);
`

const Covers = styled.img`
  width: 25%;
`

class About extends Component {
  render() {
    return (
      <Container>
        <AboutOuter>
          <AboutTitle>About me</AboutTitle>
          <SubTitle>I'm a full stack web developer based near Salt Lake City, Utah.</SubTitle>
          <Description>I love solving problems and am passionate about learning new skills. My favorite hobby when I'm not working is to settle down with a good book of any genre. I also enjoy staying active by backpacking and hiking.</Description>
            <Profile>
              <Picture src={me}></Picture>
            </Profile>
          <RandomFacts>
            <Facts>Some other facts about me...</Facts>
          </RandomFacts>
          <Pictures>
            <Covers src={flying} alt="the book of flying"></Covers>
            <Covers src={pale} alt="pale fire"></Covers>
            <Covers src={view} alt="a room with a view"></Covers>
            <Covers src={howl} alt="howl's moving castle"></Covers>
          </Pictures>
          <DarkBox>
            <SocialLinks>
              <SocialIcons href='https://www.linkedin.com/in/megandanielleshepherd/'><i className="fab fa-linkedin"></i></SocialIcons>
              <SocialIcons href='https://github.com/mobydickens'><i className="fab fa-github"></i></SocialIcons>
              <SocialIcons href='https://www.facebook.com/megan.stead.33'><i className="fab fa-facebook"></i></SocialIcons>
            </SocialLinks>
          </DarkBox>
        </AboutOuter>
      </Container>
    );
  }
}

export default About;