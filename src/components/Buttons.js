import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'

export default function Buttons() {

    const {page, items, setPage} = useContext(ApiContext);
    
    function previousPage(){
      setPage(page-1)
      window.scrollTo(0, 0)
    }

    function nextPage(){
        setPage(page + 1)
        window.scrollTo(0, 0)
    }

    return (
    <>
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