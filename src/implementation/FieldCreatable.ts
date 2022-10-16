import {Field} from "../interfaces/Field";

export class FieldCreatable implements Field {
    constructor(public label: string, public desc: string) {
    }
}