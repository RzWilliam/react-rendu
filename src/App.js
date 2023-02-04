import Navbar from './components/Navbar';
import Home from './pages/Home';
import './style.scss'
import {Routes, Route} from "react-router-dom"
import Spell from './pages/Spell';
import Trap from './pages/Trap';
import Monster from './pages/Monster';
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal"
import Private from './pages/Private'


function App() {
  return (
    <div className="App">
      <SignUpModal />
      <SignInModal />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cards/spell' element={<Spell/>}/>
        <Route path='/cards/trap' element={<Trap/>}/>
        <Route path='/cards/monster' element={<Monster/>}/>
        <Route path="/private" element={<Private />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
