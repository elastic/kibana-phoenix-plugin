var module = require('ui/modules').get('apps/phoenix', []);

module.directive('chart', function () {
  function link (scope, element, attrs) {
    var Phx = require('phx/build/phx');
    var options = require('plugins/phoenix/lib/options/index');
    var chart = new Phx(element[0])
      .options(getOptions(attrs.type || 'bar'))
      .data(scope.data);

    function getOptions(type) {
      return options[type];
    }

    scope.render = function () {
      chart.draw();
    };

    scope.render();

    //scope.$watch('data', function (newVal, oldVal) {
    //  chart.data(newVal);
    //  scope.render();
    //});
  }

  return {
    restrict: 'E',
    scope: {
      data: '=',
      options: '='
    },
    template: '<div style="height:100%; position:relative;"></div>',
    replace: 'true',
    link: link
  };
});
