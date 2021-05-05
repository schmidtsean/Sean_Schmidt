
import { ResumeWrap, Header, PictureWrap, Description } from '../styles/ResumeStyles';
import SeanResume from '../images/SeanResume.jpeg';

const Resume = () => {

  return (
    <ResumeWrap id='resume'>
      <Header>Resume</Header>
        <PictureWrap>
         <img style={{height:'65%'}} src={SeanResume} alt='resume img' />
        </PictureWrap>
          <a href='https://sean-resume.netlify.app/' target='blank'>
            <Description>Click For Full View</Description>
          </a>
    </ResumeWrap>
  )
}

export default Resume;