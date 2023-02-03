import React, { useState } from 'react'
import loupe from "../assets/loupe.svg"

export default function Search() {
    const [search, setSearch] = useState('')

    function handleChange(e){
        setSearch(e.target.value)
    }
  return (
    <div className='searchbar'>
        <img src={loupe} className='loupe'></img>
        <input placeholder='Search card ...' value={search} onChange={handleChange}/>
    </div>
  )
}