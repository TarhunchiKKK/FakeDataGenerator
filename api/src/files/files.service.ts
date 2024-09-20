import { Injectable } from "@nestjs/common";
import { generateFilename } from "./helpers/generateFilename";
import { stringify } from "csv-stringify/sync";
import * as fs from "fs";
import * as path from "path";
import { StaticDirName } from "src/shared/constants/static-dir-name";

@Injectable()
export class FilesService {
    public createCSVFile(entities: object[]) {
        const filename = generateFilename() + ".csv";
        const filepath = path.resolve(__dirname, "..", StaticDirName);
        if (!fs.existsSync(filepath)) {
            fs.mkdirSync(filepath, { recursive: true });
        }

        const fullPath = path.join(filepath, filename);
        const data = stringify(entities);
        fs.writeFileSync(fullPath, data);
        return filename;
    }
}
