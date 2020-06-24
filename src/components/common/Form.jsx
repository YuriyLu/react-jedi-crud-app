import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

import { schema } from "../../services/validator";

const Form = ({ columns, initialData, onSave }) => {
    const [errors, setErrors] = useState({});
    const [itemData, setitemData] = useState(initialData);

    const handleClick = (event) => {
        event.preventDefault();
        if (validate(itemData)) {
            onSave(itemData);
        } else {
            console.log(validate(itemData))
            return
        };
    };

    const handleChange = (event) => {
        const { currentTarget: input } = event;
        const data = { ...itemData };
        data[input.name] = input.value;
        setitemData(data);
    };

    if (!Object.keys(initialData).length) {
        return null;
    }

    const validate = (data) => {
        let errors = {};
        let allRight = true;
        Object.entries(data).map(([key, val]) => {
            if (key !== 'beloved' && !val) {
                errors = { ...errors, [key]: "Field should not be empty" };
                allRight = false;
            } else {
                switch (key) {
                    case "name":
                        if (schema.validate({ name: val }).error) {
                            console.log(schema.validate({ name: val }));
                            errors = { ...errors, [key]: "Try something else" };
                            allRight = false;
                        }
                        break;
                    case "height":
                        if (isNaN(val) || val < 20 || val > 1000) {
                            errors = {
                                ...errors,
                                [key]: "Oh, dude i don't believe you...",
                            };
                            allRight = false;
                        }
                        break;
                    case "gender":
                        if (
                            val !== "male" &&
                            val !== "female" &&
                            val !== "n/a"
                        ) {
                            errors = { ...errors, [key]: "Sorry, no" };
                            allRight = false;
                        }
                        break;
                    default:
                }
            }
        });
        setErrors(errors);
        if (allRight) {
            return true;
        } else return false;
    };

    return (
        <form className="container">
            {columns.map((columnName) => (
                <Input
                    key={columnName}
                    name={columnName}
                    label={columnName}
                    error={errors[columnName]}
                    value={itemData[columnName]}
                    type="input"
                    onChange={handleChange}
                />
            ))}
            <Button
                label="Save"
                classes="alert alert-danger"
                onClick={handleClick}
            />
        </form>
    );
};

export default Form;
