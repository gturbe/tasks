import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple",
    "magenta",
    "cyan"
];
export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosonColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosonColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color-select "
                    label={color}
                    value={color}
                    checked={COLORS.includes(color)}
                    key={color}
                />
            ))}
            <div>You have chosen {chosenColor}</div>
        </div>
    );
}
