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
            2,
            {
                groups: ['external', 'builtin', 'index', 'sibling', 'parent', 'internal', 'type'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        indent: ['error', 4],
        semi: 'off',
        'react/jsx-max-props-per-line': [1, { maximum: 1 }],
    },
};
