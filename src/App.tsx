import React from "react";
import "./App.css";
import Button from "react-bootstrap/esm/Button";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Gregory Turbe
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <ul>
                <li>Brown Bear</li>
                <li>Black Bear</li>
                <li>Polar bear</li>
                <li>Panda bear</li>
                <li>Sun bear</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
