import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Product3DRepository from "./repository/Product3DRepository";

function App() {
  const product3Ddata = new Product3DRepository().getProducts();
  return (
    <Router>
      <Switch>
        {product3Ddata.map((product3d) => (
          <Route exact path={`/product/${product3d.productId}`}>
            <ProductPage product3d={product3d} />
          </Route>
        ))}
        <Route exact path="/">
          <MenuBar />
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
