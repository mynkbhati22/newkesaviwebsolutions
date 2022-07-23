import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Tutorial from "./components/pages/Tutorial";
import Portfolio from "./components/Portfolio";
import Faq from "./components/pages/Faq";
import Dapp from "./components/Dapp";
import ETH from "./components/pages/ETH";
import BSC from "./components/pages/BSC";
import Matic from "./components/pages/Matic";
import { useState } from "react";
import { IntlProvider } from "react-intl";
import messages from "./components/messages";

function App() {
  const [locale, setLocale] = useState("en");
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
            <Route path="/airdrop" component={Dapp}></Route>
            {/* <Route path="/createToken/ETH" component={ETH}></Route>
          <Route path="/createToken/BSC" component={BSC}></Route>
          <Route path="/createToken/Matic" component={Matic}></Route> */}
            <Route path="/tutorial" component={Tutorial}></Route>
            <Route path="/faq" component={Faq}></Route>
          </Switch>
        </Router>
      </IntlProvider>
    </div>
  );
}

export default App;
