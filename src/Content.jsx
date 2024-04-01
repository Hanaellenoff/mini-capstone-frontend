import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsNew } from "./ProductsNew";
import { ProductsIndex } from "./ProductsIndex";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json", useState).then((response) => {
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params) => {
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
    });
  };

  const [isProductsShowVisable, setIsProductsShowVisable] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleShowProduct = (product) => {
    setIsProductsShowVisable(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    setIsProductsShowVisable(false);
  };

  useEffect(handleIndexProducts, []);
  return (
    <main>
      <h1>Welcome to React!</h1>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <div>
        <Login />
        <LogoutLink />
        <ProductsNew onCreateProduct={handleCreateProduct} />
        <ProductsIndex products={products} onShowProducts={handleShowProduct} />
        <Modal show={isProductsShowVisable} onClose={handleClose}>
          <h1>test</h1>
        </Modal>
      </div>
    </main>
  );
}
