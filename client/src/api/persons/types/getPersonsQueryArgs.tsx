import { LocalesCodes } from "../../../types";

export type TGetPersonsQueryArgs = {
    seed: number;

    errorsCount: number;

    locale: LocalesCodes;

    count: number;
};
