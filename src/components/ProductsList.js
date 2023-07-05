import { useEffect, useState } from "react";
import Product from "./Product";
import "../ProductList.css";

function ProductsList() {
  const ApiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(ApiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${ApiUrl}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    fetch(`${ApiUrl}/category/${catName}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p">Our Products</h2>
      <div className="container">
        <div className="categories">
          <button
            className="btn btn-primary categoriesButtons"
            onClick={() => {
              getProducts();
            }}
          >
            All
          </button>
          {categories.map((category) => {
            return (
              <button
                key={category}
                className="btn btn-primary categoriesButtons"
                onClick={() => {
                  getProductInCategory(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="row">
          {products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
