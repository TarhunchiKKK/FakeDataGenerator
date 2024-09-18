import { IPersonTableRowProps } from "./props";

export function PersonTableRow({ person, sequenceNumber }: IPersonTableRowProps) {
    return (
        <tr className="table-row h-12 px-2 py-4 rounded-lg overflow-hidden hover:bg-slate-300 duration-300">
            <td className="table-cell">{sequenceNumber}</td>
            <td className="table-cell">{person.id}</td>
            <td className="table-cell">{person.name}</td>
            <td className="table-cell">{person.phone}</td>
            <td className="table-cell">{person.address}</td>
        </tr>
    );
}
