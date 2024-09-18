import { IPersonCreator } from "./person-creator.interface";
import { fakerRU } from "@faker-js/faker";

export class RussianPersonCreator implements IPersonCreator {
    public setSeed(seed: number) {
        fakerRU.seed(seed);
    }

    public createPerson(): string {
        return fakerRU.phone.number({ style: "international" });
    }
}
