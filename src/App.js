import React from 'react';
// import IMDb from './component/images/IMDb.png';
import './App.css';
import "antd/dist/antd.css";
import View from "./component/view";
// import Navbar from "./component/navbar";

import SignInForm from "./component/signin";
import SignUpForm from "./component/signup";


import { Switch, Route } from "react-router-dom";


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <React.Fragment>
    {/* <Navbar /> */}
    <Switch>
         {/* <img src={ IMDb } className="App-logo" alt="logo" /> */}

      <Route exact path="/" component={View} />
      <Route exact path="/signin" component={SignInForm} />
      <Route exact path="/signup" component={SignUpForm} />
    </Switch>
  </React.Fragment>

  );
}

export default App;
