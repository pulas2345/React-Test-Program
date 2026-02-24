import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  ButtonGroup,
  Button,
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Component } from "react";
import pages from "../data/pages";
import { Home, HomeTwoTone, Menu } from "@material-ui/icons";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
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

class Header extends Component {
  state = {
    open: false,
    current: "Home",
  };

  render() {
    const close = () => {
      this.setState({ open: false });
    };
    return (
      /* <div className="menu">
        <ButtonGroup
          variant="outlined"
          color="primary"
          aria-label="text primary button group"
        >
          <h3 className="menuItem">
            <NavLink exact to="/" activeClassName="menuActive">
              <Button color="secondary">Home</Button>
            </NavLink>
          </h3>
          <h3 className="menuItem">
            <NavLink to="/jokes" activeClassName="menuActive">
              <Button color="secondary">Jokes</Button>
            </NavLink>
          </h3>
          <h3 className="menuItem">
            <NavLink to="/music" activeClassName="menuActive">
              <Button color="secondary">Music Player</Button>
            </NavLink>
          </h3>
          <h3 className="menuItem">
            <NavLink to="/age-teller" activeClassName="menuActive">
              <Button color="secondary">Age Teller</Button>
            </NavLink>
          </h3>
          <h3 className="menuItem">
            <NavLink to="/shop" activeClassName="menuActive">
              <Button color="secondary">Shop</Button>
            </NavLink>
          </h3>
          <h3 className="menuItem">
            <Button
              onClick={() => {
                this.setState({ open: true });
              }}
              color="secondary"
            >
              Menu
            </Button>
          </h3>
        </ButtonGroup>*/
      <ThemeProvider theme={theme}>
        <div>
          <AppBar position="static" style={{ marginBottom: 30 }}>
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => {
                  this.setState({ open: true });
                }}
              >
                <Menu />
              </IconButton>
              <Link exact to={"/"} style={{ color: "#202020" }}>
                <IconButton edge="start" color="inherit">
                  <Home />
                </IconButton>
              </Link>
              <Typography
                variant="h6"
                style={{ marginLeft: 20, color: "#202020" }}
              >
                {this.props.title}
              </Typography>
            </Toolbar>
          </AppBar>
          <MUIDrawer variant="temporary" open={this.state.open} onClose={close}>
            <List>
              <NavLink
                exact
                to={"/"}
                style={{ color: "white" }}
                activeStyle={{ color: "#00ccff" }}
                onClick={() => this.setState({ open: false })}
              >
                <ListItem button key={"Home"}>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </NavLink>
              {pages.map((page, index) => {
                return (
                  <NavLink
                    to={page.path}
                    style={{ color: "white" }}
                    activeStyle={{ color: "#00ccff" }}
                    onClick={() => this.setState({ open: false })}
                  >
                    <ListItem
                      index={index}
                      button
                      key={page.name}
                      style={{ marginRight: 10 }}
                    >
                      <ListItemIcon>{page.icon}</ListItemIcon>
                      <ListItemText primary={page.name} />
                    </ListItem>
                  </NavLink>
                );
              })}
            </List>
          </MUIDrawer>
        </div>
      </ThemeProvider>
    );
  }
}

export default Header;


