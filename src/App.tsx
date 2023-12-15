import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./context/Context";
import { FirebaseProvider } from "./context/FirebaseContext";

function App() {
  return (
    <BrowserRouter>
      <FirebaseProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart/*" element={<Cart />} />
          </Routes>
          <Footer />
        </CartProvider>
      </FirebaseProvider>
    </BrowserRouter>
  );
}

export default App;
