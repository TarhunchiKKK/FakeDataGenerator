import { useState } from "react";
import { generateSeed, useDebounce } from "../../../helpers";
import { personsQueryDebounceDelay } from "../../../constants";

export function useSeedControl() {
    const [seed, setSeed] = useState<number>(() => generateSeed());

    const debouncedSeed = useDebounce(seed, personsQueryDebounceDelay);

    const handleSeedChange = (newSeed: number) => {
        setSeed(newSeed);
    };

    return {
        seed,
        debouncedSeed,
        handleSeedChange,
    };
}
