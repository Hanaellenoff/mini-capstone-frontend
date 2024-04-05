import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsNew } from "./ProductsNew";
import { ProductsIndex } from "./ProductsIndex";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
// import { ProductsShowPage } from "ProductsShowPage";

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
        <Route path="/login" element={<Login />} />
        <Route path="/logoutlink" element={<LogoutLink />} />
        {/* <Route path="/products/:id" element={<ProductsShowPage />} /> */}
        <Route path="/productsnew" element={<ProductsNew onCreateProduct={handleCreateProduct} />} />
        <Route path="/" element={<ProductsIndex products={products} onShowProducts={handleShowProduct} />} />
      </Routes>
      <div>
        <Modal show={isProductsShowVisable} product={currentProduct} onClose={handleClose}>
          <h1>test</h1>
        </Modal>
      </div>
    </main>
  );
}
