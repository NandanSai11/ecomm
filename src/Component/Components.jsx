import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Productlist from "./Productlist/Productlist";
import Error from "./Errorpage/Error";
import About from "./About/About";
import Productdetails from "./ProductDetails/Productdetails";
import Cart from "./Cart/Cart";
import Addcart from "./Addcart/Addcart";

function Components() {
  const [product, setProduct] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  console.log(product);
  return (
    <>
      <BrowserRouter>
        <Navbar cartItemsCount={cartItemsCount} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/products"
            element={
              <Productlist
                product={product}
                setProduct={setProduct}
                setCartItemsCount={setCartItemsCount}
                cartItemsCount={cartItemsCount}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/productdetails/:Id"
            element={
              <Productdetails
                product={product}
                cartItems={cartItems}
                setCartItems={setCartItems}
                setCartItemsCount={setCartItemsCount}
                cartItemsCount={cartItemsCount}
              />
            }
          />
          <Route exact path="/cart" element={<Cart product={product} />} />
          <Route
            exact
            path="/addcart"
            element={
              <Addcart
                cartItems={cartItems}
                setCartItems={setCartItems}
                cartItemsCount={cartItemsCount}
                setCartItemsCount={setCartItemsCount}
              />
            }
          />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Components;
