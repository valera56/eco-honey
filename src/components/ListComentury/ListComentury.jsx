import { Button, Rating } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { todosContext } from "../../contexts/TodosComtext";
import "../ListComentury/ListComentury.css";
import "../ListComentury/MediaList.css"
function ListComentury(props) {
  const { getCommetaty } = useContext(todosContext);

  useEffect(() => {
    getCommetaty();
  }, []);

  return (
    <div  className="list_coments">
      <li className="block_li">
        <ul className="list_name">
          <li  className="li_name">{props.coment.username}</li>
        </ul>
        <ul className="lict_value">
          <li className="li_coment">{props.coment.text}</li>   
        
        </ul>
        <li className="gpate" > <span className="stars" >&#9733;</span><p className="liGrate"> {props.coment.mark}/5</p></li>
      </li>
    </div>
  );
}

export default ListComentury;
