import { Faker } from "@faker-js/faker";
import { LocalesCodes } from "../../enums/locales-codes.enum";
import { Person } from "../../entities/person.entity";
import { LocalesFakersMap } from "./constants/locales-fakers-map";
import { PersonIdLength } from "./constants/person-id-length";
import { AddressTypes } from "./enums/address-types.enum";
import { AddressCreators } from "./constants/address-creators";

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
        const addressType = this.faker.helpers.enumValue(AddressTypes);
        const addressCreator = AddressCreators[addressType];
        return addressCreator(this.faker);
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
