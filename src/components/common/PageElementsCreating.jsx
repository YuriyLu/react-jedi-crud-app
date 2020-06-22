import React from "react"
import { Link } from "react-router-dom";

export const getColumnNames = (title, data) => {
    if (!data.length) {
        return [];
    }

    return Object.keys(data[0]).map((columnName) => {
        if (columnName === "name") {
            return {
                columnName: columnName,
                content: ({ name, id }) => (
                    <Link
                        style={{ color: "#ffc107" }}
                        to={{
                            pathname: `/${title}/${id}`,
                            propsSearch: {
                                id,
                                data,
                            },
                        }}
                    >
                        {name}
                    </Link>
                ),
            };
        } else return { columnName: columnName };
    });
}
