import React from "react";
import Table from "../../common/Table";
import { Link } from "react-router-dom";
import { getColumnNames } from "../../common/PageElementsCreating";
import { useDispatch, useSelector } from "react-redux";
import {
    deletePlanet,
    changeBelovedStatus,
} from "../../../store/actions/planets";
import { getAllPlanets } from "../../../store/selectors/planets";

const PlanetsPage = () => {
    const dispatch = useDispatch();

    const planets = useSelector(state => getAllPlanets(state));

    const pageName = "Planets";

    const handleDelete = (id) => {
        dispatch(deletePlanet(id));
    };

    const handleBelowedStatus = (id) => {
        dispatch(changeBelovedStatus(id));
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
                columns={getColumnNames(
                    "planets",
                    planets,
                    handleBelowedStatus
                )}
                tableDescriptor={pageName}
                onDelete={handleDelete}
                data={planets}
            />
        </div>
    );
};

export default PlanetsPage;
