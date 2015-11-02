var module = require('ui/modules').get('apps/phoenix', []);

module.directive('chart', function () {
  function link (scope, element, attrs) {
    var Phx = require('phx/build/phx');
    var chart = new Phx(element[0])
      .options(JSON.parse(scope.options))
      .data([
        {data: [scope.data]}
      ]);

    scope.render = function () {
      chart.draw(400, 400);
    };

    scope.render();

    scope.$watch('options', function (newVal, oldVal) {
      chart.options(JSON.parse(newVal));
      scope.render();
    }, true);
  }

  return {
    restrict: 'E',
    scope: {
      data: '=',
      options: '='
    },
    template: '<div></div>',
    link: link
  };
});
