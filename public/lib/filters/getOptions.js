var module = require('ui/modules').get('apps/phoenix', []);

function stringify(json) {
  return JSON.stringify(json, null, 2);
}

module.filter('getOptions', function () {
  var options = {
    bar: require('plugins/phoenix/lib/options/bar.js'),
    horizontalBar: require('plugins/phoenix/lib/options/horizontalBar.js'),
    area: require('plugins/phoenix/lib/options/area.js'),
    line: require('plugins/phoenix/lib/options/line.js')
  };

  return function (input) {
    return stringify(options[input] || 'bar')
  };
});
