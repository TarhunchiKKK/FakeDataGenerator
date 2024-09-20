import { useState } from "react";
import { personsApi } from "../../../api";
import { personsQueryDebounceDelay } from "../../../constants";
import { useDebounce } from "../../../helpers";
import { LocalesCodes } from "../../../types";
import { defaultLocalization } from "../constants";

export function useLocaleControl() {
    const localesPairs = personsApi.useGetLocalizations();

    const [locale, setLocale] = useState<LocalesCodes>(defaultLocalization);

    const debouncedLocale = useDebounce(locale, personsQueryDebounceDelay);

    const handleLocaleChange = (newLocale: string) => {
        setLocale(newLocale as LocalesCodes);
    };

    return {
        locale,
        debouncedLocale,
        handleLocaleChange,
        localesPairs: localesPairs.map(({ title, code }) => ({ title, value: code })),
    };
}
