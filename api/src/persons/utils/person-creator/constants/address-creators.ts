import { Faker } from "@faker-js/faker/.";
import { AddressTypes } from "../enums/address-types.enum";

export const AddressCreators: Record<AddressTypes, (faker: Faker) => string> = {
    [AddressTypes.State_City_Street_Building_SecondaryAddress]: (faker: Faker) => {
        const state = faker.location.state();
        const city = faker.location.city();
        const street = faker.location.street();
        const buildingNumber = faker.location.buildingNumber();
        const secondaryAddress = faker.location.secondaryAddress();
        return [state, city, street, buildingNumber, secondaryAddress].join(", ");
    },
    [AddressTypes.City_Street_Building_SecondaryAddress]: (faker: Faker) => {
        const city = faker.location.city();
        const street = faker.location.street();
        const buildingNumber = faker.location.buildingNumber();
        const secondaryAddress = faker.location.secondaryAddress();
        return [city, street, buildingNumber, secondaryAddress].join(", ");
    },
    [AddressTypes.State_City_StreetAddress]: (faker: Faker) => {
        const state = faker.location.state();
        const city = faker.location.city();
        const streetAddress = faker.location.streetAddress();
        return [state, city, streetAddress].join(", ");
    },
    [AddressTypes.City_StreetAddress]: (faker: Faker) => {
        const city = faker.location.city();
        const streetAddress = faker.location.streetAddress();
        return [city, streetAddress].join(", ");
    },
};
