import { personsApi } from "../../api";
import { PersonsTable, PersonTableRow } from "../../components";
import { RangeInput } from "../../components/Inputs";
import { maxErrorsCount, minErrorsCount } from "../../constants";
import { IPerson } from "../../interfaces";
import { useControls } from "./hooks";

const seed = 15;

export function HomePage() {
    const { errorsCount, handleErrorsCountChange } = useControls();

    const { persons } = personsApi.useGetPersons({
        seed,
        errorsCount,
    });

    const renderPerson = (person: IPerson, index: number) => (
        <PersonTableRow key={person.id} person={person} sequenceNumber={index + 1} />
    );

    return (
        <main className="py-4 px-4 md:px-0">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-row justify-between items-center mb-10">
                    <RangeInput
                        value={errorsCount}
                        onChange={handleErrorsCountChange}
                        minValue={minErrorsCount}
                        maxValue={maxErrorsCount}
                    />
                </div>

                {persons.length && <PersonsTable persons={persons} renderPerson={renderPerson} />}
            </div>
        </main>
    );
}
