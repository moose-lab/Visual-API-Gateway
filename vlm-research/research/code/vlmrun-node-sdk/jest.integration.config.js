module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/integration/**/*.test.ts'],
  testPathIgnorePatterns: [
    'audio-predictions.test.ts',
    'video-predictions.test.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      useESM: true,
    }]
  },
  extensionsToTreatAsEsm: [".ts"],
};
