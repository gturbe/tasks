import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday =
    | "Halloween"
    | "Christmas"
    | "New Years"
    | "Fourth of July"
    | "Thanksgiving";
export function CycleHoliday(): JSX.Element {
    const [holiday, changeHoliday] = useState<Holiday>("Halloween");
    function nextAlphabetically(): void {
        const properOrder: Holiday[] = [
            "Christmas",
            "Fourth of July",
            "New Years",
            "Thanksgiving",
            "Halloween"
        ];
        const currIndex = properOrder.findIndex(
            (hol: Holiday): boolean => hol === holiday
        );
        const nextIndex = (currIndex + 1) % 5;
        const newHoliday = properOrder[nextIndex];
        changeHoliday(newHoliday);
    }
    function nextOnCalender(): void {
        const properOrder: Holiday[] = [
            "New Years",
            "Fourth of July",
            "Halloween",
            "Thanksgiving",
            "Christmas"
        ];
        const currIndex = properOrder.findIndex(
            (hol: Holiday): boolean => hol === holiday
        );
        const nextIndex = (currIndex + 1) % 5;
        const newHoliday = properOrder[nextIndex];
        changeHoliday(newHoliday);
    }
    return (
        <div>
            Holiday: {holiday}
            <Button onClick={nextAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={nextOnCalender}>Advance by Place in Year</Button>
        </div>
    );
}
