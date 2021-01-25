import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import ProductRepository from "../../repository/ProductRepository.js";
import {
  BrowserRouter as Router,
  Link,
  withRouter,
  Redirect,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100vw",
    height: "100vh",
  },
}));

function HomePage() {
  const classes = useStyles();
  const productRepository = new ProductRepository();

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">
            <h1>HOME</h1>
          </ListSubheader>
        </GridListTile>

        {productRepository.getProducts().map((product) => (
          <GridListTile
            component={Link}
            to={`/product/${product.id}`}
            key={product.id}
          >
            <img src={product.image} alt={product.name} />
            <GridListTileBar
              title={product.name}
              subtitle={`£${product.price}`}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default withRouter(HomePage);
