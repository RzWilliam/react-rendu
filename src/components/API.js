// import md5 from "js-md5";
import React from "react";
import { Link } from "react-router-dom";

export default function API(props){

    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [page, setPage] = React.useState(0)

    function previousPage(){
      setPage(page-1)
    }

    function nextPage(){
        setPage(page + 1)
        console.log(page)
    }

    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${page*20}&${props.type ? props.type : ''}`
    console.log(url)

    React.useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result.data)
              setIsLoaded(true);
              setItems(result.data);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
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
                        <img src={data.card_images[0].image_url} alt={data.name}/>
                      </div>
                ))}
            </section>
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
        </>
    )
}