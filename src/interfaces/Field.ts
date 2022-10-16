import React from "react";

export interface Field {
    label: String;
    desc?: String
}

export interface FieldProps extends Field {
    onLabelChange: (value: string) => void
    onDescChange: (value: string) => void
}