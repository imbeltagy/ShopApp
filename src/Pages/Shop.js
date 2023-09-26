import { Link } from "react-router-dom";
import Main from "../Components/Main";
import products from "./../assets/Products";

const Shop = () => {
  return (
    <Main title="Latest Posts" className="row g-3 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      {products.map((e) => (
        <Product
          key={e.id}
          productID={e.id}
          name={e.name}
          image={e.image}
          description={e.description}
          price={e.price}
          discount={e.discount}
        />
      ))}
    </Main>
  );
};

const Product = ({ productID, name, image, description, price, discount }) => (
  <div>
    <div className="card h-100">
      <img src={image} alt={name[0]} className="card-img-top" />
      <div className="card-body d-flex flex-column">
        <h3 className="card-text mb-0 fs-6 text-capitalize fw-bold" style={{ width: "fit-content" }}>
          {name}
        </h3>
        <hr className="line" />
        <p className="card-text flex-grow-1">{description}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            Price: <del>${price}</del> <span className="text-success">${(price - price * discount).toFixed(2)}</span>
          </small>
        </p>
        <Link to={`${productID}`} className="btn btn-primary">
          more details
        </Link>
      </div>
    </div>
  </div>
);

export default Shop;
