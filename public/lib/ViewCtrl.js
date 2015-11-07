var module = require('ui/modules').get('apps/phoenix', []);

module.controller('ViewCtrl', function ($scope) {
  $scope.charts = [
    {
      header: 'Line Charts',
      description: '',
      graphs: [
        {type: 'line'}
      ]
    },
  ];
});
