// import md5 from "js-md5";
import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Buttons from "./Buttons";
import Cards from "./Cards";

export default function API(props){

    const [isLoaded, setIsLoaded] = React.useState(false);
    const {page, setItems, setError, type, race, level, attribute} = useContext(ApiContext)

    let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${page*20}${type ?type : ''}${props.fname ? "&fname="+props.fname : ''}${race ? race : ''}${level ? '&level='+level : ''}${attribute ? '&attribute='+attribute : ''}`
    React.useEffect(() => {
        // console.log(url)
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
            <Cards/>
            <Buttons/>
        </>
    )
}