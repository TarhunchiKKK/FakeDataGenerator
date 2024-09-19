const availableChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

export function validateNumericString(
    value: string,
    options: { minValue: number; maxValue: number },
) {
    // const numericValue = value.replace(validationRegexp, "");
    const numericValue = value
        .split("")
        .filter((char) => availableChars.includes(char))
        .join("");

    let validatedValue = +numericValue;
    if (options.maxValue) {
        validatedValue = Math.min(validatedValue, options.maxValue);
    }
    if (options.minValue) {
        validatedValue = Math.max(validatedValue, options.minValue);
    }
    return validatedValue.toString();
}
