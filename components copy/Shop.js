import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Header from "./Header";
import ShopItemList from "./ShopItemList";
import { Container, Grid } from "@material-ui/core";
import Cart from "./Cart";
import CartStats from "./CartStats";
import { motion } from "framer-motion";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00ccff",
    },
    secondary: {
      main: "#ffffff",
    },
    type: "dark",
  },
});

class Shop extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <h1>Shop</h1>
          <Grid container>
            <Grid item xs={12} md={4}>
              <ShopItemList />
            </Grid>
            <Grid item xs={12} md={4}>
              <Cart />
            </Grid>
            <Grid item xs={12} md={2}>
              <CartStats />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Shop;
