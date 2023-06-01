import { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BannerHero from "./components/BannerHero";
import Products from "./components/Products";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/cart-provider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(true);

  return (
    <CartProvider>
      <Navbar setCartIsShown={setCartIsShown} />
      <main>
        <BannerHero />
        <Products />
        {cartIsShown && <Cart setCartIsShown={setCartIsShown} />}
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
