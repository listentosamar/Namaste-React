// const heading = React.createElement("h1", 
// {id:"heading"}, 
// "Hello word of React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"
    },
    [React.createElement("h1",{},"Hi this is netsted element"),
     React.createElement("h2",{},"Hi this is sibling element")
    ])
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);