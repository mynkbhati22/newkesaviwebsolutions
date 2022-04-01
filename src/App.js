import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/Portfolio";
import ERc20 from "./components/ERc20";
import Tutorial from "./components/pages/Tutorial";
import Faq from "./components/pages/Faq";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/erc20" component={ERc20}></Route>
          <Route path="/tutorial" component={Tutorial}></Route>
          <Route path="/faq" component={Faq}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
