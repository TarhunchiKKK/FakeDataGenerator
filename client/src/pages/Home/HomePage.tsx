import InfiniteScroll from "react-infinite-scroll-component";
import { personsApi } from "../../api";
import { maxErrorsCount, maxSeed, minErrorsCount, minSeed } from "../../constants";
import { generateSeed } from "../../helpers";
import { scrollThreshold } from "./constants";
import { renderPerson } from "./helpers";
import { useErrorsCountControl, useLocaleControl, useSeedControl } from "./hooks";
import {
    RangeInput,
    RandomizedInput,
    Dropdown,
    Loader,
    PersonsTable,
    Button,
} from "../../components";

export function HomePage() {
    const { isCSVLoading, createCSV } = personsApi.useCreateCSV();

    const { seed, debouncedSeed, handleSeedChange } = useSeedControl();
    const { errorsCount, debouncedErrorsCount, handleErrorsCountChange } = useErrorsCountControl();
    const { locale, debouncedLocale, handleLocaleChange, localesPairs } = useLocaleControl();

    const { persons, onScroll } = personsApi.useGetPersons(
        debouncedSeed,
        debouncedErrorsCount,
        debouncedLocale,
    );

    const handleCreateCSV = async () => {
        createCSV(persons);
    };

    return (
        <main className="py-4 px-2 lg:px-0">
            <div className="container mx-auto">
                <div className="w-full flex flex-row justify-between items-center gap-6 mb-10 pb-4 overflow-x-scroll">
                    <Dropdown
                        label="Region:"
                        value={locale}
                        onChange={handleLocaleChange}
                        options={localesPairs}
                    />

                    <RangeInput
                        label="Errors:"
                        value={errorsCount}
                        onChange={handleErrorsCountChange}
                        minValue={minErrorsCount}
                        maxValue={maxErrorsCount}
                    />

                    <RandomizedInput
                        label="Seed:"
                        value={seed.toString()}
                        onChange={handleSeedChange}
                        minValue={minSeed}
                        maxValue={maxSeed}
                        ganerateValue={generateSeed}
                    />

                    <Button content="Save" onClick={handleCreateCSV} isLoading={isCSVLoading} />
                </div>

                {persons.length && (
                    <InfiniteScroll
                        dataLength={persons.length}
                        next={onScroll}
                        hasMore={true}
                        loader={
                            <div className="w-min mx-auto my-4">
                                <Loader />
                            </div>
                        }
                        scrollThreshold={scrollThreshold}
                    >
                        <PersonsTable persons={persons} renderPerson={renderPerson} />
                    </InfiniteScroll>
                )}
            </div>
        </main>
    );
}
