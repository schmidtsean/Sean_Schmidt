import {useEffect, useState} from 'react';
import { Header1, Header2, Vid, Homediv, HomeWrap, Links, LinkItem } from "../styles/HomeStyles";
import background2 from '../videos/background2.mp4';

const Home = () => {
  // eslint-disable-next-line
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
  <HomeWrap id='home'>
    <Homediv>
      <Vid autoPlay loop src={background2} type='video/mp4'/>
    </Homediv>
    <Header1> Sean Schmidt </Header1>
    <Header2> Web Developer</Header2>
    <LinkItem>
      <Links to='about' smooth={true} duration={500} spy={true} exact='true'>About</Links>
    </LinkItem>
    <LinkItem>
      <Links to='portfolio' smooth={true} duration={500} spy={true} exact='true'>Projects</Links>
    </LinkItem>
    <LinkItem>
      <Links to='resume' smooth={true} duration={500} spy={true} exact='true'>Resume</Links>
    </LinkItem>
    <LinkItem>
      <Links to='contact' smooth={true} duration={500} spy={true} exact='true'>Contact</Links>
    </LinkItem>
  </HomeWrap>
  )
}

export default Home;