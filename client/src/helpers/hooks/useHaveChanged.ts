import { useEffect, useState } from "react";

export function useHaveChanged<Type>(value: Type): boolean {
    const [prevValue, setPrevValue] = useState<Type>(value);

    useEffect(() => {
        setPrevValue(value);
    }, [value]);

    return prevValue !== value;
}
