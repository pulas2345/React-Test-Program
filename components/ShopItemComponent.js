import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { motion } from "framer-motion";
import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { addShopItemById } from "../actions";

const ShopItemComponent = (props) => {
  const [disappear, setDisappear] = useState(1);

  const shopItem = props.shopItem;
  return (
    <Grid item xs="12" sm="4" md="12" lg="6" key={shopItem.id}>
      <Card
        elevation={3}
        style={{
          color: "#00ccff",
          width: 150,
          margin: "20 auto",
        }}
        variant="elevation"
      >
        <CardContent>
          <img
            src={shopItem.image}
            alt="image"
            width="120px"
            height="120px"
            style={{ borderRadius: 15 }}
          />
          <Typography variant="h5" style={{ marginTop: 20 }}>
            {shopItem.name}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            variant="outlined"
            color="inherit"
            onClick={() => {
              setDisappear(1);
              props.addShopItemById(shopItem.id);
            }}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default connect(null, { addShopItemById })(ShopItemComponent);
