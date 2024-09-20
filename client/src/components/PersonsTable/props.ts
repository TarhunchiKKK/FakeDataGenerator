import { IPerson } from "../../types";

export interface IPersonsTableProps {
    persons: IPerson[];

    renderPerson: (person: IPerson, index: number) => JSX.Element;
}
