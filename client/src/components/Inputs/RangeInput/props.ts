export interface IRangeInputProps {
    label: string;

    value: number;

    onChange: (value: number) => void;

    minValue: number;

    maxValue: number;
}
