import { useState } from "react";
import axios from "axios";
import { IPerson } from "../../../interfaces";
import { TGetPersonsQueryArgs, TGetPersonsResponse } from "../types";

export function useLazyGetPersons(queryArgs: TGetPersonsQueryArgs) {
    const [persons, setPersons] = useState<IPerson[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const fetchPersons = async () => {
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
    };

    return { persons, isLoading, isError, fetchPersons };
}
