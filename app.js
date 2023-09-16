import React from "react"; // it will import react from node_modules.
import ReactDOM from "react-dom/client"; // video no 3 time (1.26.15) /client is must to use 

const heading1 = React.createElement(
    "h1",
    {
        id: "tittle",
    },
    "heading 1 from parcel"
);

const heading2 = React.createElement(
    "h1",
    {
        id: "tittle",
    },
    "heading 2"
);

const container = React.createElement(
    "div",
    {
        id: "container",
        hello: "world",
    },
    [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);




