import React from "react";
import { Link } from "react-router-dom";
import "./productDetailsStyles.css";

function Productdetails(props) {
  return (
    <>
      <Link to="/products">
        <button className="btn btn-dark  fs-5 mx-5 mt-3 ">
          <i class="fa fa-chevron-left mx-2" aria-hidden="true"></i>
          Back
        </button>
      </Link>

      <div
        className="container d-flex justify-content-center justify-content-evenly mt-4"
        id="productDetails"
      >
        <div className="row">
          <div
            className="col-lg-6 col-md-6  col"
            style={{ height: "400px", width: "400px", marginRight: "30px" }}
          >
            <div className="card">
              <img
                src={props.product.image}
                class="card-img-top "
                alt="..."
                width="300px"
                height="400px"
                style={{ padding: "10px" }}
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col"
            style={{
              height: "500px",
              width: "500px",
            }}
          >
            <div class="card-body">
              <h4 class="card-title ">{props.product.title}</h4>
              <p class="card-text mt-3 fs-3">${props.product.price}</p>
              <p class="card-text mt-3 fs-5 active">
                Rating:{props.product.rating.rate}
              </p>
              <p className="">{props.product.description}</p>

              <div className="buttons mt-4">
                <button className="btn btn-dark ">
                  <i class="fa fa-cart-plus mx-2" aria-hidden="true"></i>Add To
                  Cart{" "}
                </button>
                <button className="btn btn-dark mx-5 ">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productdetails;
