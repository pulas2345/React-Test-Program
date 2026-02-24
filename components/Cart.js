import {
  Card,
  Grid,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { motion } from "framer-motion";
import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { removeShopItemById } from "../actions";
import CartItemComponent from "./CartItemComponent";

class Cart extends Component {
  state = {
    disappear: 1,
  };

  render() {
    return (
      <div style={{ padding: 30 }}>
        <h2 style={{ color: "#00ccff" }}>Cart</h2>
        <Grid container>
          {this.props.cart.map((cartItem) => {
            return <CartItemComponent cartItem={cartItem} />;
          })}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps, { removeShopItemById })(Cart);
