import React, { useState } from "react";
import { Link } from "react-router-dom";
function Addcart(props) {
  // const quantity = props.cartItems.item.quantity;
  // const [numOfItems, setNumOfItems] = useState(quantity);
  //  const [cartItems] = props;
  //const [listItems, setListItems] = useState(props.cartItems);

  var cartItems = props.cartItems;
  if (cartItems.length > 0) {
    console.log("cartItems:", cartItems.length);
  }

  //console.log(props.product)
  // let filteredItems = cartItems.filter(
  //   (ele, ind) =>
  //     ind ===
  //     cartItems.findIndex(
  //       (elem) =>
  //         elem.item.id === ele.item.id && elem.item.title === ele.item.title
  //     )
  // );

  // console.log("filteredItems: ", filteredItems);
  const deleteItemHandler = () => {
    // setCartNumber(0);
    props.setCartItemsCount(0);
    props.setCartItems([]);
  };

  const deleteIndiviualHandler = (element) => {
    const arr = cartItems;
    const remove = cartItems.indexOf(element);
    arr.splice(remove, 1);

    console.log(arr);
    props.setCartItemsCount(props.cartItemsCount - 1);
  };

  // const itemCountPlusHandler = (element) => {
  //   console.log("id: ", element.item.id);
  //   const indexpos = filteredItems.indexOf(element);
  //   console.log("index pos: ", filteredItems[indexpos].item.id);
  //   if (filteredItems[indexpos].item.id === element.item.id) {
  //     setNumOfItems({ ...numOfItems.quantity, quantity: +1 });
  //     console.log(numOfItems.quantity);
  //   } else {
  //     setNumOfItems();
  //   }
  // };

  // const itemCountMinusHandler = (element) => {
  //   console.log("id: ", element.item.id);
  //   const indexpos = filteredItems.indexOf(element);
  //   console.log("index pos: ", filteredItems[indexpos].item.id);
  //   if (filteredItems[indexpos].item.id === element.item.id) {
  //     setNumOfItems({ ...numOfItems.quantity, quantity: -1 });
  //   } else {
  //     setNumOfItems();
  //   }
  // };

  const itemCountPlusHandler = (element) => {
    cartItems.map((ele, index) => {
      // const arr = filteredItems.indexOf(element);
      if (ele.item.id === element.item.id) {
        //return element.item.quantity++;
        return console.log("quantity +", ele.item.quantity++);
      } else {
        return ele;
      }
    });
  };

  const itemCountMinusHandler = (element) => {
    // console.log("click", element);

    // console.log("f", filteredItems);
    cartItems.map((ele) => {
      // const arr = filteredItems.indexOf(element);
      if (ele.item.id === element) {
        return console.log("quantity -", ele.item.quantity--);
      } else {
        return ele;
      }

      // return console.log("quantity", ele.item.quantity++);
    });
  };
  // const itemCountPlusHandler = () =>
  //   filteredItems.map((element) => {
  //     // const arr1 = filteredItems.indexOf(element);
  //     // console.log(arr1);
  //     console.log("ss", element.item.id);
  //     // if (filteredItems.item.id === element.item.id) {
  //     //   return { ...element, quantity: element.item.quantity + 1 };
  //     // } else {
  //     //   return element;
  //     // }
  //   });

  // const itemCountPlusHandler = (element) => {
  //   console.log("id: ", element.item.id);
  //   const indexpos = filteredItems.indexOf(element);
  //   console.log("index pos: ", filteredItems[indexpos].item.id);
  //   console.log();
  //   //console.log(filteredItems.item.id);
  //   if (filteredItems[indexpos].item.id === element.item.id) {
  //     return console.log("q", {
  //       quantity: element.item.quantity + 1,
  //     });
  //   } else {
  //     return element;
  //   }
  // };
  // const itemCountMinusHandler = (x) => {
  //   console.log(filteredItems);
  //   if (filteredItems.item.id == x.item.id) {
  //     setNumOfItems((prevState) => prevState - 1);
  //   } else {
  //     setNumOfItems(0);
  //   }
  // };
  return (
    <>
      <Link to="/products">
        <button className="btn btn-dark  fs-5 mx-5 mt-3 float-start">
          Continue Shopping
        </button>
      </Link>
      <button
        className="btn btn-dark fs-5 mx-5 mt-3 float-end "
        onClick={deleteItemHandler}
      >
        Delete All
      </button>
      {cartItems.length <= 0 ? (
        <h1 style={{ textAlign: "center", marginTop: "10%" }}>
          Your Cart Is Empty
        </h1>
      ) : (
        cartItems.map((element, index) => {
          return (
            <>
              <div key={index}>
                {/* <p>{element.item.title}</p> */}
                <div className="container d-flex justify-content-center mt-5 ">
                  <div className="row mt-5">
                    <div
                      className="col-lg-4 col-sm-3"
                      style={{
                        width: "250px",
                        height: "250px",
                        marginRight: "30px",
                      }}
                    >
                      <img
                        src={element.item.image}
                        alt=""
                        width="250px"
                        height="250px"
                      />
                    </div>
                    <div className="col-lg-4 mx-4" style={{ width: "300px" }}>
                      <h6>{element.item.title}</h6>
                      <h6>$ {element.item.price}</h6>
                      <label style={{ fontWeight: "bold" }}>Quantity</label>
                      &nbsp;
                      {/* <input
                        type="number"
                        style={{ width: "40px", height: "40px" }}
                      /> */}
                      <div className="buttons">
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => itemCountPlusHandler(element)}
                        >
                          +
                        </button>
                        <span>{element.item.quantity}</span>
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => itemCountMinusHandler(element.item.id)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div
                      className="col-lg-4  d-flex justify-content-center mt-5 "
                      style={{ width: "80px", height: "80px" }}
                    >
                      <span>
                        <i
                          class="fa fa-trash fs-1"
                          aria-hidden="true"
                          onClick={() => deleteIndiviualHandler(element)}
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default Addcart;
