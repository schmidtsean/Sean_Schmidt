
import { AboutWrap, Header3, Description, Description1, DescriptionWrap } from '../styles/AboutStyle';
import { Grid, Image } from 'semantic-ui-react';
import Sean from '../images/Sean.jpg';
const About = () => {
  return (
    <AboutWrap id='about'>
      <Header3>About Me</Header3>
      <Grid>
          <Image src={Sean} style={{textalign:'center', padding:'10px', borderRadius:'50%', height: '200px', width:'200px'}} />
        </Grid>
      <DescriptionWrap>
        <Description>
        While working at the U of U Hospital, I heard a friend tell me about coding and I immediately knew that it was something I had to do. I enrolled into Devpoint Labs, and my new found love for coding began. Since graduating from Devpoint Labs I have created this website, and I am continuing to learn everyday. I am excited to see where this field will take me.
        </Description>
        
        <Description1>
          Outside of coding I love to play ice hockey, find new coffee shops, and you can probably find me on the streets on my motorcycle. Calmer things I enjoy doing are going on hikes, and during the winter time I enjoy skiing.
        </Description1>
      </DescriptionWrap>
    </AboutWrap>
  )
}

export default About;