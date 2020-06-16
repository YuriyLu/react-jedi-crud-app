import React from "react";
import PageContent from "./PageContent";

const dataStarships = [
    {
        model: "Fighter",
        size: "small",
        speed: "1000",
        power: "500",
        cost: "12000000",
        id: "jhfrfsfhb",
    },
    {
        model: "Yacht",
        size: "medium",
        speed: "200",
        power: "1200",
        cost: "34000000",
        id: "yioutkjuthyrge",
    },
    {
        model: "Bomber",
        size: "small",
        speed: "800",
        power: "600",
        cost: "17000000",
        id: "8ktjytfdfrdw4tr",
    },
    {
        model: "Scout vessel",
        size: "large",
        speed: "700",
        power: "--/400",
        cost: "4000000",
        id: "uoikyjd456thgs",
    },
    {
        model: "Transport ",
        size: "small/medium/large",
        speed: "400/300/100",
        power: "--",
        cost: ">1000000000",
        id: "67r5t4es33tygr5",
    },
    {
        model: "Gunship",
        size: "small/medium",
        speed: "600/400",
        power: "1500/4000+",
        cost: ">3000000000",
        id: "56euythws4asr5hyg",
    },
];

const StarshipPage = () => {
    return (
        <PageContent
            data={dataStarships}
            tableHeader="Starships from Star Wars Universe"
            tableDescriptor="Starships"
        />
    );
};

export default StarshipPage;
