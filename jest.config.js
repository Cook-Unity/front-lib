module.exports = {
  roots: ['./src'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTest.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/mocks/fileMock.js',
    '\\.(scss|css|less)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/assets/**/*',
    '!src/**/*.stories.js',
    '!src/**/skeleton.js',
    '!src/**/data.mock.js',
    '!src/test/**'
  ]
}
