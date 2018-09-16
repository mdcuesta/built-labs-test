import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import { createStore } from './store-helper';
import AppBar from './components/app-bar';
import GridView from './components/grid-view';
import ScrollView from './components/scroll-view';

const styles = theme => ({
  main: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 7,
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.store = createStore();
  }

  render() {
    const { classes } = this.props;

    return (
      <Provider store={this.store}>
        <Router>
          <div>
            <AppBar />
            <main className={classes.main}>
              <Switch>
                <Route exact path="/" component={GridView} />
                <Route exact path="/scroll" component={ScrollView} />
                <Route exact path="/page/:page" component={GridView} />
                <Redirect to="/" />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
