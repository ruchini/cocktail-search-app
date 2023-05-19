module.exports = {
    // ...
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.mjs$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '\\.pnp\\.[^\\/]+$',
    ],
    moduleFileExtensions: ['js', 'mjs', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '^axios$': require.resolve('axios'),
    }
  };
  
