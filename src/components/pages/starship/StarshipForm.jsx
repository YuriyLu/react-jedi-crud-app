import React from "react";
import Form from "../../common/Form";
import { starshipsColumns } from "../../../services/starshipsService";
import { nanoid } from "nanoid";
import { Redirect } from "react-router-dom";

const StarshipsForm = ({ location, history }) => {
    if (!location.propsSearch) return <Redirect to="/starships" />;

    const { id, data } = location.propsSearch;

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

        localStorage.setItem("dataStarships", JSON.stringify(starshipsNew));
        history.push("/starships");
    };

    const handleAppstarship = (starshipData) => {
        starshipData = { ...starshipData, id: nanoid() };
        const dataN = [...data, starshipData];
        localStorage.setItem("dataStarships", JSON.stringify(dataN));
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
