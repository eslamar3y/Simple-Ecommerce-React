import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../ProductDetails.css";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const api_url = "https://fakestoreapi.com/products";
  const params = useParams();
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <div className="ProdDetailsProduct container">
      <h1>Product Details - {product.title}</h1>
      <br />
      <img src={product.image} alt="" />
      <h3>Price: {product.price}$</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
