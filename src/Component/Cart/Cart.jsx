import React from "react";
import { Link } from "react-router-dom";
import "./cartStyles.css";
function Cart(props) {
  return (
    <>
      <div className="container d-flex justify-content-center mt-5 ">
        <div className="row mt-5">
          <div
            className="col-lg-4"
            style={{
              width: "250px",
              height: "250px",
              marginRight: "30px",
            }}
          >
            <img
              src={props.product.image}
              alt=""
              width="250px"
              height="250px"
            />
          </div>
          <div className="col-lg-4 mx-4" style={{ width: "300px" }}>
            <h6>{props.product.title}</h6>
            <h6>$ {props.product.price}</h6>
            <div className="buttons">
              <button>
                <span>+</span>
              </button>
              <span>0</span>
              <button>
                <span>-</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/products">
        <button className="btn btn-dark  fs-5 mx-5 mt-3 float-end">
          Continue Shopping
        </button>
      </Link>
    </>
  );
}

export default Cart;
