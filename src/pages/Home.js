import React, { useState } from 'react'
import API from '../components/API'
import Search from '../components/Search'

export default function Home() {
  return (
    <div>
        <Search/>
        <API/>
    </div>
  )
}