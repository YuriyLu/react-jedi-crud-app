import React from "react";
import PageContent from "./PageContent";

const dataPeople = [
    { first: "Mark", last: "Otto", handle: "@motto", id: "1" },
    { first: "Carl", last: "Reno", handle: "@ceno", id: "2" },
    { first: "Steve", last: "Smith", handle: "@ssteve", id: "3" },
];

const PeoplePage = () => {
    return (
        <PageContent
            data={dataPeople}
            tableHeader="People from Star Wars Universe"
            tableDescriptor="People"
        />
    );
};

export default PeoplePage;
