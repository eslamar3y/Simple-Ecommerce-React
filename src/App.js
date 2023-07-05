import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About.js";
import ProductDetails from "./components/ProductDetails.js";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ProductsList />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
