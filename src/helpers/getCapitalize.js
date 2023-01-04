export const getCapitalize = str => {
    if (typeof str !== 'string') return '';

    return str.replace(/^./, firstCharacter => firstCharacter.toUpperCase()).replace(/-/g, ' ');
};
