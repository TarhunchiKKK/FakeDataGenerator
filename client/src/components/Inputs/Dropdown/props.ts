export interface IDropdownProps {
    label: string;

    value: string;

    onChange: (value: string) => void;

    options: { title: string; value: string }[];
}
