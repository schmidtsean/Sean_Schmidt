
import { Header } from "semantic-ui-react";
import { Header1, Header2, Vid, Homediv, HomeWrap } from "../styles/HomeStyles";
import background from '../videos/background.mp4';

const Home = () => (
  <>
  <HomeWrap>
  <Homediv>
  <Vid autoPlay loop src={background} type='video/mp4'/>
  </Homediv>
  <Header1> Sean Schmidt </Header1>
  <Header2> Web Developer</Header2>
  </HomeWrap>
  </>
)

export default Home;