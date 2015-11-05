var module = require('ui/modules').get('apps/phoenix', []);

module.directive('chart', function () {
  function link (scope, element, attrs) {
    var Phx = require('phx/build/phx');
    var options = {
      bar: require('plugins/phoenix/lib/options/bar.js'),
      horizontalBar: require('plugins/phoenix/lib/options/horizontalBar.js'),
      categoricalBar: require('plugins/phoenix/lib/options/categoricalBar.js'),
      area: require('plugins/phoenix/lib/options/area.js'),
      line: require('plugins/phoenix/lib/options/line.js')
    };
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

    scope.$watch('data', function (newVal, oldVal) {
      chart.data(newVal);
      scope.render();
    });
  }

  return {
    restrict: 'E',
    scope: {
      data: '=',
      options: '='
    },
    template: '<div style="height:100%; position:relative"></div>',
    replace: 'true',
    link: link
  };
});
