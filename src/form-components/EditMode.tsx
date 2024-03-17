/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function EditMode(): JSX.Element {
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [userName, setUserName] = useState<string>("Your Name");
    const [editMode, setEditMode] = useState<boolean>(false);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-in-EditMode"
                label="Enter EditMode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ? (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="in-EditMode"
                        label="Is Student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                    <Form.Group controlId="formUserName">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control
                            value={userName}
                            onChange={updateUserName}
                        />{" "}
                    </Form.Group>
                </div>
            ) : (
                ""
            )}
            <div>
                {userName}
                {isStudent ? " is a student" : " is not a student"}
            </div>
        </div>
    );
}
