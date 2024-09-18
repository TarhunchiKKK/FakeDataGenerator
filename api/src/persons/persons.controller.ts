import { Controller, Get, Param, Query } from "@nestjs/common";
import { PersonsService } from "./persons.service";

@Controller("persons")
export class PersonsController {
    constructor(private readonly personsService: PersonsService) {}

    @Get()
    generatePersons(@Query("seed") seed: number) {
        return this.personsService.generatePersons(+seed, 3.5);
    }
}
