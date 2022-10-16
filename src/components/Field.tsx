import React from 'react';
import {FieldProps} from "../interfaces/Field";
import AppTextField from "./common/AppTextField";

const Field = ({label, desc, onLabelChange, onDescChange}: FieldProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log("Field Change", event.target)
        if (event.target.name === "label")
            onLabelChange(value)
        else onDescChange(value)
    };
    return (
        <>
            <AppTextField value={label} required label="Label" name={"label"} onChange={handleChange}/>
            <AppTextField label="Description" multiline rows={4} name={"desc"} value={desc} onChange={handleChange}/>
        </>
    );
};

export default Field;