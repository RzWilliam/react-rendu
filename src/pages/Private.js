import React, {useContext, useState} from 'react'
import {UserContext} from "../context/userContext"
import { Navigate } from "react-router-dom"
import close from "../assets/close.svg"
import DARK from "../assets/monsters/DARK.png"
import DIVINE from "../assets/monsters/DIVINE.png"
import EARTH from "../assets/monsters/EARTH.png"
import FIRE from "../assets/monsters/FIRE.png"
import LIGHT from "../assets/monsters/LIGHT.png"
import WATER from "../assets/monsters/WATER.png"
import WIND from "../assets/monsters/WIND.png"
import SPELL from "../assets/monsters/SPELL.png"
import TRAP from "../assets/monsters/TRAP.png"
import lvl from "../assets/monsters/LEVEL.png"

export default function Private() {

  const {currentUser} = useContext(UserContext)
  const [cardClicked, setCardClicked] = useState(null)


  let favList = [{}]
  const getArray = JSON.parse(localStorage.getItem('favorites') || '0')
  for (let i = 0; i < getArray.length; i++){
    let x = getArray[i]
    favList[i] = JSON.parse(localStorage.getItem('favItem' + [x]))
  }

  if(!currentUser) {
    return <Navigate to="/" />
  }

  function handleClick(e){
    setCardClicked(e)
  }

  function handleClose(){
    setCardClicked(null)
  }

  return (
    <>
      <p className='text-center mt-4'>Hello {currentUser.email}</p>
      <p className='text-center mt-4'>Your likes :</p>
      <div className="container">
        
        {favList.slice(1).map((data, i) => (
          <div className="allcards" style={{cursor : 'pointer'}}>
            <div key={i} className="card" onClick={() => handleClick(data)}>
              <img src={data.card_images[0].image_url} alt={data.name} className="full_card"/>
              <div className="dark"></div>
                <img src={data.card_images[0].image_url_cropped} alt={data.name} className="cropped"/>
                <p className="title"> {data.name} </p>
              </div>
            </div>
        ))}

        {cardClicked && 
                  
                  <section className="card_detail">
                    <div className={`card_info ${cardClicked.type}`}>
                      <img src={close} onClick={handleClose} className="close" alt='Close'/>

                      <div className="title">
                        <h1>{cardClicked.name}</h1>

                      </div>

                      <div className='bottomTitle'>
                        {cardClicked.level && 
                        <div className="lvl">
                          {Array(cardClicked.level).fill().map((_, i) => (
                            <img key={i} src={lvl} alt={cardClicked.level}/>
                          ))}
                        </div>
                        } 
                        <div className='image_container'>
                          {cardClicked.attribute == "DARK" ? <img src={DARK} className="attribute"/> : "" }
                          {cardClicked.attribute == "DIVINE" ? <img src={DIVINE} className="attribute"/> : "" }
                          {cardClicked.attribute == "EARTH" ? <img src={EARTH} className="attribute"/> : "" }
                          {cardClicked.attribute == "FIRE" ? <img src={FIRE} className="attribute"/> : "" }
                          {cardClicked.attribute == "LIGHT" ? <img src={LIGHT} className="attribute"/> : "" }
                          {cardClicked.attribute == "WATER" ? <img src={WATER} className="attribute"/> : "" }
                          {cardClicked.attribute == "WIND" ? <img src={WIND} className="attribute"/> : "" }
                          {cardClicked.frameType == "trap" ? <img src={TRAP} className="attribute"/> : "" }
                          {cardClicked.frameType == "spell" ? <img src={SPELL} className="attribute"/> : "" }
                        </div>
                      </div>
                      
                      <img src={cardClicked.card_images[0].image_url_cropped} alt={cardClicked.name} className="cropped"/>
                      
                      <div className="text">

                        <div className="race_type">
                          {cardClicked.race ? <p className="race">{cardClicked.race}</p> : "" }
                          {cardClicked.type ? <p className="type">{cardClicked.type}</p> : "" }
                        </div>

                        <p className="desc">{cardClicked.desc}</p>

                        <div className="atk_def">
                          {cardClicked.atk ? <p className="atk">ATK/ {cardClicked.atk}</p> : "" }
                          {cardClicked.atk ? <p className="def">DEF/ {cardClicked.def}</p> : "" }
                        </div>
                      </div>
                      
                    </div>
                    <div src={close} onClick={handleClose} className="black_bg"></div>

                  </section> 
                
                }
      </div>
    </>
  )
}