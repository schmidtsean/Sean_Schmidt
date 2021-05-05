import { PortfolioWrap, Header, DescriptionWrap, Description, Description1 } from "../styles/PortfolioStyle"


const Portfolio = () => {

  return (
    <PortfolioWrap id='portfolio'>
      <Header>Projects</Header>
        <DescriptionWrap>
          <a href='https://class-cash-sp21.herokuapp.com/'>
            <Description>
              Class Cash 
            </Description>
          </a>
            <Description1>
            The Class Cash app is used to allow teachers to more easily develop a reward system in their classroom. Teachers can create rewards and award points to each student. The student can then redeem their points for awesome rewards entered in by the teacher.
            </Description1>
        </DescriptionWrap>
    </PortfolioWrap>
  )
}

export default Portfolio;