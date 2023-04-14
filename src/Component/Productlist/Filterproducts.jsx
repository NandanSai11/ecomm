import React from "react";
import { Link } from "react-router-dom";

function Filterproducts(props) {
  const imageClickHandler = (item) => {
    console.log(item);
    // setProduct(item);
    props.setProduct(item);
    // console.log(setProduct,product);
  };

  const cartHandler = (item) => {
    console.log("before:", props.cartItems);
    props.setCartItems([...props.cartItems, { item }]);
    props.setCartItemsCount((prevState) => prevState + 1);
  };
  return (
    <>
      {props.filteredCate.map((item, index) => {
        return (
          <>
            <div className="container mt-2" key={index}>
              <div className="row">
                {props.filteredCate.map((item, index) => (
                  <div className="col-lg-3 col-md-6 mt-1 " key={index}>
                    <div className="card-group">
                      <div
                        className="card"
                        style={{
                          width: "18rem",
                          height: "540px",
                          border: "none",
                        }}
                      >
                        <Link to={`/productdetails/:${item.id}`}>
                          <img
                            src={item.image}
                            className="card-img-top p-4"
                            width="230px"
                            height="320px"
                            onClick={() => imageClickHandler(item)}
                          />
                        </Link>

                        <div className="card-body">
                          <div
                            className="sub-container1"
                            style={{
                              width: "300px",
                              height: "50px",
                              overflow: "hidden",
                            }}
                          >
                            <h6 className="card-title mx-3 p-2">
                              {item.title}
                            </h6>
                          </div>

                          <p className="card-text p-2 mx-3">$ {item.price}</p>
                          <div
                            className="buttons"
                            style={{
                              display: "flex",
                              alignItem: "center",
                              justifyContent: "center",
                              justifyContent: "space-around",
                            }}
                          >
                            <button
                              className="btn btn-dark "
                              onClick={() => cartHandler(item)}
                            >
                              <i
                                class="fa fa-cart-plus mx-2"
                                aria-hidden="true"
                              ></i>
                              Add To Cart{" "}
                            </button>

                            <Link to="/cart">
                              <button
                                className="btn btn-dark "
                                onClick={() => imageClickHandler(item)}
                              >
                                Buy Now
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Filterproducts;
