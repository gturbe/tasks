import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button } from "react-bootstrap";
import table_bear from "./photos/table_bear.jpg";
function App(): JSX.Element {
    return (
        <div className="App">
            <h1 className="App-header">This is a new header</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Gregory Turbe
            </header>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <ul>
                <li>Brown Bear</li>
                <li>Black Bear</li>
                <li>Polar Bear</li>
            </ul>
            <img src={table_bear} alt="chill bear at a table" />
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
