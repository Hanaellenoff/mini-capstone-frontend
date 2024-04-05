import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mini-capstone-api-ocph.onrender.com";

function App() {
  const [flashMessage, setFlashMessage] = useState("");
  const getFlashMessageFromLocalStorage = () => {
    if (localStorage.flashMessage) {
      setFlashMessage(localStorage.flashMessage);
      localStorage.removeItem("flashMessage");
    }
  };

  useEffect(getFlashMessageFromLocalStorage, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div onClick={() => setFlashMessage(null)}>
          <h1>{flashMessage}</h1>
        </div>
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
