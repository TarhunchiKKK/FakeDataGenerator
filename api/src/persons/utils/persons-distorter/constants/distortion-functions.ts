import { faker } from "@faker-js/faker";
import { ErrorTypes } from "../enums/error-types.enum";

export const DistortionFunctions: Record<ErrorTypes, (source: string, index: number) => string> = {
    [ErrorTypes.AddSymbolError]: (source: string, index: number) => {
        const additionalCharacter = faker.string.sample(1);
        const firstPart = source.slice(0, index);
        const secondPart = source.slice(index);
        return firstPart + additionalCharacter + secondPart;
    },
    [ErrorTypes.RemoveSymbolError]: (source: string, index: number) => {
        const firstPart = source.slice(0, index);
        const secondPart = source.slice(index + 1);
        return firstPart + secondPart;
    },
    [ErrorTypes.SwapSymbolsError]: (source: string, index: number) => {
        const firstPart = source.slice(0, index);
        const secondPart = source.slice(index + 2);

        const firstCharacter = source[index];
        const secondCharacter = source[index + 1];

        return firstPart + secondCharacter + firstCharacter + secondPart;
    },
};
