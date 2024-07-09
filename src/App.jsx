import { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./components/generalSHop/Shop";
import Nav from "./components/Nav";
import { WebContext } from "./helper/Context";
import Cartt from "./components/cart/Cartt";
import Footer from "./components/Footer";
import CheckPage from "./components/checkout/CheckPage";

function App() {
  const [cart, setCart] = useState([]);
  const [state, setState] = useState("Shop");
  const [sum, setSum] = useState(0);
  return (
    // <Router>
    //   <WebContext.Provider value={{ cart, setCart }}>
    //     <Nav />
    //     <Routes>
    //       {state === "Shop" && <Route path="/" element={<GeneralShop />} />}
    //       {state === "Cart" && <Route path="cart" element={<Cart />} />}
    //     </Routes>
    //   </WebContext.Provider>
    // </Router>

    <WebContext.Provider
      value={{ cart, setCart, state, setState, sum, setSum }}
    >
      <Nav />
      {state === "Shop" && <Shop />}
      {state === "Cart" && <Cartt />}
      {state === "Pay" && <CheckPage />}
      <Footer />
    </WebContext.Provider>
  );
}

export default App;
