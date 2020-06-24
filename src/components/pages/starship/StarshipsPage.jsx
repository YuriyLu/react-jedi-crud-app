import React from "react";
import Table from "../../common/Table";
import { Link } from "react-router-dom";
import { getColumnNames } from "../../common/PageElementsCreating";
import { useDispatch, useSelector } from "react-redux";
import { getAllStarships } from "../../../store/selectors/starships";
import { deleteStarship } from "../../../store/actions/starships";
import { changeBelovedStatus } from "../../../store/actions/starships";

const StarshipsPage = () => {
    const dispatch = useDispatch();

    const starships = useSelector((state) => getAllStarships(state));

    const pageName = "Starships";

    const handleDelete = (id) => {
        dispatch(deleteStarship(id))
    };

    const handleBelowedStatus = (id) => {
        dispatch(changeBelovedStatus(id));
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
                columns={getColumnNames("starships", starships, handleBelowedStatus)}
                tableDescriptor={pageName}
                onDelete={handleDelete}
                data={starships}
            />
        </div>
    );
};

export default StarshipsPage;
