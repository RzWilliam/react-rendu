import React, { useState } from 'react'

export default function Search() {
    const [search, setSearch] = useState('')

    function handleChange(e){
        setSearch(e.target.value)
    }
  return (
    <div>
        <input placeholder='Search card ...' value={search} onChange={handleChange}/>
    </div>
  )
}