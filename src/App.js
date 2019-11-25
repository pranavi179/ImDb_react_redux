import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import View from "./component/view";
import Default from "./component/Default";
import WatchList from "./component/watchlist";

import SignInForm from "./component/signin";
import SignUpForm from "./component/signup";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function ProtectedRoute({ Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location.pathname }
            }}
          />
        );
      }}
    />
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = (email, password) => {
    if (email === "" && password === "") {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <ProtectedRoute path="/view" component={View} />
            <Route
              path="/signin"
              render={props => {
                return (
                  <SignInForm
                    {...props}
                    handleLogin={this.handleLogin}
                    isLoggedIn={isLoggedIn}
                  />
                );
              }}
            />
            <ProtectedRoute
              path="/watchlist"
              Component={WatchList}
              isLoggedIn={isLoggedIn}
            />
            {/* <Route exact path="/signin" component={SignInForm} /> */}
            <ProtectedRoute exact path="/signup" component={SignUpForm} />
            <Route path="/" component={View} />

            <Route exact path="/default" component={Default} />
            <Redirect to="/view" />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
