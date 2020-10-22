import React from 'react';
import './App.css';
import Home from './views/Home'
import News from './views/News'
import DevelopmentTeam from './views/DevelopmentTeam'
import AboutUs from './views/AboutUs'
import Header from './components/Header'
import MyFooter from './components/MyFooter'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <div className="NavegationBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/developmentTeam">DevelopmentTeam</Link>
            </li>
            <li>
              <Link to="/aboutUs">AboutUs</Link>
            </li>
          </ul>

        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/developmentTeam">
            <DevelopmentTeam />
          </Route>
          <Route exact path="/aboutUs">
            <AboutUs />
          </Route>
        </Switch>

    </Router>
    <footer>
      <MyFooter/>
    </footer>
    </div>
  );
}

export default App;
