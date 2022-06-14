import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <p>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
      </p>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;