import { generate } from "randomstring";
import { FilenameLength } from "../constants/filenameLength";

export function generateFilename() {
    return generate({ charset: "alphanumeric", length: FilenameLength });
}
