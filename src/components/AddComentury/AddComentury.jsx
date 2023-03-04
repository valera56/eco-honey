import React, { useContext, useEffect, useState } from "react";
import { todosContext } from "../../contexts/TodosComtext";
import ListComentury from "../ListComentury/ListComentury";
import "../AddComentury/AddComentury.css";
import PlaginetionCommit from "../PlaginetionCommit/PlaginetionCommit";
import GrateStar from "../GrateStar/GrateStar";
import "../AddComentury/Media.css";
import { useTranslation } from "react-i18next";
function AddComentury() {
  const { commit, getCommetaty, addComent, rating } = useContext(todosContext);
  const [isCometyru, setIsCometyru] = useState(false);
  const [inpValueName, setInpValueName] = useState("");
  const [inpValueComent, setInpValueComent] = useState("");
  const { t } = useTranslation();
  useEffect(() => {
    getCommetaty();
  }, []);


     const handleClick = () => {
    setIsCometyru(false);
    const obj = {
      username: inpValueName,
      text: inpValueComent,
      mark: rating,
    }; 
  

  
    addComent(obj);
    setInpValueName("");
    setInpValueComent("");
  };

  return (
    <div className="add_coment">
      <div className="block_reviews">
        <h2 className="reviews"> {t("Reviews")} </h2>
      </div>
      <ul className="ul_coment">
        {isCometyru ? (
          <div className="block_coment2">
            <input
              className="inpName"
              value={inpValueName}
              type="text"
              onChange={(e) => setInpValueName(e.target.value)}
              placeholder={t("Name")}
            />
            <input
              className="inpcommit"
              value={inpValueComent}
              type="text"
              onChange={(e) => setInpValueComent(e.target.value)}
              placeholder={t("Feedback text")}
            />
            <button className="bnt_add" onClick={handleClick}>
              {t("Add")}
            </button>
            <GrateStar />
            <button className="x" onClick={() => setIsCometyru(false)}>
              {t("close")}
            </button>
          </div>
        ) : (
          <div className="block_add">
            <button className="bnt_com" onClick={() => setIsCometyru(true)}>
              {t("Leave feedback")}
            </button>
          </div>
        )}
       
       {commit ? commit.map((coment) => {
          return <ListComentury coment={coment} key={coment.id} />;
          }): " "}
      </ul>

      <div className="plaginetion">
        <PlaginetionCommit />
      </div>
    </div>
  );
}

export default AddComentury;
