import { ChangeEvent } from "react";
import { IDropdownProps } from "./props";

export function Dropdown({ label, value, onChange, options }: IDropdownProps) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="flex flex-row items-center gap-3">
            <label>{label}</label>

            <select
                value={value}
                onChange={handleChange}
                className="px-2 h-7 border-2 border-slate-600 outline-none rounded-md max-w-36"
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
