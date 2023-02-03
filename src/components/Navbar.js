import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/cards/spell">Spell Cards</Link>
        <br/>
        <Link to="/cards/trap">Trap Cards</Link>
        <br/>
        <Link to="/cards/monster">Monster Cards</Link>
    </>
  )
}