import styled from 'styled-components';
import {Header} from 'semantic-ui-react';
import {Link} from 'react-scroll';

export const Vid = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`

export const Header1 = styled(Header)`
  font-family: Arial;
  font-size: 90px;
  color: white;
  border-style: hidden;
  z-index: 3;
  padding-bottom: .25em;
`

export const Header2 = styled(Header)`
  font-family: Arial;
  font-size: 60px;
  color: white;
  border-style: hidden;
  z-index: 3;
  padding-bottom: 2em;
`

export const Homediv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const HomeWrap = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  min-height: 625px;
  position: relative;
  z-index: 1;
`

export const Links = styled(Link)`
  font-family: 'Quicksand', sans-serif;
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
`