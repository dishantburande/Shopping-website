import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import Header from "./components/header/Header.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Virtual from "./components/Virtual/Virtual.jsx";
import Products from "./components/Products/Products.jsx"
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
