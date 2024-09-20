import { IButtonProps } from "./props";

export function Button({ content, onClick, isLoading }: IButtonProps) {
    return (
        <button
            className={`px-5 py-2 rounded-md bg-slate-300 ${
                isLoading ? "cursor-wait opacity-35" : "cusor-pointer"
            }`}
            onClick={onClick}
        >
            {content}
        </button>
    );
}
