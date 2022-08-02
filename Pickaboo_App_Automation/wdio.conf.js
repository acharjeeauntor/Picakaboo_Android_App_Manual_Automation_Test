import path from "path"

exports.config = {
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 0,
    
    capabilities: [{
        platformName:"Android",
        "appium:platformVersion": "6.0.1",
        "appium:deviceName":"546b6902",
        "appium:automationName":"UIAutomator2",
        "appium:app":path.join(process.cwd(),"./app/Pickaboo.apk"),
        "appium:autoGrantPermissions":true
    }],
   
    logLevel: 'info',
   
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
