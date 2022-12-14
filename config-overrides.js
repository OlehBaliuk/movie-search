const { alias, configPaths, aliasJest } = require('react-app-rewire-alias');
const aliasMap = configPaths('./tsconfig.paths.json');

module.exports = function override(config, env) {
    alias(aliasMap)(config);
    aliasJest(aliasMap)(config);

    return config;
};
