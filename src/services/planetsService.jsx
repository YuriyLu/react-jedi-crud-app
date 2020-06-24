import { nanoid } from "nanoid";
const url = "https://swapi.dev/api";

export const planetsColumns = [
    "name",
    "rotation_period",
    "orbital_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "population",
    "created",
    "edited",
];

export const getPlanets = async () => {
    const planetsResponse = await (await fetch(`${url}/planets`)).json();

    return planetsResponse.results.map(
        ({ name, rotation_period, orbital_period, diameter, climate, gravity, terrain, population, created, edited }) => ({
            name,
            rotation_period,
            orbital_period,
            diameter,
            climate,
            gravity,
            terrain,
            population,
            created,
            edited,
            beloved: false,
            id: nanoid(),
        })
    );
};
