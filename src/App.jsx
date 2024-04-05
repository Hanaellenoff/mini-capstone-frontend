import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mini-capstone-api-ocph.onrender.com";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
