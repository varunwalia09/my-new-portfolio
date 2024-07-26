
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contatc" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
