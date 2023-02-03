import Navbar from './components/Navbar';
import Home from './pages/Home';
import './style.scss'
import {Routes, Route} from "react-router-dom"
import Spell from './pages/Spell';
import Trap from './pages/Trap';
import Monster from './pages/Monster';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cards/spell' element={<Spell/>}/>
        <Route path='/cards/trap' element={<Trap/>}/>
        <Route path='/cards/monster' element={<Monster/>}/>
      </Routes>
    </div>
  );
}

export default App;
