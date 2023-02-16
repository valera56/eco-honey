import React, { useContext, useEffect } from 'react'
import { todosContext } from '../../contexts/TodosComtext'
import "../PlaginetionCommit/PlaginetionCommit.css"
function PlaginetionCommit() {


    const {limit, totalCount, page, setPage ,getPagination} = useContext(todosContext)

    useEffect(() => {
        getPagination(page);
      }, [page]);
      const pageLength = Math.ceil(totalCount / limit);
  return (
    pageLength &&
    [...Array(pageLength).keys()].map((el) => (
      <div className="plagin">
        <button 
          className={  page === el + 1 ? "active "  : "nooy_active"}
          onClick={() => setPage(el + 1)}
        >
          {el + 1}
        </button>
      </div>
    ))
  )
    }

export default PlaginetionCommit