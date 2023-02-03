import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import avatar from "../assets/avatar.png"
import banner from "../assets/banner.png"

export default function Navbar () {
  return (
    <section className='section_nav'>
      <div className='navbar'>
        <div className='logo'>
        <a href=''><img src={logo}></img></a>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/cards/spell">Spell Cards</Link>          <Link to="/cards/trap">Trap Cards</Link>
          <Link to="/cards/monster">Monster Cards</Link>
        </div>
        <div className='avatar'>
          <a href=''><img src={avatar}></img></a>
        </div>
      </div>
      <img className='banner' src={banner}></img>
    </section>
  )
}
