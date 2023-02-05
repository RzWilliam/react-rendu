import { createContext, useState } from "react";


export const ApiContext = createContext()

export function ApiContextProvider(props){

    const [page, setPage] = useState(0)
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState('')
    const [type, setType] = useState(null)
    const [race, setRace] = useState(null)
    const [level, setLevel] = useState(null)
    const [attribute, setAttribute] = useState(null)

      return(
        <ApiContext.Provider value={{page, setPage, items, setItems, error, setError, url, setUrl, type, setType, race, setRace, level, setLevel, attribute, setAttribute}}>
            {props.children}
        </ApiContext.Provider>
      )
}