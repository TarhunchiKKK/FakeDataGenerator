import { PersonTableRow } from "../../../components";
import { IPerson } from "../../../types";

export const renderPerson = (person: IPerson, index: number) => (
    <PersonTableRow key={person.id} person={person} sequenceNumber={index + 1} />
);
