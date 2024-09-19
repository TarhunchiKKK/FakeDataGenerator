import { personsApi } from "../../api";
import { PersonsTable, PersonTableRow } from "../../components";
import { RangeInput, RandomizedInput } from "../../components";
import { maxErrorsCount, maxSeed, minErrorsCount, minSeed } from "../../constants";
import { generateSeed } from "../../helpers";
import { IPerson } from "../../interfaces";
import { useControls } from "./hooks";

export function HomePage() {
    const { errorsCount, handleErrorsCountChange, seed, handleSeedChange } = useControls();

    const { persons } = personsApi.useGetPersons({
        seed,
        errorsCount,
    });

    const renderPerson = (person: IPerson, index: number) => (
        <PersonTableRow key={person.id} person={person} sequenceNumber={index + 1} />
    );

    return (
        <main className="py-4 px-4 md:px-0">
            <div className="container mx-auto">
                <div className="w-full flex flex-row justify-between items-center mb-10">
                    <RangeInput
                        label="Errors:"
                        value={errorsCount}
                        onChange={handleErrorsCountChange}
                        minValue={minErrorsCount}
                        maxValue={maxErrorsCount}
                    />

                    <RandomizedInput
                        label="Seed:"
                        value={seed}
                        onChange={handleSeedChange}
                        minValue={minSeed}
                        maxValue={maxSeed}
                        ganerateValue={generateSeed}
                    />
                </div>

                {persons.length && <PersonsTable persons={persons} renderPerson={renderPerson} />}
            </div>
        </main>
    );
}
