import * as React from "react";
import * as ReactDOM from "react-dom/client";

interface AppProps {
    title: string;
}

const App = ({ title }: AppProps) => {
    return <h1>Hello tien oke {title}</h1>;
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(<App title="oke" />);
