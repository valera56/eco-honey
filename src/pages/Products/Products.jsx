import React, { useContext, useEffect } from "react";
import img1 from "../../Assets/images/img1.png";
import img2 from "../../Assets/images/img2.png";
import img3 from "../../Assets/images/img3.png";
import img4 from "../../Assets/images/img4.png";
import { todosContext } from "../../contexts/TodosComtext";
import ProductsList from "../ProductsList/ProductsList";

const Products = () => {
  const { getTodos, todos } = useContext(todosContext);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <section className="products">
  <div className="products__container">
    <div className="products__title">
      <h2 className="title">Продукты</h2>
    </div>
    <div className="products__category">
      <select>
        <option className="products__option-sort">Сортировать по</option>
      </select>
      <select>
        <option className="products__option-category">Категории</option>
      </select>
      <div>
      {
         todos.map((todo) => {
        return <ProductsList todo={todo} key={todo.id} />;
      })
      }
      </div>
    </div>
  </div>
</section>
    
  
    
  
    
)
}
export default Products;
