import Navbar from './components/Navbar';
import Home from './pages/Home';
import './style.scss'
import {Routes, Route} from "react-router-dom"
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
      <SignUpModal />
      <SignInModal />
      <Navbar theme={theme} setTheme={setTheme} anim={anim} setAnim={setAnim}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/private" element={<Private />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
