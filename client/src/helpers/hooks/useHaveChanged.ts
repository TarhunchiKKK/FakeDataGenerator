import { useEffect, useRef, useState } from "react";

export function useHaveChanged<Type>(value: Type): boolean {
    const previousStateRef = useRef<Type>(value);
    const [haveChanged, setHaveChanged] = useState<boolean>(false);

    useEffect(() => {
        if (previousStateRef.current !== value) {
            setHaveChanged(true);
        }
        previousStateRef.current = value;
    }, [value]);

    return haveChanged;
}
