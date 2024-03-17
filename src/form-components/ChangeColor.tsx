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
            {COLORS.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id={`color-select-${color}`}
                    label={
                        <span style={{ backgroundColor: color }}>{color}</span>
                    }
                    value={color}
                    checked={chosenColor === color}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: chosenColor }}
                    data-testid="colored-box"
                >
                    {chosenColor}
                </span>
            </div>
        </div>
    );
}
