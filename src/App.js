import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/Portfolio";
// import ERc20 from "./components/ERc20";
import Tutorial from "./components/pages/Tutorial";
import Faq from "./components/pages/Faq";
import Dapp from "./components/Dapp";
import ETH from "./components/pages/ETH";
import BSC from "./components/pages/BSC";
import Matic from "./components/pages/Matic";

// import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          {/* <Route exact path="/airdrop" component={ERc20}></Route> */}
          <Route path="/airdrop" component={Dapp}></Route>
          <Route path="/createToken/ETH">{ETH}</Route>
          <Route path="/createToken/BSC">{BSC}</Route>
          <Route path="/createToken/Matic">{Matic}</Route>
          <Route path="/tutorial" component={Tutorial}></Route>
          <Route path="/faq" component={Faq}></Route>
        </Switch>
        {/* <ScrollToTop /> */}
      </Router>
    </div>
  );
}

export default App;
