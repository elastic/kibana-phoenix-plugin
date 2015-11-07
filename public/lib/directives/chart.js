var module = require('ui/modules').get('apps/phoenix', []);

module.directive('chart', function () {
  function link (scope, element) {
    var Phx = require('phx/build/phx');
    var chart = new Phx(element[0])
      .options(scope.options)
      .data(scope.data);

    scope.render = function () {
      chart.draw();
    };

    scope.render();
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
