var module = require('ui/modules').get('apps/phoenix', []);

module.controller('ChartCtrl', function ($scope) {
  var faker = require('plugins/phoenix/lib/fakeData.js');
  var options = require('plugins/phoenix/lib/options/index');
  var attrs = $scope.graph;
  var dataOpts = {
    size: attrs.size || 10,
    time: attrs.time !== 'false',
    stackCount: attrs.stack || 1
  };
  var data = { data: faker(dataOpts) };

  function getOptions(type) {
    return options[type];
  }

  function stringify(obj) {
    return JSON.stringify(obj, null, 2);
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
