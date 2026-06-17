enum Environment {
    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}

function runTests(env: Environment): void {
    switch (env) {
        case Environment.LOCAL:
            console.log("Running tests in LOCAL environment")
            break

        case Environment.DEVELOPMENT:
            console.log("Running tests in DEVELOPMENT environment")
            break

        case Environment.STAGING:
            console.log("Running tests in STAGING environment")
            break

        case Environment.PRODUCTION:
            console.log("Running tests in PRODUCTION environment")
            break

        default:
            console.log("Invalid environment")
            break
    }
}

runTests(Environment.LOCAL)
runTests(Environment.DEVELOPMENT)
runTests(Environment.STAGING)
runTests(Environment.PRODUCTION)