import { Faker, fakerDE, fakerEN_US, fakerFR, fakerRU } from "@faker-js/faker";
import { LocalesCodes } from "../shared";

const localesFakersMap: Record<LocalesCodes, Faker> = {
    [LocalesCodes.Russia]: fakerRU,
    [LocalesCodes.France]: fakerFR,
    [LocalesCodes.USA]: fakerEN_US,
    [LocalesCodes.Germany]: fakerDE,
};

export class PersonCreator {
    private faker: Faker;

    constructor(locale: LocalesCodes, seed: number) {
        this.faker = localesFakersMap[locale];
        this.faker.seed(seed);
    }

    createPerson(): string {
        return this.faker.phone.number({ style: "international" });
    }
}
