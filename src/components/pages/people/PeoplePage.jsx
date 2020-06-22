import React, { useState } from "react";
import Table from "../../common/Table";
import { Link } from "react-router-dom";
import {getColumnNames} from "../../common/PageElementsCreating"

const PeoplePage = ({ data }) => {
    if (localStorage.dataPeople) {
        data = JSON.parse(localStorage.getItem("dataPeople"));
    }
    const [people, setPeople] = useState(data);

    const pageName = "People";

    const handleDelete = (id) => {
        const filteredPeople = people.filter((person) => person.id !== id);
        setPeople(filteredPeople);
        localStorage.setItem("dataPeople", JSON.stringify(filteredPeople));
    };


    return (
        <div className="container">
            <h2>{pageName} from Star Wars Universe</h2>
            <Link
                to={{
                    pathname: "/people/new",
                    propsSearch: {
                        id: "new",
                        data: people,
                    },
                }}
                className="btn btn-warning"
                style={{ marginBottom: 25 }}
            >
                New Person
            </Link>
            <Table
                columns={getColumnNames("people", people)}
                tableDescriptor={pageName}
                onDelete={handleDelete}
                data={people}
            />
        </div>
    );
};

export default PeoplePage;
