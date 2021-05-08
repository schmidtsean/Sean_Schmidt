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
background: repeating-linear-gradient(190deg, rgba(0, 0, 0) 40px,
rgba(25, 181, 254, 1) 80px, rgba(37, 116, 169, 1) 120px,
rgba(44, 62, 80, 1) 160px, rgba(44, 62, 80, 1) 200px,
rgba(0, 0, 0) 240px, rgba(0, 0, 0) 280px,
rgba(197, 239, 247, 1) 300px);
height: 80px;
margin-top: -80;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
`

