import {Header} from 'semantic-ui-react';
import styled from 'styled-components';

export const Header1 = styled(Header)`
font-family: Arial;
font-size: 90px;
color: white;
border-style: hidden;
z-index: 3;
padding-bottom: .25em;

`


export const AboutWrap = styled.div`
  background-image: linear-gradient(to bottom, black, lightblue, grey, lightblue, black);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  min-height: 625px;
  position: relative;
  `

  export const Header2 = styled.h2`
  font-family: arial;
`

export const DescriptionWrap = styled.div`
  order: 3;
  height: 50vh;
  width: 80vw;
  border-radius: 10px;
`

export const Description = styled.p`
  font-family: arial;
  font-size: 1.1em;
  background: rgba(210,210,210,0.5);
  border-radius: 10px;
  padding: 1em;
  margin-bottom: 10px;
 
`

export const Description1 = styled.p`
  font-family: arial;
  font-size: 1.1em;
  background: rgba(210,210,210,0.5);
  border-radius: 10px;
  padding: 1em;
 
`

export const Header3 = styled.h1`
  font-family: arial;
  font-size: 65px;
  color: #EBEBEB;
 
`