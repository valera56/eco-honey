import { Button, Rating } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { todosContext } from "../../contexts/TodosComtext";
import "../ListComentury/ListComentury.css";
function ListComentury(props) {
  const { getCommetaty, deleteComents } = useContext(todosContext);

  const handleDeleteClick = () => { 
    deleteComents(props.coment.id);
    getCommetaty();
  };

  useEffect(() => {
    getCommetaty();
  }, []);

  return (
    <div  className="list_coments">
      <li className="block_li">
        <ul className="list_name">
          <li  className="li_name">{props.coment.name}</li>
        </ul>
        <ul className="lict_value">
          <li className="li_coment">{props.coment.comment}</li>   
         <button className="delete_btn" onClick={handleDeleteClick}>удалить</button>
        </ul>
        <li className="gpate" > <span className="stars" >&#9733;</span> {props.coment.valueStar}/5</li>
      </li>
    </div>
  );
}

export default ListComentury;
