import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './styles/style.css'
import './styles/color-one.css'
import './styles/responsive.css'
import './styles/color-one.css'
import './styles/custom-animation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css';  

import './scss/main.scss';

import Home from './pages/New/Home';
import Verification from "./pages/New/Verification";
import Converter from './pages/New/Converter'
import Order from "./pages/New/Order";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/verification/tier-2/:id" component={Verification} />
        <Route exact path="/orders" component={Order}/>
        <Route exact path="/converter" component={Converter}/>
      </Switch>
    </Router>
  );
}

export default App;
