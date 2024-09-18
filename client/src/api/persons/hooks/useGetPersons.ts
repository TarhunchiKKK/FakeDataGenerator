import { useEffect, useState } from "react";
import axios from "axios";
import { IPerson } from "../../../interfaces";
import { TGetPersonsResponse } from "../types";

const seed = 15;

export function useGetPersons() {
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
                            seed,
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
    }, []);

    return { persons, isLoading, isError };
}
