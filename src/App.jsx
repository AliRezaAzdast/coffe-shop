
import { useState } from "react";
import Svg from './svg/Svg'
import Header from './components/Header/Header'
import HeroSection from './components/Main/HeroSection'
import Products from './components/Main/Products/Products'
import ProdcutBanner from "./components/Main/ProdcutBanner";
import ProdcutCatagory from "./components/Main/ProdcutCatagory";
import PopularProducts from "./components/Main/PopularProducts/PopularProducts";
import CoffeeClub from "./components/Main/CoffeeClub";
import Blog from "./components/Main/Blog/Blog";
import ContactUs from "./components/Main/ContactUs";
import Services from "./components/Main/Services/Services";
import Footer from "./components/Footer/Footer";

export default function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
    <Svg/>
    <Header cart={cart}/>
    <HeroSection/>
    <Products cart={cart} setCart={setCart} />
    <ProdcutBanner/>
    <ProdcutCatagory/>
    <PopularProducts cart={cart} setCart={setCart} />
    <CoffeeClub/>
    <Blog/>
    <ContactUs/>
    <Services/>
    <Footer/>
    </>
  )
}
