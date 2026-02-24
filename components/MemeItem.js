import { connect } from "react-redux";
import { GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import React, { Component } from "react";
import { createMeme } from "../actions";
import { AddToPhotosRounded } from "@material-ui/icons";
import { username, password } from "../data/secrets";
import { motion } from "framer-motion";

class MemeItem extends Component {
  postMeme = () => {
    const memeObj = {
      template_id: this.props.meme.id,
      text0: this.props.text0,
      text1: this.props.text1,
      username: username,
      password: password,
    };
    this.props.createMeme(memeObj);
    console.log("posted!");
  };

  render() {
    const { meme } = this.props;
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        whileTap={{ y: -20, transition: { type: "spring" } }}
        onClick={this.postMeme}
      >
        <GridListTile>
          <img
            src={meme.url}
            alt={meme.name}
            style={{ height: 200, width: 200 }}
          />
          <GridListTileBar title={meme.name} />
        </GridListTile>
      </motion.div>
    );
  }
}

export default connect(null, { createMeme })(MemeItem);
