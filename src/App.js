import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import './style.scss'
import {Routes, Route} from "react-router-dom"
import Profil from './pages/Profil';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about/:name' element={<Profil/>}/>
      </Routes>
    </div>
  );
}

export default App;
