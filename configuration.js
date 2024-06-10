const { browser } = require("protractor");


exports.config = {
  directConnect: true,

  //   seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./url/URL.json'],


    capabilities: {
        'browserName': 'chrome'
    },
    

    jasmineNodeOpts: {
      defaultTimeoutInterval: 60000
    }

  //  onPrepare: function() {

   //    browser.manage().window().maximize();
    //   browser.manage().timeouts().implicitlyWait(5000);
  
      

};


