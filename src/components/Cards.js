import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'

export default function Cards() {
    const {items, error} = useContext(ApiContext)

  return (
        <>
            <section className="container">
                {items.map((data, i) => (
                      <div key={i} className="card">
                        <img src={data.card_images[0].image_url} alt={data.name} className="full_card"/>
                        <div className="dark"></div>
                        <img src={data.card_images[0].image_url_cropped} alt={data.name} className="cropped"/>
                        <p className="title"> {data.name} </p>
                      </div>
                ))}
                {items.length < 1 && error && <p>{error}</p>}
            </section>
         </>
  )
}
