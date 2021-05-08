import { Links, LinkItem, LinkWrap } from "../styles/NavBarStyles";
import {useEffect, useState} from 'react';


const NavBar = () => {
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
    <>
      <LinkWrap>
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
      </LinkWrap>
    </>
  )

}

export default NavBar;