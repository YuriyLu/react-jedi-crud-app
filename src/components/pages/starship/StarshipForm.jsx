import React from "react";
import Form from "../../common/Form";
import { starshipsColumns } from "../../../services/starshipsService";
import { nanoid } from "nanoid";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllStarships } from "../../../store/selectors/starships";
import { setStarships } from "../../../store/actions/starships";

const StarshipsForm = ({ location, history }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => getAllStarships(state));

    if (!location.propsSearch) return <Redirect to="/starships" />;

    const { id } = location.propsSearch;

    const getInitialStarshipsData = () => {
        return starshipsColumns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {});
    };

    const saveButtonListener = (starshipData) => {
        const starshipsNew = data.map((element) => {
            if (element.id === starshipData.id) {
                return starshipData;
            } else return element;
        });

        dispatch(setStarships(starshipsNew))
        history.push("/starships");
    };

    const handleAppstarship = (starshipData) => {
        starshipData = { ...starshipData, id: nanoid() };
        const dataN = [...data, starshipData];

        dispatch(setStarships(dataN))
        history.push("/starships");
    };

    if (id === "new") {
        return (
            <Form
                columns={starshipsColumns}
                initialData={getInitialStarshipsData()}
                onSave={handleAppstarship}
            />
        );
    } else {
        return (
            <Form
                columns={starshipsColumns}
                initialData={data.find((element) => element.id === id)}
                onSave={saveButtonListener}
            />
        );
    }
};

export default StarshipsForm;
