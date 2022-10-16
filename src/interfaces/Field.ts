export interface Field {
    label: string;
    desc?: string
}

export interface FieldProps extends Field {
    onLabelChange: (value: string) => void
    onDescChange: (value: string) => void
}