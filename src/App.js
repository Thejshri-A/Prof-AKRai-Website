import './App.css';
import Home from './components/Home/Home';
import Academics from './components/Academics/Academics';
import Awards from './components/Awards/Awards';
import About from './components/About/About';
import Students from './components/Students/Students';
import Email from "./components/Email/Email";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Home/>
      <Academics/>
      <Awards />
      <About />
      <Students />
      <Email/>
      <Footer/>
    </div>
  );
}

export default App;
