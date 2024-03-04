import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, changeNumAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setProgress(true);
        changeNumAttempts(attempts - 1);
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    function increaseAttempts(): void {
        changeNumAttempts(attempts + 1);
    }
    return (
        <div>
            <Button
                onClick={() => setProgress(true)}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => changeNumAttempts(attempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
