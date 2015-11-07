var module = require('ui/modules').get('apps/phoenix', []);

module.controller('ChartCtrl', function ($scope) {
  var faker = require('plugins/phoenix/lib/fakeData.js');
  var options = require('plugins/phoenix/lib/options/index');
  var titles = require('plugins/phoenix/lib/titles');
  var size = $scope.graph.size || 10;
  var time = $scope.graph.time !== 'false';
  var type = $scope.graph.type || 'bar';
  var stackCount = +$scope.graph.stack || 1;
  var dataOpts = {
    size: size,
    time: time,
    stackCount: stackCount
  };
  var data = { data: faker(dataOpts) };

  function getTitle(type) {
    return titles[type];
  }

  function getOptions(type) {
    return options[type];
  }

  $scope.section = {
    title: getTitle(type)
  };

  $scope.ui = {
    data: data,
    options: getOptions(type)
  };

  $scope.json = {
    data: JSON.stringify(data, null, 2),
    options: JSON.stringify(getOptions(type), null, 2)
  };
});
