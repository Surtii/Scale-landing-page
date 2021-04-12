import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/style.css'
import './styles/color-one.css'
import './styles/responsive.css'
import './styles/color-one.css'
import './styles/custom-animation.css'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/home";
import Verification from "./pages/verification";
import Transactions from "./pages/transactions";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/verification/tier-2/:id" component={Verification}/>
        <Route exact path="/transactions/:id" component={Transactions}/>
      </Switch>
    </Router>
  );
}

export default App;