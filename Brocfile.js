/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees  = require('broccoli-merge-trees');
var pickFiles   = require('broccoli-static-compiler');
var extraAssets = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
  srcDir: '/',
  files: ['**/*'],
  destDir: '/fonts/bootstrap'
});


var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');
app.import('bower_components/JavaScript-MD5/js/md5.js');
app.import('bower_components/selectize/dist/js/standalone/selectize.js');
app.import('bower_components/selectize/dist/css/selectize.bootstrap3.css');

// https://github.com/abuiles/rails-csrf:
app.import('bower_components/rails-csrf/dist/named-amd/main.js', {
  exports: {
    'rails-csrf': [
      'setCsrfUrl'
    ]
  }
});

module.exports = mergeTrees([app.toTree(), extraAssets]);
