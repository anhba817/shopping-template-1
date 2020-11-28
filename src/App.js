import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appearanceActions from "./actions/appearance";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { ROUTES } from "./routes";
import theme from "./theme";
import FixedEditor from "./components/FixedEditor/index";

class App extends Component {
  renderRoutes = (routs) => {
    let result = null;
    if (routs.length > 0) {
      result = routs.map((route, index) => {
        const { path, exact, component } = route;
        return (
          <Route key={index} path={path} exact={exact}>
            {component()}
          </Route>
        );
      });
    }
    return result;
  };

  render() {
    const { appearance } = this.props;
    return (
      <Router>
        <ThemeProvider theme={theme(appearance)}>
          <CssBaseline />
          <Switch>
            {this.renderRoutes(ROUTES)}
            <Redirect from="/" to="/home" />
          </Switch>
          <FixedEditor />
        </ThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appearance: state.appearance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appearanceActionCreators: bindActionCreators(appearanceActions, dispatch),
  };
};

export default withAuthenticator(connect(mapStateToProps, mapDispatchToProps)(App));
