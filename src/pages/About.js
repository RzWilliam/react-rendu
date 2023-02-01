import React, { memo } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div>
        About
        <Link to="/about/infos">About infos</Link>
        <Link to="/about/contact">About contact</Link>

        <Outlet/>
    </div>
  )
}