var module = require('ui/modules').get('apps/phoenix', []);

module.controller('ChartCtrl', function ($scope) {
  var faker = require('plugins/phoenix/lib/fakeData.js');
  var options = require('plugins/phoenix/lib/options.json');
  var data = { data: faker() };

  $scope.ui = {
    data: JSON.stringify(data, null, 2),
    options: JSON.stringify(options, null, 2)
  };
});
