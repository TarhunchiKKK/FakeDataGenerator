import { Controller, Get, Param, Query } from "@nestjs/common";
import { PersonsService } from "./persons.service";

@Controller("persons")
export class PersonsController {
    constructor(private readonly personsService: PersonsService) {}

    @Get()
    public generatePersons(@Query("seed") seed: number, @Query("errors") errorsCount: number) {
        return this.personsService.generatePersons(+seed, +errorsCount);
    }
}
