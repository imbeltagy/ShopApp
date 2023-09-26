import { useParams } from "react-router-dom";
import Main from "../Components/Main";
import products from "./../assets/Products";

const SingleProduct = () => {
  const { productID } = useParams();

  const notProduct = productID > products.length - 1 || productID < 0 || isNaN(productID);

  if (notProduct) return <Main title="Not A Product"></Main>;

  const product = products[productID];

  return (
    <Main title={product.name}>
      <div className="row row-cols-lg-2 gy-4 gx-lg-4">
        <div className="img-container">
          <img className="w-100" src={product.image} alt={product.name} />
        </div>
        <div className="details">
          <div className="card">
            <div className="card-body">
              <div className="row mx-0 mb-2 align-items-center">
                <div className="btn btn-warning rounded-0 d-block col-3 col-lg-4">Add To Cart</div>
                <small className="col-auto">
                  Price:{" "}
                  <span className="text-success fw-bold fs-5">
                    ${(product.price - product.price * product.discount).toFixed(2)}
                  </span>{" "}
                  <del className="text-body-secondary">${product.price}</del>
                </small>
              </div>
              <div className="row mx-0 mb-3 align-items-center">
                <div className="btn btn-warning rounded-0 d-block col-3 col-lg-4">Buy Now</div>
                <small className="col-auto ">
                  Stock:{" "}
                  <span className={(product.stock <= 15 ? "text-danger" : "text-warning") + " fw-bold fs-5"}>
                    {product.stock}
                  </span>{" "}
                  piece{product.stock > 1 && "s"}
                </small>
              </div>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.details}</p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SingleProduct;
