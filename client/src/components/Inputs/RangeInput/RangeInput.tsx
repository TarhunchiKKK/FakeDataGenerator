import { ChangeEvent, useState } from "react";
import { IRangeInputProps } from "./props";

export function RangeInput({
    label,
    value,
    onChange,
    minValue,
    maxValue,
    minRangeValue,
    maxRangeValue,
}: IRangeInputProps) {
    const [rangeValue, setRangeValue] = useState<number>(value);
    const [inputValue, setInputValue] = useState<number>(value);

    const handleRangeValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
        const targetValue = +e.target.value;
        setRangeValue(targetValue);
        setInputValue(targetValue);
        onChange(targetValue);
    };

    const handleInputValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
        const targetValue = +e.target.value;
        onChange(targetValue);
        setRangeValue(Math.min(maxRangeValue, targetValue));
        setInputValue(targetValue);
    };

    return (
        <div className="flex flex-row items-center gap-2">
            <label>{label}</label>

            <input
                type="range"
                min={minRangeValue}
                max={maxRangeValue}
                step={0.5}
                value={rangeValue}
                onChange={handleRangeValueChanged}
            />

            <input
                className="px-2 border-2 border-slate-600 outline-none rounded-md max-w-20"
                type="number"
                min={minValue}
                max={maxValue}
                step={1}
                value={inputValue}
                onChange={handleInputValueChanged}
            />
        </div>
    );
}
