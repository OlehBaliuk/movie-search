export const getCapitalize = (str: string) => {
    if (typeof str !== 'string') return '';

    return str.replace(/^./, firstCharacter => firstCharacter.toUpperCase()).replace(/-/g, ' ');
};
