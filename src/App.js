import Home from './components/shared/Home';
import About from './components/shared/About';
import Contact from './components/shared/Contact';
import Portfolio from './components/shared/Portfolio';
import Resume from './components/shared/Resume';
import NavBar from './components/shared/NavBar';


const App = () => (
  <>
    <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
  </>
)

export default App;
