import { Injectable } from "@nestjs/common";
import { PersonCreator } from "./utils/person-creator/person.creator";
import { LocalesCodes } from "./enums/locales-codes.enum";
import { Person } from "./entities/person.entity";

@Injectable()
export class PersonsService {
    generatePersons(seed: number) {
        const personsCreator = new PersonCreator(LocalesCodes.France, seed);
        const persons: Person[] = [];
        for (let i = 0; i < 3; i++) {
            const person = personsCreator.createPerson();
            persons.push(person);
        }
        return persons;
    }
}
