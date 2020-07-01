import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import Pattern from "./components/pattern/Pattern";
import Array from "./components/array/Array";
import Registration from "./components/user/Registration";
import View from "./components/user/View";
import NavigationBar from "./components/navbar/NavigationBar";
import store from "./redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Registration} />
            <Route path="/view" component={View} />
            <Route path="/array" component={Array} />
            <Route path="/pattern" component={Pattern} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
