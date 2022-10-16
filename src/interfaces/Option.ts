export interface Option {
    label: string
    value?: string
}

export interface OptionProps extends Option {
    first: boolean;
    index: number;
    last: boolean;
    moveTo: (newIndex: number, currentIndex: number) => void;
    onLabelChange: (label: string, index: number) => void;
    onDelete: (index: number) => void
}