import React, { Component } from 'react';
import styled from 'styled-components';

const ContactLinks = styled.a`
  font-size: 20px;
  padding: 25px 25px 10px 25px;
`
const EmailLink = styled.input`
  display: none;
`

class Contact extends Component {

  //copies my email to clipboard 
  copyText = () => {
    let copy = document.getElementById("email");
    copy.select();
    document.execCommand("copy");
  }

  render() {
    return (
      <div>
        <EmailLink readOnly id="email" value='shepherdmegandanielle@gmail.com'/>
        <ContactLinks title='Click to copy' onClick={ () => this.copyText() }>Email</ContactLinks>
        <ContactLinks title='https://github.com/mobydickens' href='https://github.com/mobydickens'>Github</ContactLinks>
        <ContactLinks 
          title='https://www.linkedin.com/in/megandanielleshepherd/' 
          href='https://www.linkedin.com/in/megandanielleshepherd/'>LinkedIn
        </ContactLinks>
      </div>
    );
  }
}

export default Contact;

