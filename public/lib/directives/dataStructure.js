var module = require('ui/modules').get('apps/phoenix', []);

module.directive('dataStructure', function () {
  return {
    restrict: 'E',
    scope: {
      options: '@'
    },
    template: '<h4>Data Structure</h4><pre class="prettyprint lang-js">{{ data.options | getData }}</pre>',
    replace: 'true',
    controller: function ($scope) {
      $scope.data = {
        options: {size: 10}
      }
    }
  };
});
