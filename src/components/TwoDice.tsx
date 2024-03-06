/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>((d6() + 1) % 6);
    return (
        <div>
            Left Die:
            <span data-testid="left-die">
                {() => setLeftDie(d6())}
                {leftDie}
            </span>
            Right Die:
            <span data-testid="right-die">
                {() => setRightDie(1 + ((leftDie + d6()) % 6))}
                {rightDie}
            </span>
            <Button
                onClick={() => setLeftDie(1 + ((leftDie + d6()) % 6))}
                disabled={leftDie === rightDie}
            >
                Roll Left Die
            </Button>
            <Button
                onClick={() => setRightDie(1 + ((rightDie + d6()) % 6))}
                disabled={leftDie === rightDie}
            >
                Roll Right Die
            </Button>
            {leftDie === rightDie && leftDie === 1 ? (
                <span>You Lose!</span>
            ) : (
                ""
            )}
            {leftDie === rightDie && leftDie !== 1 ? <span>You Win!</span> : ""}
        </div>
    );
}
