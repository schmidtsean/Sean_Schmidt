
import { Header1, Header2, Vid, Homediv, HomeWrap } from "../styles/HomeStyles";
import background2 from '../videos/background2.mp4';


const Home = () => {
  return (
 
  <HomeWrap id='home'>
    <Homediv>
      <Vid autoPlay loop src={background2} type='video/mp4'/>
    </Homediv>
    <Header1> Sean Schmidt </Header1>
    <Header2> Web Developer</Header2>
  </HomeWrap>
  )
}

export default Home;