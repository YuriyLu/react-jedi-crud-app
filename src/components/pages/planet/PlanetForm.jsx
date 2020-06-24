import React from "react";
import Form from "../../common/Form";
import { planetsColumns } from "../../../services/planetsService";
import { nanoid } from "nanoid";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllPlanets } from "../../../store/selectors/planets";
import { setPlanets } from "../../../store/actions/planets";

const PlanetsForm = ({ location, history }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => getAllPlanets(state));

    if (!location.propsSearch) return <Redirect to="/planets" />;

    const { id } = location.propsSearch;

    const getInitialPlanetsData = () => {
        return planetsColumns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {});
    };

    const saveButtonListener = (planetData) => {
        const planetsNew = data.map((element) => {
            if (element.id === planetData.id) {
                return planetData;
            } else return element;
        });

        dispatch(setPlanets(planetsNew));
        history.push("/planets");
    };

    const handleAppPlanet = (planetData) => {
        planetData = { ...planetData, id: nanoid() };
        const dataN = [...data, planetData];
        
        dispatch(setPlanets(dataN))
        history.push("/planets");
    };

    if (id === "new") {
        return (
            <Form
                columns={planetsColumns}
                initialData={getInitialPlanetsData()}
                onSave={handleAppPlanet}
            />
        );
    } else {
        return (
            <Form
                columns={planetsColumns}
                initialData={data.find((element) => element.id === id)}
                onSave={saveButtonListener}
            />
        );
    }
};

export default PlanetsForm;
