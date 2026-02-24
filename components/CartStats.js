import { Button, Card, Popover } from "@material-ui/core";
import React, { Component, useState } from "react";
import { connect } from "react-redux";

function CartStats(props) {
  function price() {
    let price = 0;
    props.cart.forEach((item) => {
      price += item.price;
    });
    return price;
  }

  function weight() {
    let weight = 0;
    props.cart.forEach((item) => {
      weight += item.weight;
    });
    return weight;
  }

  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 30 }}>
      <h2 style={{ color: "#00ccff" }}>Cart Info</h2>
      <p>{`Price: Rs.${price()}`}</p>
      <p>{`Weight: ${weight()}g`}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Check Out
      </Button>
      <Popover
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <h2 style={{ margin: 20 }}>Items will be delivered by 9am tomorrow</h2>
      </Popover>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps, null)(CartStats);
