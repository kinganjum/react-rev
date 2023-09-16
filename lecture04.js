import React from "react"; // it will import react from node_modules.
import ReactDOM from "react-dom/client"; // video no 3 time (1.26.15) /client is must to use 

// const heading1 = React.createElement(       //React Element   
//     "h1",
//     {
//         id: "tittle",
//         key: "h1",
//     },
//     "heading 1 from parcel"
// );

// const heading2 = React.createElement(       //React Element
//     "h1",
//     {
//         id: "tittle",
//         key: "h2", // unique key must be use
//     },
//     "heading 2 haha"
// );

// const container = React.createElement(      //React Element
//     "div",
//     {
//         id: "container",
//         hello: "world",
//     },
//     [heading1, heading2]
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container); // to call react element

const aa = (
    <h1 id="tittle" key="a">
        suiiiiii
    </h1>
);


// *******\\
//function
// two types to write function regular and arrow
//regular :-
// here at line no 48 we called element inside react component using {} simply we pass aa variable in fn.
const HeaderComponent = function () {
        return (
        <div>
             {aa}          
            <h1>anjum</h1>
            <h2>ustad</h2>
        </div>
        );    
    };

//arrow :-
// const HeaderComponent2 = () => {
//     <div>
//          <h1>anjum</h1>
//         <h2>ustad</h2>
//     </div>
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);  // to call function.
 



