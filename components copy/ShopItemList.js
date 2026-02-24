import {
  IconButton,
  Card,
  Grid,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { motion } from "framer-motion";
import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { addShopItemById } from "../actions";
import ShopItemComponent from "./ShopItemComponent";

class ShopItemList extends Component {
  render() {
    return (
      <div style={{ padding: 30 }}>
        <h2 style={{ color: "#00ccff" }}>Shop Items</h2>
        <Grid container>
          {this.props.shopItems.map((shopItem) => {
            return <ShopItemComponent shopItem={shopItem} />;
          })}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shopItems: state.shopItems,
  };
}

export default connect(mapStateToProps, { addShopItemById })(ShopItemList);
