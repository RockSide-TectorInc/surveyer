import {Field} from "../interfaces/Field";

export class FieldCreatable {
    static setValue = (property: "label" | "desc", value: string) => (prevState: Field) => {
        return {...prevState, [property]: value}
    }
}