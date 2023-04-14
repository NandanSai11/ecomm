import React from "react";
import { useEffect, useState } from "react";
import Allproduct from "./Allproduct";
import Filterproducts from "./Filterproducts";
import "./productListStyles.css";

function Productlist({
  product,
  setProduct,
  cartItemsCount,
  setCartItemsCount,
  cartItems,
  setCartItems,
}) {
  // const Active = "btn btn-outline-dark";
  // const Inactive = "btn btn-outline";

  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  // const [isActive, setIsActive] = useState(false);
  // const {product,setProduct} = props

  // console.log(props)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  console.log(cartItems);

  const categoryHandler = (catStr) => {
    console.log(catStr);
    const filteredCate = data.filter((x) => x.category === catStr);
    setFilteredItems(filteredCate);
    //setIsActive(true);
    //console.log("bkjbj", filteredItems);
    //setFilteredItems(data);

    console.log(filteredCate);
  };

  return (
    <>
      <div className="container mt-4 ">
        <div className="row ">
          <div>
            <h4>Category</h4>
          </div>

          <div
            className="btn-group col d-flex justify-content-evenly "
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <button
              className="btn btn-outline-dark"
              onClick={() => setFilteredItems(data)}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => categoryHandler("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => categoryHandler("jewelery")}
            >
              Jewelery
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => categoryHandler("electronics")}
            >
              Electronics
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => categoryHandler("women's clothing")}
            >
              Women's clothing
            </button>
          </div>
        </div>
      </div>

      {filteredItems.length > 0 ? (
        <Filterproducts
          filteredCate={filteredItems}
          product={product}
          setProduct={setProduct}
          setCartItemsCount={setCartItemsCount}
          cartItemsCount={cartItemsCount}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ) : (
        <Allproduct
          data={data}
          product={product}
          setProduct={setProduct}
          setCartItemsCount={setCartItemsCount}
          cartItemsCount={cartItemsCount}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
    </>
  );
}

export default Productlist;
