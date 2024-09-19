export interface IRandomizedInputProps {
    label: string;

    value: string;

    onChange: (value: number) => void;

    minValue: number;

    maxValue: number;

    ganerateValue: () => number;
}
