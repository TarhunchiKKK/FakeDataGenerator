import { useEffect, useState } from "react";
import axios from "axios";
import { IPerson } from "../../../interfaces";
import { TGetPersonsQueryArgs, TGetPersonsResponse } from "../types";
import { useHaveChanged } from "../../../helpers";

export function useGetPersons({ seed, count, errorsCount }: TGetPersonsQueryArgs) {
    const [persons, setPersons] = useState<IPerson[]>([]);
    const [page, setPage] = useState<number>(0);

    const haveSeedChanged = useHaveChanged(seed);
    const haveErrorsCountChanged = useHaveChanged(errorsCount);

    useEffect(() => {
        async function fetchPersons() {
            try {
                const response = await axios.get<void, TGetPersonsResponse>(
                    `${import.meta.env.VITE_SERVER_URL}/persons`,
                    {
                        params: {
                            seed: seed + page,
                            errors: errorsCount,
                            count: count,
                        },
                    },
                );

                if (haveSeedChanged || haveErrorsCountChanged) {
                    setPersons(response.data);
                } else {
                    setPersons((prevPersons) => [...prevPersons, ...response.data]);
                }
            } catch (error: unknown) {
                console.log(error);
            }
        }

        fetchPersons();
    }, [seed, errorsCount, count, page, haveSeedChanged, haveErrorsCountChanged]);

    return {
        persons,
        onScroll: () => setPage((prev) => prev + 1),
    };
}
