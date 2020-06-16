import React from "react";
import {
    Link,
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import PeoplePage from "./components/pages/PeoplePage";
import PlanetPage from "./components/pages/PlanetPage";
import StarshipPage from "./components/pages/StarshipPage";
import NotFound from "./components/pages/NotFound";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    return (
        <Router>
            <Redirect from="/" to="/people" />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/people">
                    JEDY
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/people">
                            People
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planets">
                            Planets
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/starships">
                            Starships
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/notfound">
                            nonexistent link
                        </Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/people" component={PeoplePage} />
                <Route exact path="/planets" component={PlanetPage} />
                <Route exact path="/starships" component={StarshipPage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
