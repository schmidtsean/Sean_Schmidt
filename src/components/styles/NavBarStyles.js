import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Links = styled(Link)`
  font-family: arial;
  font-size: 35px;
  color: white;
  z-index: 3;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    transform: scale(1.1)
  }
`

export const LinkItem = styled.li`
  z-index: 3;
  order: 3;
  padding: 1em 0%;
  list-style: none;
  padding: 8px;
  text-align: center;
`

export const LinkWrap = styled.nav`
background-color: black;
height: 80px;
margin-top: -80;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media only screen and (max-width: 500px) {
    position: relative;
}
`

