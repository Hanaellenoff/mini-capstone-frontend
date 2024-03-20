import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsNew } from "./ProductsNew";
import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json", useState).then((response) => {
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params) => {
    axios.get("http://localhost:3000/products.json", params);
    setProducts([...products, response.data]);
  };

  useEffect(handleIndexProducts, []);
  return (
    <main>
      <h1>Welcome to React!</h1>
      <div>
        <ProductsNew onCreate={handleCreateProduct} />
        <ProductsIndex products={products} />
      </div>
    </main>
  );
}
