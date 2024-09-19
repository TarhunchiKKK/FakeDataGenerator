import { useState, ChangeEvent, MouseEvent } from "react";
import { IoIosShuffle } from "react-icons/io";
import { IRandomizedInputProps } from "./props";
import { validateNumericString } from "../../../helpers";

export function RandomizedInput({
    label,
    value,
    onChange,
    minValue,
    maxValue,
    ganerateValue,
}: IRandomizedInputProps) {
    const [textInputValue, setTextInputValue] = useState<string>(value.toString());

    const handleTextInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const validatedValue = validateNumericString(e.target.value, "0", { minValue, maxValue });
        onChange(+validatedValue);
        setTextInputValue(validatedValue);
    };

    const handleGenerateValue = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const generatedValue = ganerateValue();
        onChange(generatedValue);
        setTextInputValue(generatedValue.toString());
    };

    return (
        <div className="flex flex-row items-center gap-3">
            <label>{label}</label>

            <input
                type="text"
                className="px-2 border-2 border-slate-600 outline-none rounded-md max-w-24"
                value={textInputValue}
                onChange={handleTextInputValueChange}
            />

            <button title="Generate" onClick={handleGenerateValue}>
                <IoIosShuffle size={36} />
            </button>
        </div>
    );
}
