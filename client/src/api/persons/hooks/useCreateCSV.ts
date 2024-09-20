import axios from "axios";
import { IPerson } from "../../../types";
import { TCreateCSVResponse } from "../types";
import { useState } from "react";

export function useCreateCSV() {
    const [isCSVLoading, setIsCSVLoading] = useState<boolean>(false);

    const createCSV = async (persons: IPerson[]) => {
        try {
            setIsCSVLoading(true);

            const response = await axios.post<void, TCreateCSVResponse>(
                `${import.meta.env.VITE_SERVER_URL}/persons/csv`,
                persons,
            );

            const fileURL = `${import.meta.env.VITE_SERVER_URL}/${response.data}`;
            window.open(fileURL, "_blank");
        } catch (error: unknown) {
            console.log(error);
        } finally {
            setIsCSVLoading(false);
        }
    };

    return { isCSVLoading, createCSV };
}
