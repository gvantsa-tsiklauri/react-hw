import React from "react";
import ReactDOM from "react-dom/client";
import Application from "./aplikacia.js";

class App extends React.Component {
    render() {
        return (
            <Application />
        );
    }
}

var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App />);
