import React, { Component } from 'react';
import styled from 'styled-components';
import me from '../pictures/me.jpg';
import flying from '../pictures/flying.jpg';
import howl from '../pictures/howl.jpg';
import pale from '../pictures/pale.jpg';
import view from '../pictures/view.jpg'

const Container = styled.div`
  background-color: white;
  background-image: -webkit-linear-gradient(50deg, #52afff 50%, white 50%);
  min-height: 100px;
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
const Box = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;

`
const Profile = styled.div`
  position: relative
  background-color: rgb(73, 73, 73);
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 20px;
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
const RandomFacts = styled(SubTitle)`
`
const Pictures = styled.div`
  display: flex;
  overflow: scroll;
`

const Covers = styled.img`
  margin: 5px;
  height: 200px;
  border: 5px solid white;

`

class About extends Component {
  render() {
    return (
      <Container>
        <AboutTitle>About me</AboutTitle>
        <SubTitle>I'm a full stack web developer based near Salt Lake City, Utah.</SubTitle>
        <Description>I love solving problems and am passionate about learning new skills. My favorite hobby when I'm not working is to settle down with a good book of any genre. I also enjoy staying active by backpacking and hiking.</Description>
        <Profile>
          <Picture src={me}></Picture>
        </Profile>
        <Box>
          <SocialLinks>
            <SocialIcons href='https://www.linkedin.com/in/megandanielleshepherd/'><i className="fab fa-linkedin"></i></SocialIcons>
            <SocialIcons href='https://github.com/mobydickens'><i className="fab fa-github"></i></SocialIcons>
            <SocialIcons href='https://www.facebook.com/megan.stead.33'><i className="fab fa-facebook"></i></SocialIcons>
          </SocialLinks>
        </Box>
        <RandomFacts>
          Some of my favorite books
        </RandomFacts>
        <Pictures>
          <Covers src={flying} alt="the book of flying"></Covers>
          <Covers src={pale} alt="pale fire"></Covers>
          <Covers src={view} alt="a room with a view"></Covers>
          <Covers src={howl} alt="howl's moving castle"></Covers>
        </Pictures>
      </Container>
    );
  }
}

export default About;