import React from "react";
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import pages from "../data/pages";
import { Component } from "react";

class Drawer extends Component {
  constructor(props) {
    super(props);
    state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <MUIDrawer
          variant="temporary"
          open={this.state.open}
          onClose={this.setState({ open: false })}
        >
          <List>
            {pages.map((page, index) => {
              return (
                <ListItem index={index} button key={page.name}>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.name} />
                </ListItem>
              );
            })}
          </List>
        </MUIDrawer>
      </div>
    );
  }
}

export default Drawer;
