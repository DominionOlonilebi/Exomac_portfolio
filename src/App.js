import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Navbars from './Components/Navbars';
import Services from './Components/Services';

function App() {
  return (
    <div>
      <Navbars/>
      <Homepage/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
