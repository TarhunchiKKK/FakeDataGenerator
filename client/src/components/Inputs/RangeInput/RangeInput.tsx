import { ChangeEvent, useState } from "react";
import { IRangeInputProps } from "./props";
import { numericSymbolsRegexp } from "../../constants";

export function RangeInput({ value, onChange, minValue, maxValue }: IRangeInputProps) {
    const [textInputValue, setTextInputValue] = useState<string>(value.toString());

    const handleTextInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.target.value ?? "0";
        const numericValue = targetValue.replace(numericSymbolsRegexp, "");
        const validatedValue = Math.min(+numericValue, maxValue);

        onChange(validatedValue);
        setTextInputValue(validatedValue.toString());
    };

    const handleRangeValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        onChange(+value);
        setTextInputValue(value);
    };

    return (
        <div className="flex flex-row gap-3">
            <input
                type="range"
                min={minValue}
                max={maxValue}
                value={value}
                onChange={handleRangeValueChange}
            />
            <input
                type="text"
                className="border-2 border-slate-600 outline-none rounded-md max-w-20"
                value={textInputValue}
                onChange={handleTextInputValueChange}
            />
        </div>
    );
}
