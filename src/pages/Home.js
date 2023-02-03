import React, { useState } from 'react'
import API from '../components/API'
import Search from '../components/Search'

export default function Home() {
  const [fname, setFname] = useState(0)

  return (
    <div>
        <Search stateChanger={setFname} />
        <API fname={fname ? fname : null}/>
    </div>
  )
}