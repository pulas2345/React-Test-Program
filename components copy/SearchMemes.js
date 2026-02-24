import React, { Component } from "react";
import { connect } from "react-redux";
import { setMemes } from "../actions";

class SearchMemes extends Component {
  state = {
    memes: [],
    searchMemes: () => {
      const url = "https://api.imgflip.com/get_memes";

      fetch("https://api.imgflip.com/get_memes", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => {
          this.memes = json.data.memes;
          console.log("memes received!", json.data.memes);
        });
    },
  };

  componentDidMount() {
    this.state.searchMemes();
  }

  render() {
    return <></>;
  }
}

export default connect(null, { setMemes })(SearchMemes);
