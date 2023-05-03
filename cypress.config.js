const { defineConfig } = require('cypress');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {

  'baseUrl' : 'https://opensource-demo.orangehrmlive.com',
    "viewportWIdth":1800,
    "viewportHight":1300,
    'defaultCommandTimeout':2000, //4000,4sec by default time
    'pageLoadTimeout':12000, //60000, 60sec ======//===
    "requestTimeout":10000,
    "videoCompression":25, // if we don't want video to downlod use this cmd "video": false

    "env":{
      "clienturl": "https://rahulshettyacademy.com/seleniumPractise/#/",
      "username": "Admin",
      "password": "admin123",
      "email": "sachinchetty@gmail.com"
    },
    
    "retries": {"runMode": 0, "openMode": 1},
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
    },
  },
});
