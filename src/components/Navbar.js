import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import avatar from "../assets/avatar.png"
import banner from "../assets/banner.png"
import {UserContext} from "../context/userContext"
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import {auth} from "../firebase-config"

export default function Navbar (props) {

  const {currentUser, toggleModals} = useContext(UserContext)
  const [mouseOver, setMouseOver] = useState(false)

  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch {
      alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
    }
  }

  function handleMouseEnter(){
    setMouseOver(true)
  }

  function handleMouseOut(){
    setMouseOver(false)
  }


  return (
    <section className='section_nav'>
      <div className='navbar'>
        <div className='logo'>
        <Link to="/" style={{cursor: "pointer"}}><img src={logo} alt="Logo"></img></Link>
        </div>
        <div className='avatar dropdown' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
          <Link to='/private' ><img src={avatar} alt="Avatar"></img></Link>
          {mouseOver &&
          <div className="dropdown-menu" style={{margin : "40px 0 0", display: 'flex', flexDirection: 'column', width: "auto"}} aria-labelledby="dropdownMenuButton">
          {!currentUser &&
          <>
          <p 
          onClick={() => toggleModals("signUp")}
            className="dropdown-item">
            Sign Up
          </p>
          <p 
            onClick={() => toggleModals("signIn")}
            className="dropdown-item">
            Sign In
          </p>
          </>
          }
          {currentUser && 
          <p 
          onClick={logOut}
          className="dropdown-item text-danger">
            Log Out
          </p>
          }
            <p className='dropdown-item' onClick={()=>props.setTheme(!props.theme)}>
              {props.theme ? 'Disable' : 'Active'} Darkmode
            </p>
            <p className='dropdown-item' onClick={()=>props.setAnim(!props.anim)}>
            {props.anim ? 'Active' : 'Disable'} card animation
            </p>
          </div>
          }
          
        </div>
      </div>
      <img className='banner' src={banner} alt="Banner"></img>
    </section>
  )
}
