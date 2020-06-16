import React, { useState } from "react";
import Table from "../common/Table";
import Form from "../common/Form";

const PageContent = ({ data, tableHeader, tableDescriptor }) => {
    const [people, setPeople] = useState(data);

    const columns = Object.keys(data[0]);

    const handleAppPerson = (personData) => {
        const dataNew = [...people, personData];
        setPeople(dataNew);
    };

    const getInitialPeopleData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {});
    };

    const onDeleteData = (index) => {
        const dataNew = [...people];
        dataNew.splice(index - 1, 1);
        setPeople(dataNew);
        data = dataNew;
        console.log(data);
    };

    if (people === undefined || people.length === 0) {
        return (
            <div>
                <div className="container">
                    <h1>There are no {tableDescriptor} data!</h1>
                    <Form
                        initialData={getInitialPeopleData()}
                        columns={columns}
                        onAddData={handleAppPerson}
                    />
                </div>
            </div>
        );
    } else
        return (
            <div>
                <div className="container">
                    <Table
                        data={people}
                        columns={columns}
                        tableDescriptor={tableDescriptor}
                        onDeleteData={onDeleteData}
                        tableHeader={tableHeader}
                    />
                    <Form
                        initialData={getInitialPeopleData()}
                        columns={columns}
                        onAddData={handleAppPerson}
                    />
                </div>
            </div>
        );
};

export default PageContent;
