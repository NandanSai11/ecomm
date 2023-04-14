import React from "react";
import { Link } from "react-router-dom";

function Allproduct(props) {
  const imageClickHandler = (item) => {
    console.log(item);
    // setProduct(item);
    props.setProduct(item);

    // console.log(setProduct,product);
  };

  console.log(props.cartItems.length);
  const cartHandler = (item) => {
    console.log("item", item.id);
    console.log("before:", props.cartItems);

    if (props.cartItems.length >= 1) {
      props.cartItems.push("hi");
    } else {
      props.setCartItems([...props.cartItems, { item }]);
    }
    // if (props.cartItems.length >= 1) {
    //   for (let i = 0; i > props.cartItems.length; i++) {
    //     for (let j = 0; j > props.cartItems.length; j++) {
    //       const sameId = props.cartItems.map((ele) => {
    //         console.log("ele", ele.id);
    //       });
    //       if (item.id === sameId) {
    //         props.setCartItems([...props.cartItems, { item }]);
    //       } else {
    //         props.setCartItems([...props.cartItems, { item }]);
    //       }
    //     }
    //   }
    // } else {
    //   props.setCartItems([...props.cartItems, { item }]);
    // }
    props.setCartItems([...props.cartItems, { item }]);
    props.setCartItemsCount((prevState) => prevState + 1);
  };
  return (
    <>
      {props.data.map((item, index) => {
        item.quantity = 1;
        return (
          <>
            <div className="container mt-5" key={index}>
              <div className="row">
                {props.data.map((item) => {
                  <div className="col col-lg-3 col-sm-6  mt-1 " key={index}>
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
                              Add To Cart
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
                  </div>;
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Allproduct;
