import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/images/default-logo.png";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.appBar} color="inherit">
            <img
              src={logo}
              alt="Marketing App"
              height="25px"
              className={classes.image}
            />
            Marketing App
          </Typography>
          <div className={classes.grow} />
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Link to="/clothing">Clothing</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
