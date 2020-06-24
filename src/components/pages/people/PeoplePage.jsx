import React from "react";
import Table from "../../common/Table";
import { Link } from "react-router-dom";
import {getColumnNames} from "../../common/PageElementsCreating"
import { useDispatch, useSelector } from "react-redux";
import { deletePerson, changeBelovedStatus } from "../../../store/actions/people";
import { getAllPeople } from "../../../store/selectors/people";

const PeoplePage = () => {
    const dispatch = useDispatch();
    const people = useSelector(state => getAllPeople(state));

    const pageName = "People";

    const handleDelete = (id) => {
        dispatch(deletePerson(id))
    };

    const handleBelowedStatus = (id) => {
        dispatch(changeBelovedStatus(id));
    }


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
                columns={getColumnNames("people", people, handleBelowedStatus)}
                tableDescriptor={pageName}
                onDelete={handleDelete}
                data={people}
            />
        </div>
    );
};

export default PeoplePage;
