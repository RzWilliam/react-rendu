import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../context/ApiContext'
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
import {UserContext} from "../context/userContext"
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

export default function Cards() {
    const {items, error} = useContext(ApiContext)
    const {currentUser} = useContext(UserContext)
    const [cardClicked, setCardClicked] = useState(null)
    
    const [favorites, setFavorites] = useState([])
    const getArray =  JSON.parse(localStorage.getItem('favorites') || '0')

    function handleClick(e){
      setCardClicked(e)
    }

    function handleClose(){
      setCardClicked(null)
    }

    function addFav(props){
      let array = favorites;
      let addArray = true;
      array.map((item, key) =>{
        if(item === props.i){
          array.splice(key, 1)
          addArray = false
        }
      });
      if(addArray){
        array.push(props.i)
      }
      setFavorites([...array])
      localStorage.setItem("favorites", JSON.stringify(favorites))

      let storage = localStorage.getItem('favItem' + (props.i) || 0)
      if(storage === null){
        localStorage.setItem(('favItem' + (props.i)), JSON.stringify(props.data))
      } else{
        localStorage.removeItem('favItem' + (props.i))
      }
    }

    useEffect(() => {
      if(getArray !== 0){
        setFavorites([...getArray])
      }
    }, [])

  return (
        <>
            <section className="container">
                {items.map((data, i) => (
                        <div className="allcards">
                          {currentUser &&
                            <>
                              {favorites.includes(i) ? (
                                <IoIosHeart onClick={() => addFav({data, i})} style={{color: 'red'}}/>
                              ): (
                                <IoIosHeartEmpty onClick={() => addFav({data, i})} style={{color: 'red'}}/>
                              )}
                            </> 
                          }

                          <div onClick={() => handleClick(data)}>
                            <div key={i} className="card">
                              <img src={data.card_images[0].image_url} alt={data.name} className="full_card"/>
                              <div className="dark"></div>
                              <img src={data.card_images[0].image_url_cropped} alt={data.name} className="cropped"/>
                              <p className="title"> {data.name} </p> 
                            </div>
                          </div>
                          
                          
                        </div>
                ))}
                {items.length < 1 && error && <p>{error}</p>}

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
            </section>
            
         </>
  )
}
