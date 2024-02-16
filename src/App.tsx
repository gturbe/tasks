import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "src/photos/table_bear.jpg";

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
            <img src="table_bear.jpg" alt="cool bear sitting at a table" />
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
            <Container>
                <Row>
                    <Col>
                        First Column
                        <div>
                            width:200px; height:500px; backgroundColor: #E22800
                        </div>
                    </Col>
                    <Col>
                        Second Column
                        <div>
                            width:200px; height:500px; backgroundColor: #E22800
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
