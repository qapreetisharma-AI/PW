"use strict";
var Environment;
(function (Environment) {
    Environment[Environment["LOCAL"] = 0] = "LOCAL";
    Environment[Environment["DEVELOPMENT"] = 1] = "DEVELOPMENT";
    Environment[Environment["STAGING"] = 2] = "STAGING";
    Environment[Environment["PRODUCTION"] = 3] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(env) {
    switch (env) {
        case Environment.LOCAL:
            console.log("Running tests in LOCAL environment");
            break;
        case Environment.DEVELOPMENT:
            console.log("Running tests in DEVELOPMENT environment");
            break;
        case Environment.STAGING:
            console.log("Running tests in STAGING environment");
            break;
        case Environment.PRODUCTION:
            console.log("Running tests in PRODUCTION environment");
            break;
        default:
            console.log("Invalid environment");
            break;
    }
}
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);
