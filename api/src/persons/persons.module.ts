import { Module } from "@nestjs/common";
import { PersonsService } from "./persons.service";
import { PersonsController } from "./persons.controller";
import { FilesModule } from "src/files/files.module";

@Module({
    imports: [FilesModule],
    controllers: [PersonsController],
    providers: [PersonsService],
})
export class PersonsModule {}
