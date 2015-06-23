module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/third-party/**/angular.js',
      'app/third-party/**/angular-route.js',
      'app/third-party/**/angular-resource.js',
      'app/third-party/**/angular-mocks.js',
      'app/components/**/ResourceProvider.js',
      'app/test/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
