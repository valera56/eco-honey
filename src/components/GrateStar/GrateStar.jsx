import React, { useContext, useEffect, useState } from 'react'
import { todosContext } from '../../contexts/TodosComtext';
import "../GrateStar/GrateStar.css"
function GrateStar() {
    const {setRating, rating } = useContext(todosContext)

    const [hover, setHover] = useState(3);
  return (
   <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() =>   setRating(index) }
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
         
      })}
      
    </div>
  );
  
}

export default GrateStar