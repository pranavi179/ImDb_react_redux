import React from "react";
// import IMDb from './component/images/IMDb.png';
import "./App.css";
import "antd/dist/antd.css";
import View from "./component/view";
import Default from "./component/Default";
// import Image from "./component/image";
// import WatchList from './component/watchlist'

// import Navbar from "./component/navbar";

import SignInForm from "./component/signin";
import SignUpForm from "./component/signup";

import { Switch, Route } from "react-router-dom";
// import MovieDetails from "./component/MovieDetails";
// import MovieList from './component/movielist';

function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Switch>
        {/* <img src={ IMDb } className="App-logo" alt="logo" /> */}
        {/* <Image /> */}
        <Route exact path="/signin" component={SignInForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route path="/" component={View} />

        <Route exact path="/default" component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
