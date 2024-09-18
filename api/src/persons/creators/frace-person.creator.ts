import { IPersonCreator } from "./person-creator.interface";
import { fakerFR } from "@faker-js/faker";

export class BelarusianPersonCreator implements IPersonCreator {
    public setSeed(seed: number) {
        fakerFR.seed(seed);
    }

    public createPerson(): string {
        return fakerFR.phone.number({ style: "international" });
    }
}
