exports.config = {
  directConnect: true,
  allScriptsTimeout: 10000,
  capabilities: {
    browserName: 'chrome',
     chromeOptions: {
      args: [ "--headless", "--disable-gpu" ]
      }
   },
  plugins: [{
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      reportName: 'EJP Regression Report',
      pageFooter: '<div><p>Created by Employee JOurney Portal</p></div>'
    }
  }],
  framework: 'custom',  // set to "custom" instead of cucumber.
  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  //specs: ['features/*.feature'],
  specs: ['bb.feature'],
  cucumberOpts: {
    require: ['bb_definitions.js'],
    //require: ['stepDefinitions/*.js'],
    //tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    //strict: true,                  // <boolean> fail if there are any undefined or pending steps
    //format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    //format: 'json:report.json',
    format: 'json:.tmp/results.json',
    //'dry-run': false,              // <boolean> invoke formatters without executing steps
    //compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  },
  onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  },
  SELENIUM_PROMISE_MANAGER: false,

};