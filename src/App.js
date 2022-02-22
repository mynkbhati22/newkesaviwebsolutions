import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
