
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
