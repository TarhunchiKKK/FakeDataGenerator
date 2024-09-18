import { Faker, fakerDE, fakerEN_US, fakerFR, fakerRU } from "@faker-js/faker";
import { LocalesCodes } from "../enums/locales-codes.enum";

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

    private createId() {
        return this.faker.string.alphanumeric({ length: 15 });
    }

    private createName() {
        const firstName = this.faker.person.firstName();
        const lastName = this.faker.person.lastName();
        return `${firstName} ${lastName}`;
    }

    private createPhone() {
        return this.faker.phone.number({ style: "international" });
    }

    public createPerson() {
        return {
            id: this.createId(),
            name: this.createName(),
            phone: this.createPhone(),
        };
    }
}
