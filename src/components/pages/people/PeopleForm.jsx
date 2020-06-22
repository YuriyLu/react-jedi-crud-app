import React from "react";
import Form from "../../common/Form";
import { peopleColumns } from "../../../services/peopleService";
import { nanoid } from "nanoid";
import { Redirect } from "react-router-dom";


const PeopleForm = ({ location, history }) => {
    if (!location.propsSearch) return <Redirect to="/" />;

    const { id, data } = location.propsSearch;

    const getInitialPeopleData = () => {
        return peopleColumns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {});
    };

    const saveButtonListener = (personData) => {
        const peopleNew = data.map((element) => {
            if (element.id === personData.id) {
                return personData;
            } else return element;
        });

        localStorage.setItem("dataPeople", JSON.stringify(peopleNew));
        history.push("/");
    };

    const handleAppPerson = (personData) => {
        personData = { ...personData, id: nanoid() };
        const dataN = [...data, personData];
        localStorage.setItem("dataPeople", JSON.stringify(dataN));
        history.push("/");
    };

    if (id === "new") {
        return (
            <Form
                columns={peopleColumns}
                initialData={getInitialPeopleData()}
                onSave={handleAppPerson}
            />
        );
    } else {
        return (
            <Form
                columns={peopleColumns}
                initialData={data.find((element) => element.id === id)}
                onSave={saveButtonListener}
            />
        );
    }
};

export default PeopleForm;
