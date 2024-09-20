import { Module } from "@nestjs/common";
import { PersonsModule } from "./persons/persons.module";
import { FilesModule } from "./files/files.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";
import { StaticDirName } from "./shared/constants/static-dir-name";

@Module({
    imports: [
        PersonsModule,
        FilesModule,
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, StaticDirName),
            exclude: ["/persons/(.*)"],
        }),
    ],
})
export class AppModule {}
