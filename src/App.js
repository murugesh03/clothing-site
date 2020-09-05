import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
