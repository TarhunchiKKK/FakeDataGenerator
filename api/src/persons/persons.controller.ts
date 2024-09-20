import { Controller, Get, Query } from "@nestjs/common";
import { PersonsService } from "./persons.service";
import { LocalesCodes } from "./enums/locales-codes.enum";

@Controller("persons")
export class PersonsController {
    constructor(private readonly personsService: PersonsService) {}

    @Get()
    public generatePersons(
        @Query("seed") seed: number,
        @Query("errors") errorsCount: number,
        @Query("count") count: number,
        @Query("locale") locale: LocalesCodes,
    ) {
        return this.personsService.generatePersons(+seed, +errorsCount, +count, locale);
    }

    @Get("/localizations")
    public getLocalizations() {
        return this.personsService.getLcales();
    }
}
