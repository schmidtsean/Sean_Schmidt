import styled from 'styled-components';

export const PortfolioWrap = styled.div`
background-image: linear-gradient(to bottom, lightblue, grey);
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 0 30px;
height: 100vh;
min-height: 625px;
position: relative;
`

export const Header = styled.h1`
  font-family: arial;
  font-size: 65px;
  color: white;
 
`

export const DescriptionWrap = styled.div`
order: 3;
height: 50vh;
width: 50%;
border-radius: 10px;
`

export const Description = styled.h2`
  font-family: arial;
  background: rgba(210,210,210,0.5);
  border-radius: 10px;
  padding: 1em;
  margin-bottom: 10px;
  text-align: center;
  color: black;
  &:hover {
    background: white;
    color: blue;
  }
`

export const Description1 = styled.h4`
  font-family: arial;
  background: rgba(210,210,210,0.5);
  border-radius: 10px;
  padding: 1em;
  margin-bottom: 10px;
  text-align: center;
  color: black;
 
`