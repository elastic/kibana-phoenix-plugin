var module = require('ui/modules').get('apps/phoenix', []);

module.controller('ChartCtrl', function ($scope) {
  var faker = require('plugins/phoenix/lib/fakeData.js');
  var data = { data: faker({size: 10, type: 'pie'}) };

  $scope.ui = {
    data: data
  };
});
