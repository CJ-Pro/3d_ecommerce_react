import React from "react";
import MenuBar from "../../components/MenuBar";
import Product3DItem from "./components/Product3DItem";
import { withRouter } from "react-router-dom";

function ProductPage(props) {
  const product3d = props.product3d;
  return (
    <React.Fragment>
      <MenuBar />
      <Product3DItem
        alpha={product3d.alpha}
        beta={product3d.beta}
        radius={product3d.radius}
        target={product3d.target}
        url={product3d.url}
      />
    </React.Fragment>
  );
}

export default withRouter(ProductPage);
