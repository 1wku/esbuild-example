import * as React from "react";
import * as ReactDOM from "react-dom/client";

const App = () => {
    return <h1>Hello tien Javascript</h1>;
};

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(<App />);
