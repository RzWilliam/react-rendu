import { createContext, useState, useEffect } from "react";


export const ApiContext = createContext()

export function ApiContextProvider(props){

    const [page, setPage] = useState(0)

      return(
        <ApiContext.Provider value={{page, setPage}}>
            {props.children}
        </ApiContext.Provider>
      )
}