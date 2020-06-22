import React from "react";
import Form from "../../common/Form";
import { planetsColumns } from "../../../services/planetsService";
import {nanoid} from "nanoid"
import { Redirect } from "react-router-dom";

const planetsForm = ({ location, history }) => {
    if (!location.propsSearch) return <Redirect to="/planets" />;
    
    const { id, data } = location.propsSearch;
    
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

        localStorage.setItem("dataPlanets", JSON.stringify(planetsNew));
        history.push("/planets");
    };

    const handleAppPlanet = (planetData) => {
        
        planetData = {...planetData, id: nanoid()}
        const dataN = [...data, planetData];
        localStorage.setItem("dataPlanets", JSON.stringify(dataN));
        history.push("/planets");
    };

    if (id === "new") {
        return (
            <Form
                columns={planetsColumns}
                initialData={getInitialPlanetsData()}
                onSave={handleAppPlanet}
            />
        )
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

export default planetsForm;
