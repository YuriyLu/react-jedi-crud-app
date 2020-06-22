import { nanoid } from "nanoid";
const starship_class = "https://swapi.dev/api";

export const starshipsColumns = [
    "name",
    "model",
    "manufacturer",
    "cost_in_credits",
    "passengers",
    "cargo_capacity",
    "consumables",
    "hyperdrive_rating",
    "starship_class",
];

export const getStarships = async () => {
    const starshipsResponse = await (
        await fetch(`${starship_class}/starships`)
    ).json();

    return starshipsResponse.results.map(
        ({
            name,
            model,
            manufacturer,
            cost_in_credits,
            passengers,
            cargo_capacity,
            consumables,
            hyperdrive_rating,
            starship_class,
        }) => ({
            name,
            model,
            manufacturer,
            cost_in_credits,
            passengers,
            cargo_capacity,
            consumables,
            hyperdrive_rating,
            starship_class,
            id: nanoid(),
        })
    );
};
