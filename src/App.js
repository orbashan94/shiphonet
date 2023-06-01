import { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BannerHero from "./components/BannerHero";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <>
      <Navbar setCartIsShown={setCartIsShown} />
      <main>
        <BannerHero />
        <Products />
        {cartIsShown && <Cart setCartIsShown={setCartIsShown} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
