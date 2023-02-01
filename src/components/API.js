// import md5 from "js-md5";
import React from "react";

export default function API(props){

    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=${props.page*10}`)
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
      }, [props.page])

    return(
        <>
            <section className="container">
                {items.map((data, i) => (
                    <div key={i} className="card">
                        <img src={data.card_images[0].image_url} alt={data.name}/>
                    </div>
                ))}
            </section>
        </>
    )
}