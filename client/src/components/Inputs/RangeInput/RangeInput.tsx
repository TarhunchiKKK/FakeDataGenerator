import { ChangeEvent, useState } from "react";
import { IRangeInputProps } from "./props";
import { validateNumericString } from "../../../helpers";

export function RangeInput({ label, value, onChange, minValue, maxValue }: IRangeInputProps) {
    const [textInputValue, setTextInputValue] = useState<string>(value.toString());

    const handleTextInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const validatedValue = validateNumericString(e.target.value, "0", { minValue, maxValue });
        onChange(+validatedValue);
        setTextInputValue(validatedValue);
    };

    const handleRangeValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onChange(+value);
        setTextInputValue(value);
    };

    return (
        <div className="flex flex-row items-center gap-3">
            <label>{label}</label>

            <input
                type="range"
                min={minValue}
                max={maxValue}
                value={value}
                onChange={handleRangeValueChange}
            />

            <input
                type="text"
                className="px-2 border-2 border-slate-600 outline-none rounded-md max-w-20"
                value={textInputValue}
                onChange={handleTextInputValueChange}
            />
        </div>
    );
}
