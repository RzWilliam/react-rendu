
import loupe from "../assets/loupe.svg"
import React, { useContext, useState } from 'react'
import { ApiContext } from '../context/ApiContext'

export default function Search({stateChanger}) {
    const [search, setSearch] = useState('')
    const{page, setPage} = useContext(ApiContext)

    function handleChange(e){
        setSearch(e.target.value)
        stateChanger(e.target.value)
        setPage(0)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && e.target.value !== "") {
            
        }
    }

  return (
    <div className='searchbar'>
        <img src={loupe} className='loupe'></img>
        <input placeholder='Search card ...' value={search} onChange={handleChange}/>
    </div>
  )
}