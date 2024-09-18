import { faker } from "@faker-js/faker";
import { Injectable } from "@nestjs/common";
import { PersonCreator } from "./utils/person-creator/person-creator";
import { LocalesCodes } from "./enums/locales-codes.enum";
import { Person } from "./entities/person.entity";
import { PersonsDistorter } from "./utils/persons-distorter/persons-distorter";

@Injectable()
export class PersonsService {
    public generatePersons(seed: number, errorsPerRecord: number) {
        faker.seed(seed);
        const personsCreator = new PersonCreator(LocalesCodes.France, seed);
        const persons: Person[] = [];
        for (let i = 0; i < 3; i++) {
            const person = personsCreator.createPerson();
            PersonsDistorter.distortPerson(person, errorsPerRecord);
            persons.push(person);
        }
        return persons;
    }
}
