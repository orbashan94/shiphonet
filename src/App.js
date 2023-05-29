import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BannerHero from "./components/BannerHero";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <BannerHero />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
