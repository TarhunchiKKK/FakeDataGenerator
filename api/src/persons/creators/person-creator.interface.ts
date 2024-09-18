export interface IPersonCreator {
    setSeed(seed: number): void;

    createPerson(): string;
}
