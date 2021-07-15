import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './styles/style.css'
import './styles/color-one.css'
import './styles/responsive.css'
import './styles/color-one.css'
import './styles/custom-animation.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import './scss/main.scss';

import Home from "./pages/Home";
import Home2 from './pages/New/Home';
import Verification from "./pages/New/Verification";
import Converter from './pages/New/Converter'
import Transactions from "./pages/Transactions";
import Orders from "./pages/Orders";
// import Converter from "./pages/Converter";
import Order from "./pages/New/Order";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home2} />
        <Route exact path="/old-home" component={Home} />
        <Route exact path="/verification/tier-2/:id" component={Verification} />
        <Route exact path="/transactions/:id" component={Transactions}/>
        <Route exact path="/old-orders" component={Orders}/>
        <Route exact path="/orders" component={Order}/>
        <Route exact path="/converter" component={Converter}/>
      </Switch>
    </Router>
  );
}

export default App;
