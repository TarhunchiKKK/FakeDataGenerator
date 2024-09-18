import { Injectable } from "@nestjs/common";
import { fakerDE } from "@faker-js/faker";
import { RussianPersonCreator } from "./creators/russian-person.creator";
import { Person } from "./entities/person.entity";
import { PersonCreator } from "./creators/person.creator";
import { LocalesCodes } from "./shared";

@Injectable()
export class PersonsService {
    generatePersons(seed: number) {
        const personsCreator = new PersonCreator(LocalesCodes.France, seed);
        console.log(personsCreator.createPerson());
        console.log(personsCreator.createPerson());
    }
}
