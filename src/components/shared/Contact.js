import { DescriptionWrap, Description, Header, ContactWrap, Picture } from "../styles/ContactStyles";
import {Icon, Image} from "semantic-ui-react";
import Github from '../images/Github.png';
import linkedin from '../images/linkedin.png';
const Contact = () => {
  return (
    <ContactWrap id='contact'>
    <Header>Contact Info</Header>
    <DescriptionWrap>
      <a  href="tel:18017553015">
        <Description>
          801-755-3015
        </Description>
      </a>
      <a href="mailto:schmidtsean048@gmail.com">
        <Description>
          schmidtsean048@gmail.com
        </Description>
      </a>
      <Description>
        
        <a href="https://github.com/schmidtsean">
          <Picture style={{width:'10%', height:'10%', marginRight:'10px'}} src={Github}/>
        </a>
        <a href='https://www.linkedin.com/in/seanschmidt50/'>
          <Picture style={{width:'10%', height:'10%', marginLeft:'10px'}} src={linkedin} />
        </a>
      </Description>
      </DescriptionWrap>
    </ContactWrap>
  )
}

export default Contact;