import React from "react";
import Button from "./Button";

const Table = ({ columns, data, tableDescriptor, onDeleteData, tableHeader }) => {
    const handelClick = (index) => {
        onDeleteData(index);
    };

    return (
        <div>
            <h1>{tableHeader}</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">{tableDescriptor}</th>
                        {columns.map((columnTitle) => (
                            <th key={columnTitle} scope="col">
                                {columnTitle}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (

                        <tr key={item.id}>
                            <th scope="row">{++index}</th>
                            {columns.map((columnTitle) => (
                                <td key={item[columnTitle] + columnTitle}>
                                    {item[columnTitle]}
                                </td>
                            ))}
                            <td>
                                <Button
                                    label="Delete"
                                    classes="btn btn-danger"
                                    onClick={() =>
                                        handelClick(index)
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
