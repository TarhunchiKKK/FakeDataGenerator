const numericSymbolsRegexp = /\D/g;

export function validateNumericString(
    value: string,
    defaultValue: string,
    options: { minValue: number; maxValue: number },
) {
    value = value ?? defaultValue;
    const numericValue = value.replace(numericSymbolsRegexp, "");
    let validatedValue = +numericValue;
    if (options.maxValue) {
        validatedValue = Math.min(validatedValue, options.maxValue);
    }
    if (options.minValue) {
        validatedValue = Math.max(validatedValue, options.minValue);
    }
    return validatedValue.toString();
}
