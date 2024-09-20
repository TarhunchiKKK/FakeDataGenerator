import { useEffect, useState } from "react";
import { ILocalePair } from "../../../types";
import axios from "axios";
import { TGetLocalizationsResponse } from "../types";

export function useGetLocalizations() {
    const [localesPairs, setLocalesPairs] = useState<ILocalePair[]>([]);

    useEffect(() => {
        async function fetchLocalizations() {
            try {
                const response = await axios.get<void, TGetLocalizationsResponse>(
                    `${import.meta.env.VITE_SERVER_URL}/persons/localizations`,
                );

                setLocalesPairs(response.data);
            } catch (error: unknown) {
                console.log(error);
            }
        }

        fetchLocalizations();
    }, []);

    return localesPairs;
}
