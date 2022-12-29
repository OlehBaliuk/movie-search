module.exports = {
    extends: ['react-app', 'react-app/jest'],
    plugins: ['prettier'],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'prettier/prettier': 2,
        'import/order': [
            1,
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: 'off',
    },
};
