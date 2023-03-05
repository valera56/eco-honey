import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { todosContext } from "../../contexts/TodosComtext";
import ProductsList from "../ProductsList/ProductsList";

const Products = () => {
  const { getTodos, todos } = useContext(todosContext);
  const { t } = useTranslation();
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="products">
  <div className="products__container">
    <div className="products__title">
      <h2 className="title"> {t("Products")} </h2>
    </div>
    <div className="products__category">
      <select>
        <option className="products__option-sort"> {t("Sort by")} </option>
      </select>
      <select>
        <option className="products__option-category"> {t("Categories")} </option>
      </select>
      <div className="product__flex_wrap">
      {
         todos.map((todo) => {
        return <ProductsList todo={todo} key={todo.id} />;
      })
      }
      </div>
    </div>
  </div>
</div>
    
  
    
  
    
)
}
export default Products;
