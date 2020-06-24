import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/navbar/NavBar";
import PeoplePage from "./components/pages/people/PeoplePage";
import PlanetsPage from "./components/pages/planet/PlanetsPage";
import StarshipsPage from "./components/pages/starship/StarshipsPage";
import NotFound from "./components/pages/NotFound";
import PeopleForm from "./components/pages/people/PeopleForm";
import PlanetForm from "./components/pages/planet/PlanetForm";
import StarshipForm from "./components/pages/starship/StarshipForm";
import { getPeople } from "./services/peopleService";
import { getPlanets } from "./services/planetsService";
import { getStarships } from "./services/starshipsService";
import { useDispatch } from "react-redux";
import { setPeople } from "./store/actions/people";
import { setPlanets } from "./store/actions/planets";
import { setStarships } from "./store/actions/starships";

function App() {
    const dispatch = useDispatch();


    useEffect(() => {
        const getPeopleData = async () => {
            const data = await getPeople();
            dispatch(setPeople(data));
        };

        const getPlanetsData = async () => {
            const data = await getPlanets();
            dispatch(setPlanets(data))
        };

        const getStarshipsData = async () => {
            const data = await getStarships();
            dispatch(setStarships(data))
        };

        getPeopleData();
        getPlanetsData();
        getStarshipsData();
    }, []);
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route path="/people/:id" component={PeopleForm} />
                    <Route path="/people" component={PeoplePage} />
                    <Route path="/planets/:id" component={PlanetForm} />
                    <Route path="/planets" component={PlanetsPage} />
                    <Route path="/starships/:id" component={StarshipForm} />
                    <Route path="/starships" component={StarshipsPage} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect
                        exact
                        from="/"
                        to="/people"
                        component={PeoplePage}
                    />
                    <Redirect to="/not-found" />
                </Switch>
            </div>
        </>
    );
}

export default App;
