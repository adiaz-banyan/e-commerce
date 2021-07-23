import React from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, ClothingPage, ContactForm } from "./components";
import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar totalItems={cart.total_items} />
        <Route exact path="/cart">
          <Cart cart={cart} />
        </Route>
        <Route exact path="/products">
          <Products products={products} onAddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/clothing" component={ClothingPage} />
        <Route exact path="/contact" component={ContactForm} />
      </BrowserRouter>
    </div>
  );
};

export default App;
