import { faker } from "@faker-js/faker";
import { Person } from "../../entities/person.entity";
import { PersonFields } from "./constants/person-fields";
import { ErrorTypes } from "./enums/error-types.enum";
import { DistortionFunctions } from "./constants/distortion-functions";
import { PersonFieldMinLength } from "./constants/person-field-min-length";

export class PersonsDistorter {
    private static determineErrorsCount(errorsPerRecord: number): number {
        if (Number.isInteger(errorsPerRecord)) {
            return errorsPerRecord;
        }

        const additionalErrorsCount = faker.datatype.boolean() ? 1 : 0;
        return Math.floor(errorsPerRecord) + additionalErrorsCount;
    }

    private static getErrorType(): ErrorTypes {
        return faker.helpers.enumValue(ErrorTypes);
    }

    private static getDistortionField(): keyof Person {
        return faker.helpers.arrayElement(PersonFields);
    }

    private static getDistortionIndex(source: string): number {
        return faker.number.int(source.length - 2);
    }

    private static distortPersonOnce(person: Person) {
        const distortionField = this.getDistortionField();

        if (person[distortionField].length < PersonFieldMinLength) {
            return;
        }

        const distortionIndex = this.getDistortionIndex(person[distortionField]);
        const errorType = this.getErrorType();
        const distortFunction = DistortionFunctions[errorType];
        person[distortionField] = distortFunction(person[distortionField], distortionIndex);
    }

    public static distortPerson(person: Person, errorsPerRecord: number): void {
        errorsPerRecord = this.determineErrorsCount(errorsPerRecord);

        for (let i = 0; i < errorsPerRecord; i++) {
            this.distortPersonOnce(person);
        }
    }
}
