import './App.css';
import Jacek from "./Jacek";
import Gosia from "./Gosia";
import Seba from "./Seba";
import { Route, Switch, NavLink, Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
     
      <nav className="navbar">
        <NavLink exact activeClassName="activeNav" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="activeNav" to="/Jacek">
          Jacek
        </NavLink>
        <NavLink exact activeClassName="activeNav" to="/Gosia">
          Gosia
        </NavLink>
        <NavLink exact activeClassName="activeNav" to="/Seba">
          Seba
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/Jacek" component={Jacek}/>
        <Route exact path="/Gosia" component={Gosia}/>
        <Route exact path="/Seba" component={Seba}/>
      </Switch>
    </div>
  );
}

export default App;
