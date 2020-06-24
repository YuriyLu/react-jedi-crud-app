import React from "react";
import Form from "../../common/Form";
import { peopleColumns } from "../../../services/peopleService";
import { nanoid } from "nanoid";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getAllPeople } from "../../../store/selectors/people";
import { setPeople } from "../../../store/actions/people";

const PeopleForm = ({ location, history }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => getAllPeople(state));

    if (!location.propsSearch) return <Redirect to="/" />;

    const { id } = location.propsSearch;

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
        dispatch(setPeople(peopleNew))
        history.push("/");
    };

    const handleAppPerson = (personData) => {
        personData = { ...personData, id: nanoid() };
        const peopleNew = [...data, personData];
        dispatch(setPeople(peopleNew))
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
