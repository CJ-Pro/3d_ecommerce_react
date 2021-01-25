import React from "react";
import Product3DViewer from "../Product3DViewer";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NameAndPriceBlock from "./nameAndPriceBlock";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function Product3DItem(props) {
  return (
    <React.Fragment>
      <Product3DViewer
        alpha={props.alpha}
        beta={props.beta}
        radius={props.radius}
        target={props.target}
        url={props.url}
      />
      <Fab
        style={{
          backgroundColor: "grey",
          color: "white",
          position: "absolute",
          bottom: "12.5%",
          left: 25,
        }}
      >
        <MoreHorizIcon />
      </Fab>
      <Fab
        style={{
          backgroundColor: "#d4af37",
          color: "white",
          position: "absolute",
          bottom: "12.5%",
          right: 25,
        }}
        variant="extended"
      >
        <AddIcon />
        ADD TO CART
      </Fab>
      <NameAndPriceBlock />
    </React.Fragment>
  );
}
