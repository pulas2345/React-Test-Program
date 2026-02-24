import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { motion } from "framer-motion";
import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { removeShopItemById } from "../actions";

const CartItemComponent = (props) => {
  const [disappear, setDisappear] = useState(1);

  const cartItem = props.cartItem;
  return (
    <Grid item xs="12" sm="4" md="12" lg="6" key={cartItem.id}>
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
            src={cartItem.image}
            alt="image"
            width="120px"
            height="120px"
            style={{ borderRadius: 15 }}
            margin="10px"
          />
          <Typography variant="h5" style={{ marginTop: 20 }}>
            {cartItem.name}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            variant="outlined"
            color="inherit"
            onClick={() => {
              setDisappear(1);
              props.removeShopItemById(cartItem.id);
            }}
          >
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default connect(null, { removeShopItemById })(CartItemComponent);
