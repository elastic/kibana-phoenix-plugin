var module = require('ui/modules').get('apps/phoenix', []);

function stringify(json) {
  return JSON.stringify(json, null, 2);
}

module.filter('getData', function () {
  var faker = require('plugins/phoenix/lib/fakeData.js');

  return function (input) {
    var data = { data: faker(input || {size: 5}) };
    return stringify(data);
  };
});
