import {Field} from "../interfaces/Field";

export class FieldCreatable implements Field {
    constructor(public label: String, public desc: String) {
    }
}