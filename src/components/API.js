// import md5 from "js-md5";
import React, { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";
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

export default function API(props){

    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const {page, setPage} = useContext(ApiContext)

    function previousPage(){
      setPage(page-1)
      window.scrollTo(0, 0)
    }

    function nextPage(){
        setPage(page + 1)
        window.scrollTo(0, 0)
    }

    const [cardClicked, setCardClicked] = useState(null)
    function handleClick(e){
      setCardClicked(e)
    }

    function handleClose(){
      setCardClicked(null)
    }

    let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${page*20}${props.type ? "&type="+props.type : ''}${props.fname ? "&fname="+props.fname : ''}${props.atk ? "&atk="+props.atk : ''}`
    React.useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
                if(result.data){
                  setIsLoaded(true);
                  setItems(result.data);
                } else{
                  setItems([])
                  setError('No card')
                }
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [page, url])

    return(
        <>
            <section className="container">
                {items.map((data, i) => (
                      <div onClick={() => handleClick(data)} className="allcards">
                        <div key={i} className="card">
                          <img src={data.card_images[0].image_url} alt={data.name} className="full_card"/>
                          <div className="dark"></div>
                          <img src={data.card_images[0].image_url_cropped} alt={data.name} className="cropped"/>
                          <p className="title"> {data.name} </p>
                        </div>
                      </div>
                ))}
                {items.length < 1 && error && <p>{error}</p>}

                  {cardClicked ? 
                  
                  <section className="card_detail">
                    <div className={`card_info ${cardClicked.type}`}>
                      <img src={close} onClick={handleClose} className="close"/>

                      <div className="title">
                        <h1>{cardClicked.name}</h1>
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

                      {cardClicked.level ? <div className="lvl">
                        {Array(cardClicked.level).fill().map((_, i) => (
                          <img key={i} src={lvl} alt={cardClicked.level}/>
                        ))}
                      </div> : ""}
                      
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
                
                : "" }

                

            </section>
            <div className="btn_prev_next">
              {page > 0 && 
                <button onClick={previousPage}>
                  Previous Page
                </button>
              }
              {items.length > 19 &&
                <button onClick={nextPage}>
                  Next Page
                </button>
              }
            </div>
        </>
    )
}