import { Injectable } from "@nestjs/common";
import { PersonCreator } from "./creators/person.creator";
import { LocalesCodes } from "./enums/locales-codes.enum";

@Injectable()
export class PersonsService {
    generatePersons(seed: number) {
        const personsCreator = new PersonCreator(LocalesCodes.France, seed);
        console.log(personsCreator.createPerson().id);
        console.log(personsCreator.createPerson().id);
    }
}
