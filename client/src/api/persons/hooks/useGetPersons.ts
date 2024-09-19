import { useEffect, useState } from "react";
import axios from "axios";
import { IPerson } from "../../../interfaces";
import { TGetPersonsQueryArgs, TGetPersonsResponse } from "../types";

export function useGetPersons(queryArgs: TGetPersonsQueryArgs) {
    const [persons, setPersons] = useState<IPerson[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        async function fetchPersons() {
            try {
                setIsError(false);
                setIsLoading(true);

                const response = await axios.get<void, TGetPersonsResponse>(
                    `${import.meta.env.VITE_SERVER_URL}/persons`,
                    {
                        params: {
                            seed: queryArgs.seed,
                            errors: queryArgs.errorsCount,
                        },
                    },
                );

                setPersons(response.data);
            } catch (_: unknown) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPersons();
    }, [queryArgs.seed, queryArgs.errorsCount]);

    return { persons, isLoading, isError };
}
