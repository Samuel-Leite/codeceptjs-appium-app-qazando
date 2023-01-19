const server = require("./server/server")

exports.config = {
  output: './output',

  // automatizar app
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/slle/OneDrive - GFT Technologies SE/Desktop/Samuel Leite/AutomationProject/Mobile/qazando/app-release.apk',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'pixel',
        plataformVersion: '9'
      }
    }
  },

  // automatizar navegador
  helpers: {
    Appium: {
      platform: 'Android',
      desiredCapabilities: {
        deviceName: 'pixel2',
        plataformVersion: '9',
        automationName: 'UiAutomator2',
        browserName: 'Chrome'
      }
    }
  },

  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: async () => {
    await server.start();
  },
  timeout: null,
  bootstrap: async () => {
    await server.stop();
  },
  hooks: [],
  // rodar testes utilizando BDD
  // gherkin: {
  //  features: './features/*.feature',
  //  steps: ['./step_definitions/steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'qazando-automation-mobile',
  // rodar testes das pasta steps
  tests: './steps/search_google_test.js'
}