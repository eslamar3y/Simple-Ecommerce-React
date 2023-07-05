import { Link } from "react-router-dom";

function Product(props) {
  return (
    <>
      <div className="card col-3">
        <img
          src={props.product.image}
          className="card-img-top"
          alt={props.product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{props.product.title.slice(0, 50)}...</h5>
          <p className="card-text">
            {props.product.description.slice(0, 100)}...
          </p>
          <Link className="btn btn-primary" to={`/product/${props.product.id}`}>
            Details
          </Link>
        </div>
      </div>
    </>
  );
}

export default Product;
