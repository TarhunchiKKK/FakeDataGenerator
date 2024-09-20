import { faker } from "@faker-js/faker";
import { Injectable } from "@nestjs/common";
import { PersonCreator } from "./utils/person-creator/person-creator";
import { LocalesCodes } from "./enums/locales-codes.enum";
import { Person } from "./entities/person.entity";
import { PersonsDistorter } from "./utils/persons-distorter/persons-distorter";
import { LocalePair } from "./entities/locale-pair.entity";

@Injectable()
export class PersonsService {
    public generatePersons(seed: number, errorsPerRecord: number, count: number) {
        faker.seed(seed);

        const personsCreator = new PersonCreator(LocalesCodes.France, seed);
        const persons: Person[] = [];

        for (let i = 0; i < count; i++) {
            const person = personsCreator.createPerson();
            PersonsDistorter.distortPerson(person, errorsPerRecord);
            persons.push(person);
        }

        return persons;
    }

    public getLcales() {
        return Object.entries(LocalesCodes).map(([title, code]) => new LocalePair(title, code));
    }
}
