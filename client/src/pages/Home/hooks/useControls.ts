import { useState } from "react";
import { minErrorsCount, personsQueryDebounceDelay } from "../../../constants";
import { useDebounce } from "../../../helpers";

export function useControls() {
    const [errorsCount, setErrorsCount] = useState<number>(minErrorsCount);
    const debouncedErrorsCount = useDebounce(errorsCount, personsQueryDebounceDelay);

    const handleErrorsCountChange = (count: number) => {
        setErrorsCount(count);
    };

    return {
        errorsCount: debouncedErrorsCount,
        handleErrorsCountChange,
    };
}
