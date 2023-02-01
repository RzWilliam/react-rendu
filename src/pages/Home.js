import React, { useState } from 'react'
import API from '../components/API'
import Auth from '../components/Auth'

export default function Home() {
    const [page, setPage] = useState(0)

    function nextPage(){
        setPage(page + 1)
        console.log(page)
    }
  return (
    <div>
        <p onClick={nextPage}>Home</p>
        <API page={page}/>
        <Auth/>
    </div>
  )
}