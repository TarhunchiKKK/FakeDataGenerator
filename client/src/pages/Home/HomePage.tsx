import { personsApi } from "../../api";

export function HomePage() {
    const { persons } = personsApi.useGetPersons();
    return <>{persons.length}</>;
}
