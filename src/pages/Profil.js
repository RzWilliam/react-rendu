import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profil() {
    const params = useParams()
    console.log(params)

  return (
    <div>{params.name}</div>
  )
}