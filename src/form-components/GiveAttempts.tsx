import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [givenAttempts, setGivenAttempts] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<number>(0);
    const attempts = givenAttempts || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts Left:{givenAttempts}
            <Form.Group controlId="requestedAttempts">
                <Form.Label></Form.Label>
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestAttempts(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setGivenAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setGivenAttempts(requestAttempts + givenAttempts)
                }
            >
                gain
            </Button>
        </div>
    );
}
