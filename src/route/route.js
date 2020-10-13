import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Albums, ViewAlbum } from "../container/index";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Albums} />
          <Route exact path="/viewAlbum/:id" component={ViewAlbum} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
