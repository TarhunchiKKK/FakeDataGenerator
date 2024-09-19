import { ChangeEvent, useState } from "react";
import { IRangeInputProps } from "./props";
import { validateNumericString } from "../../../helpers";

export function RangeInput({ label, value, onChange, minValue, maxValue }: IRangeInputProps) {
    const [textInputValue, setTextInputValue] = useState<string>(value.toString());

    const handleValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        const validatedValue = validateNumericString(e.target.value ?? "0", {
            minValue,
            maxValue,
        });
        onChange(+validatedValue);
        setTextInputValue(validatedValue);
    };

    return (
        <div className="flex flex-row items-center gap-3">
            <label>{label}</label>

            <input
                type="range"
                min={minValue}
                max={maxValue}
                value={value}
                onChange={handleValueChanged}
            />

            <input
                className="px-2 border-2 border-slate-600 outline-none rounded-md max-w-20"
                type="number"
                step={0.5}
                value={textInputValue}
                onChange={handleValueChanged}
            />
        </div>
    );
}
