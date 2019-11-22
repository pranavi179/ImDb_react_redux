import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import View from "./component/view";
import Default from "./component/Default";

import SignInForm from "./component/signin";
import SignUpForm from "./component/signup";

import { Switch, Route } from "react-router-dom";

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
