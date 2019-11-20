import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class WatchList extends Component {
  state = {
    WatchList: WatchList,
    redirect: true
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return (
        <Redirect to={{ pathname: "/signin", state: { from: "/watchlist" } }} />
      );
    }
  }
}

export default WatchList;
