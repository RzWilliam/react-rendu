// import md5 from "js-md5";
import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

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
                      <div key={i} className="card">
                        <img src={data.card_images[0].image_url} alt={data.name} className="full_card"/>
                        <div className="dark"></div>
                        <img src={data.card_images[0].image_url_cropped} alt={data.name} className="cropped"/>
                        <p className="title"> {data.name} </p>
                      </div>
                ))}
                {items.length < 1 && error && <p>{error}</p>}
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