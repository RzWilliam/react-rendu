import React, { useState } from 'react'
import API from '../components/API'
import Filter from '../components/Filters/Filter'
import Search from '../components/Search'

export default function Home() {
  const [fname, setFname] = useState(0)

  return (
    <div>
        <Search stateChanger={setFname} />
        <Filter/>
        <API fname={fname ? fname : null}/>
    </div>
  )
}