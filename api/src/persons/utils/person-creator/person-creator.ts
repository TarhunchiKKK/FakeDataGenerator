import { Faker } from "@faker-js/faker";
import { LocalesCodes } from "../../enums/locales-codes.enum";
import { Person } from "../../entities/person.entity";
import { LocalesFakersMap } from "./constants/locales-fakers-map";
import { PersonIdLength } from "./constants/person-id-length";

export class PersonCreator {
    private faker: Faker;

    constructor(locale: LocalesCodes, seed: number) {
        this.faker = LocalesFakersMap[locale];
        this.faker.seed(seed);
    }

    private createId(): string {
        return this.faker.string.alphanumeric({ length: PersonIdLength });
    }

    private createName(): string {
        return this.faker.person.fullName();
    }

    private createPhone(): string {
        return this.faker.phone.number({ style: "international" });
    }

    private createAddress() {
        const city = this.faker.location.city();
        const street = this.faker.location.street();
        const buildingNumber = this.faker.location.buildingNumber();
        return [city, street, buildingNumber].join(", ");
    }

    public createPerson(): Person {
        return {
            id: this.createId(),
            name: this.createName(),
            phone: this.createPhone(),
            address: this.createAddress(),
        };
    }
}
