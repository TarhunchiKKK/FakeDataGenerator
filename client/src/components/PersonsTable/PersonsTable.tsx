import { IPersonsTableProps } from "./props";

export function PersonsTable({ persons, renderPerson }: IPersonsTableProps) {
    return (
        <table className="w-max min-w-[1024px]">
            <thead>
                <tr>
                    <th className="text-left">Number</th>
                    <th className="text-left">Id</th>
                    <th className="text-left">Name</th>
                    <th className="text-left">Phone</th>
                    <th className="text-left">Address at</th>
                </tr>
            </thead>

            <tbody>{persons.map(renderPerson)}</tbody>
        </table>
    );
}
