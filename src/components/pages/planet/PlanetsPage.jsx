import React, { useState } from 'react';
import Table from "../../common/Table";
import { Link } from "react-router-dom";
import {getColumnNames} from "../../common/PageElementsCreating"

const PlanetsPage = ({data}) => {

    if (localStorage.dataPlanets) {
        data = JSON.parse(localStorage.getItem("dataPlanets"));
    }
    const [planets, setPlanets] = useState(data);

    const pageName = "Planets";

    const handleDelete = (id) => {
        const filteredPlanets = planets.filter((person) => person.id !== id);
        setPlanets(filteredPlanets);
        localStorage.setItem("dataPlanets", JSON.stringify(filteredPlanets));
    };

    return (
        <div className="my-container">
            <h2>{pageName} from Star Wars Universe</h2>
            <Link
                to={{
                    pathname: "/planets/new",
                    propsSearch: {
                        id: "new",
                        data: planets,
                    },
                }}
                className="btn btn-warning"
                style={{ marginBottom: 25 }}
            >
                New PLanet
            </Link>
            <Table
                columns={getColumnNames("planets", planets)}
                tableDescriptor={pageName}
                onDelete={handleDelete}
                data={planets}
            />
        </div>
    );
};

export default PlanetsPage;
