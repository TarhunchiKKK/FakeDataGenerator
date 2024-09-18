import { IPerson } from "../../interfaces";

export interface IPersonsTableProps {
    persons: IPerson[];

    renderPerson: (person: IPerson, index: number) => JSX.Element;
}
