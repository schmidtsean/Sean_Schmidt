import { Image } from 'semantic-ui-react';
import { ResumeWrap, Header, PictureWrap } from '../styles/ResumeStyles';
import SeanResume from '../images/SeanResume.jpeg';

const Resume = () => {

  return (
    <ResumeWrap id='resume'>
      <Header>Resume</Header>
        <PictureWrap>
         <img style={{height:'65%'}} src={SeanResume} />
        </PictureWrap>
    </ResumeWrap>
  )
}

export default Resume;