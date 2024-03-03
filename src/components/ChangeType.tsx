import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function flipQuestionType(): void {
        type === "short_answer_question"
            ? "multiple_choice_question"
            : "short_answer_question";
    }
    return (
        <div>
            Current Question Type:<span>{type}</span>
            <Button onClick={flipQuestionType}>Change Type</Button>
        </div>
    );
}
