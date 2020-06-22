import React, { useState } from "react";
import Table from "../../common/Table";
import { Link } from "react-router-dom";
import {getColumnNames} from "../../common/PageElementsCreating"

const StarshipsPage = ({ data }) => {
    if (localStorage.dataStarships) {
        data = JSON.parse(localStorage.getItem("dataStarships"));
    }
    const [starships, setStarships] = useState(data);

    const pageName = "Starships";

    const handleDelete = (id) => {
        const filteredStarships = starships.filter((person) => person.id !== id);
        setStarships(filteredStarships);
        localStorage.setItem("dataStarships", JSON.stringify(filteredStarships));
    };


    return (
        <div className="my-container">
            <h2>{pageName} from Star Wars Universe</h2>
            <Link
                to={{
                    pathname: "/starships/new",
                    propsSearch: {
                        id: "new",
                        data: starships,
                    },
                }}
                className="btn btn-warning"
                style={{ marginBottom: 25 }}
            >
                New Starship
            </Link>
            <Table
                columns={getColumnNames("starships", starships)}
                tableDescriptor={pageName}
                onDelete={handleDelete}
                data={starships}
            />
        </div>
    );
};

export default StarshipsPage;
