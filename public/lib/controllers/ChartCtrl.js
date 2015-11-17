var module = require('ui/modules').get('apps/phoenix', []);
var JSONfn = require('json-fn/jsonfn');

module.controller('ChartCtrl', function ($scope) {
  var faker = require('plugins/phoenix/lib/fakeData.js');
  var fakeHier = require('plugins/phoenix/lib/fakeHierData.js');
  var options = require('plugins/phoenix/lib/options/index');
  var attrs = $scope.graph;
  var dataOpts = {
    size: attrs.size || 10,
    time: attrs.time !== 'false',
    stackCount: attrs.stack || 1,
    isHierData: Boolean(attrs.isHierData) || false
  };
  var data = dataOpts.isHierData ? { data: fakeHier() } : { data: faker(dataOpts) };

  function getOptions(type) {
    return options[type];
  }

  function replacer(key, value) {
    if (value instanceof Function || typeof value === 'function') {
      return value.toString().replace(/[\t\n]/g, '');
    }
    return value;
  }

  function stringify(obj) {
    return JSON.stringify(obj, replacer, 2);
  }

  $scope.ui = {
    data: data,
    options: getOptions(attrs.type)
  };

  $scope.json = {
    data: stringify(data),
    options: stringify(getOptions(attrs.type))
  };
});
