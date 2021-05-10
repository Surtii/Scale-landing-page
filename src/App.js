import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/style.css'
import './styles/color-one.css'
import './styles/responsive.css'
import './styles/color-one.css'
import './styles/custom-animation.css'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import Verification from "./pages/Verification";
import Transactions from "./pages/Transactions";
import Orders from "./pages/Orders";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/verification/tier-2/:id" component={Verification}/>
        <Route exact path="/transactions/:id" component={Transactions}/>
        <Route exact path="/orders" component={Orders}/>
      </Switch>
    </Router>
  );
}

export default App;
