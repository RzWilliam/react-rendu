import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import avatar from "../assets/avatar.png"
import banner from "../assets/banner.png"
import {UserContext} from "../context/userContext"
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import {auth} from "../firebase-config"

export default function Navbar () {

  const {currentUser, toggleModals} = useContext(UserContext)
  

  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch {
      alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <section className='section_nav'>
      <div className='navbar'>
        <div className='logo'>
        <span onClick={refreshPage} style={{cursor: "pointer"}}><img src={logo} alt="Logo"></img></span>
        </div>
        <div className='avatar'>
          <button 
          onClick={() => toggleModals("signUp")}
          className="btn btn-primary">
            Sign Up
          </button>
          <button 
            onClick={() => toggleModals("signIn")}
          className="btn btn-primary ms-2">
            Sign In
          </button>
          {currentUser && 
          <button 
          onClick={logOut}
          className="btn btn-danger ms-2">
            Log Out
          </button>
          }
          <a href=''><img src={avatar} alt="Avatar"></img></a>
        </div>
      </div>
      <img className='banner' src={banner} alt="Banner"></img>
    </section>
  )
}
