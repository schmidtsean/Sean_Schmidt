import {useEffect, useState} from 'react';
import { Header } from "semantic-ui-react";
import { Header1, Header2, Vid, Homediv, HomeWrap, Links, LinkItem } from "../styles/HomeStyles";
import background2 from '../videos/background2.mp4';

const Home = () => {
  const [scrollNav, setScrollNav] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [] )
  
  const changeNav = () => {
    if(window.scrollY >= 0) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  return (
  <HomeWrap>
    <Homediv>
      <Vid autoPlay loop src={background2} type='video/mp4'/>
    </Homediv>
    <Header1> Sean Schmidt </Header1>
    <Header2> Web Developer</Header2>
    <LinkItem>
      <Links to='about' smooth={true} duration={500} spy={true} exact='true'>About</Links>
    </LinkItem>
    <LinkItem>
      <Links to='contact' smooth={true} duration={500} spy={true} exact='true'>Contact</Links>
    </LinkItem>
  </HomeWrap>
  )
}

export default Home;