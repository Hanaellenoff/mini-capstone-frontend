import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProductsShowPage(product) {
  const [products, setProducts] = useState({});
  const params = useParams();

  const handleShowProducts = () => {
    axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(handleShowRecipe, []);

  return (
    <div id="products-show">
      <h2>{product.name}</h2>
      <p>{product.price} </p>
      <p>{product.description}</p>
    </div>
  );
}
