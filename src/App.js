import { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BannerHero from "./components/BannerHero";
import Products from "./components/Products";
import Cart from "./components/cart/Cart";
import ImageDialog from "./components/ImageDialog";

import CartProvider from "./store/cart-provider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [displayDialog, setDisplayDialog] = useState(false);
  const [image, setImage] = useState("");

  return (
    <CartProvider>
      <Navbar setCartIsShown={setCartIsShown} />
      <main>
        <BannerHero />
        <Products setDisplayDialog={setDisplayDialog} setImage={setImage} />
        {displayDialog && (
          <ImageDialog image={image} setDisplayDialog={setDisplayDialog} />
        )}
        {cartIsShown && <Cart setCartIsShown={setCartIsShown} />}
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
