import { personsApi } from "../../api";
import { PersonsTable, PersonTableRow } from "../../components";
import { IPerson } from "../../interfaces";

export function HomePage() {
    const { persons } = personsApi.useGetPersons();

    const renderPerson = (person: IPerson, index: number) => (
        <PersonTableRow key={person.id} person={person} sequenceNumber={index + 1} />
    );

    return (
        <main className="py-4 px-4 md:px-0">
            <div className="container mx-auto flex flex-row justify-center">
                {persons.length && <PersonsTable persons={persons} renderPerson={renderPerson} />}
            </div>
        </main>
    );
}
