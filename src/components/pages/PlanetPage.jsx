import React from "react";
import PageContent from "./PageContent";

const dataPlanets = [
    {
        name: "Tatooine",
        climate: "arid",
        terrain: "desert",
        diameter: "10465",
        populaion: "200000",
        created: "yesterday",
        id: "KHYJgftrdytfd64E^",
    },
    {
        name: "Alderaan",
        climate: "temperate",
        terrain: "grassland",
        diameter: "12500",
        populaion: "2000000000",
        created: "today",
        id: "kjuhgytdfgyhdf",
    },
    {
        name: "Hoth",
        climate: "frozen",
        terrain: "tundra",
        diameter: "7200",
        populaion: "unknown",
        created: "1000 years ago",
        id: "iougsergyerhgdertuh",
    },
];

const PlanetPage = () => {
    return (
        <PageContent
            data={dataPlanets}
            tableHeader="Planets from Star Wars Universe"
            tableDescriptor="Planets"
        />
    );
};

export default PlanetPage;
