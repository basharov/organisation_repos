module.exports = {
    "verbose": true,
    "clearMocks": true,
    "resetMocks": true,
    // "setupFiles": [
    //     "<rootDir>/src/__mocks__/init.ts"
    // ],
    // "collectCoverage": true,
    // "coverageDirectory": "<rootDir>/coverage",
    "transform": {
        "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|less)$": 'identity-obj-proxy'
    }
};
