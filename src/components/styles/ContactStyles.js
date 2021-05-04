import styled from 'styled-components';

export const ContactWrap = styled.div`
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

  export const DescriptionWrap = styled.div`
  order: 3;
  height: 50vh;
  width: 50%;
  border-radius: 10px;
`

export const Description = styled.h1`
  font-family: arial;
  background: rgba(210,210,210,0.5);
  border-radius: 10px;
  padding: 1em;
  margin-bottom: 10px;
  text-align: center;
`

export const Description1 = styled.p`
  font-family: arial;
  font-size: 1.1em;
  background: rgba(210,210,210,0.5);
  border-radius: 10px;
  padding: 1em;
 
`

export const Header = styled.h1`
  font-family: arial;
  font-size: 65px;
  color: white;
  margin-bottom: 45px;
`