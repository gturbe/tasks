import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswerForm">
                <Form.Label>Enter Answer</Form.Label>
                <Form.Control
                    type="text"
                    value={givenAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setGivenAnswer(event.target.value)
                    }
                />
            </Form.Group>
            <div>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
