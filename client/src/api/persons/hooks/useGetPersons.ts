import { useEffect, useState } from "react";
import axios from "axios";
import { IPerson, LocalesCodes } from "../../../types";
import { TGetPersonsResponse } from "../types";
import { useHaveChanged } from "../../../helpers";
import { initialPersonsPerPage, personsPerPage } from "../constants";

export function useGetPersons(seed: number, errorsCount: number, locale: LocalesCodes) {
    const [persons, setPersons] = useState<IPerson[]>([]);
    const [page, setPage] = useState<number>(0);

    const haveSeedChanged = useHaveChanged(seed);
    const haveErrorsCountChanged = useHaveChanged(errorsCount);
    const haveLocaleChanged = useHaveChanged(locale);
    const haveControlsChange = haveSeedChanged || haveErrorsCountChanged || haveLocaleChanged;

    useEffect(() => {
        async function fetchPersons() {
            try {
                const count = page === 0 ? initialPersonsPerPage : personsPerPage;

                const response = await axios.get<void, TGetPersonsResponse>(
                    `${import.meta.env.VITE_SERVER_URL}/persons`,
                    {
                        params: {
                            seed: seed + page,
                            errors: errorsCount,
                            count: count,
                            locale: locale,
                        },
                    },
                );

                setPersons((prevPersons) => [...prevPersons, ...response.data]);
            } catch (error: unknown) {
                console.log(error);
            }
        }
        if (haveControlsChange) {
            setPersons([]);
            setPage(0);
        } else {
            fetchPersons();
        }
    }, [seed, errorsCount, locale, page, haveControlsChange]);

    return {
        persons,
        onScroll: () => setPage((prev) => prev + 1),
    };
}
