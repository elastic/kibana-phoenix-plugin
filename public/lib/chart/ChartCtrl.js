var module = require('ui/modules').get('apps/phoenix', []);

module.controller('ChartCtrl', function ($scope) {
  var faker = require('plugins/phoenix/lib/fakeData.js');
  var options = require('plugins/phoenix/lib/options.json');

  $scope.ui = {
    data: faker(),
    options: JSON.stringify(options, null, 2),
  };
});
