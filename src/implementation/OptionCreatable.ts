import {Option} from "../interfaces/Option";

export class OptionCreatable implements Option {
    constructor(public label: string, public value = label) {
    }

    static makeValueFromLabel = (value: string) => {
        return value.trim().replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();
    }

    static newOption = (): Option => {
        return {label: ""}
    }

    static deleteOption = (index: number) => (prevState: Option[]): Option[] => {
        return prevState.filter((value1, index1) => index1 !== index)
    }

    static onChangeLabel = (position: number, label: string) => (prevState: Option[]) => {
        return prevState.map((value, index) => {
            if (index === position) return {...value, label};
            return value;
        })
    }

    static moveOption = (newIndex: number, currentIndex: number) => (prevState: Option[]) => {
        const copy = [...prevState];
        const nextPosition = copy[newIndex];
        const currentPosition = copy[currentIndex];

        copy[currentIndex] = nextPosition;
        copy[newIndex] = currentPosition;

        return copy;
    }
}