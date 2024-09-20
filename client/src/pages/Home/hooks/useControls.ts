import { useState } from "react";
import { minErrorsCount, personsQueryDebounceDelay } from "../../../constants";
import { generateSeed, useDebounce } from "../../../helpers";

export function useControls() {
    const [errorsCount, setErrorsCount] = useState<number>(minErrorsCount);
    const debouncedErrorsCount = useDebounce(errorsCount, personsQueryDebounceDelay);

    const handleErrorsCountChange = (count: number) => {
        setErrorsCount(count);
    };

    const [seed, setSeed] = useState<number>(() => generateSeed());
    const debouncedSeed = useDebounce(seed, personsQueryDebounceDelay);

    const handleSeedChange = (newSeed: number) => {
        setSeed(newSeed);
    };

    return {
        errorsCount,
        debouncedErrorsCount,
        handleErrorsCountChange,
        seed,
        debouncedSeed,
        handleSeedChange,
    };
}
