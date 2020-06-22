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

function App() {
    const [dataPeople, setDataPeople] = useState([]);
    const [dataPlanets, setDataPlanets] = useState([]);
    const [dataStarships, setDataStarships] = useState([]);

    useEffect(() => {
        const getPeopleData = async () => {
            const data = await getPeople();
            setDataPeople(data);
            localStorage.setItem("dataPeople", JSON.stringify(data));
        };

        const getPlanetsData = async () => {
            const data = await getPlanets();
            setDataPlanets(data);
            localStorage.setItem("dataPlanets", JSON.stringify(data));
        };

        const getStarshipsData = async () => {
            const data = await getStarships();
            setDataStarships(data);
            localStorage.setItem("dataStarships", JSON.stringify(data));
        };

        if (!localStorage.dataPeople) {
            getPeopleData();
        } else {
            if (localStorage.getItem("dataPeople").length === 0) {
                getPeopleData();
            } else {
                setDataPeople(JSON.parse(localStorage.getItem("dataPeople")));
            }
        }

        if (!localStorage.dataPlanets) {
            getPlanetsData();
        } else {
            if (localStorage.getItem("dataPlanets").length === 0) {
                getPlanetsData();
            } else {
                setDataPlanets(JSON.parse(localStorage.getItem("dataPlanets")));
            }
        }

        if (!localStorage.dataStarships) {
            getStarshipsData();
        } else {
            if (localStorage.getItem("dataStarships").length === 0) {
                getStarshipsData();
            } else {
                setDataStarships(
                    JSON.parse(localStorage.getItem("dataStarships"))
                );
            }
        }

       /*getPeopleData();
          getPlanetsData();
          getStarshipsData();*/
    }, []);
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route path="/people/:id" component={PeopleForm} />
                    <Route
                        path="/people"
                        component={() => <PeoplePage data={dataPeople} />}
                    />
                    <Route path="/planets/:id" component={PlanetForm} />
                    <Route
                        path="/planets"
                        component={() => <PlanetsPage data={dataPlanets} />}
                    />
                    <Route path="/starships/:id" component={StarshipForm} />
                    <Route
                        path="/starships"
                        component={() => <StarshipsPage data={dataStarships} />}
                    />
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
