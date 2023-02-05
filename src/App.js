import Navbar from './components/Navbar';
import Home from './pages/Home';
import './style.scss';
import {Routes, Route} from "react-router-dom";
import Spell from './pages/Spell';
import Trap from './pages/Trap';
import Monster from './pages/Monster';
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";
import Private from './pages/Private';
import React,{useState, useEffect} from 'react';


function App() {

  // Darkmode

  const getTheme = () =>{
    return JSON.parse(localStorage.getItem("theme")) || false
  }

  const [theme, setTheme] = useState(getTheme());
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])


  // Anim on/off

  const getAnim = () =>{
    return JSON.parse(localStorage.getItem("anim")) || false
  }

  const [anim, setAnim] = useState(getAnim());
  useEffect(() => {
    localStorage.setItem("anim", JSON.stringify(anim))
  }, [anim])


  return (
    <div className={`App ${theme ? "darkmode" : ""} ${anim ? "animoff" : ""}`}>
      <div className='checkbox'>
        <div className='div_darkmode'>
          <input type="checkbox" onChange={()=>setTheme(!theme)} checked={theme ? "true": ""}/>
          <span>Dark mode</span>
        </div>
        <div className='div_anim'>
          <input type="checkbox" onChange={()=>setAnim(!anim)} checked={anim ? "true": ""}/>
          <span>Card animation </span>
        </div>
      </div>
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
