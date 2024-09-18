import { Faker, fakerDE, fakerEN_US, fakerFR, fakerRU } from "@faker-js/faker";
import { LocalesCodes } from "src/persons/enums/locales-codes.enum";

export const LocalesFakersMap: Record<LocalesCodes, Faker> = {
    [LocalesCodes.Russia]: fakerRU,
    [LocalesCodes.France]: fakerFR,
    [LocalesCodes.USA]: fakerEN_US,
    [LocalesCodes.Germany]: fakerDE,
};
