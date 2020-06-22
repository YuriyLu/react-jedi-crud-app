import React from "react";
import Button from "./Button";
import {nanoid} from "nanoid"

function Table({ columns, tableDescriptor, onDelete, data }) {
  
    if (!data) {
        return <h2>There is no data for {tableDescriptor} page</h2>;
    }

    const createCell = (item, columnTitle, id) => {
        return columnTitle.content ? columnTitle.content(item, id) : item[columnTitle.columnName];
    };

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">{tableDescriptor}</th>
                    {columns.map((columnTitle) => (
                        <th key={nanoid()} scope="col">
                            {columnTitle.columnName}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <th scope="row">{++index}</th>
                        {columns.map((columnTitle) => (
                            <td key={nanoid()}>
                                {createCell(item, columnTitle, item.id)}
                            </td>
                        ))}
                        <td>
                            <Button
                                onClick={() => onDelete(item.id)}
                                classes="btn btn-danger"
                                label="Delete"
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
