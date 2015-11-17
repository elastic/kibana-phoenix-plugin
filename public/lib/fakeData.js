var _ = require('lodash');
var defaultOptions = {
  size: 50,
  stackCount: 1,
  time: true,
  startTime: (new Date()).getTime(), // in ms format
  label: 'Label 1',
  interval: 1000 * 30 // 30 seconds
};

function makeString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i=0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

function randomSign(num) {
  var randomNumber = Math.random();
  if (randomNumber < 0.5) return -num;
  return num;
}

function getPreviousValues(arr, index) {
  // Pull previous x value off of first array based on the index position
  return arr[0][index].x;
}

function merge(a, b) {
  return a.concat(b);
}

function fakeData(pref) {
  var settings = _.assign({}, defaultOptions, pref);

  var data = [];
  var stackCount = 0;

  while(stackCount < settings.stackCount) {
    var layer = [];
    var count = 0;

    while(count < settings.size) {
      if (settings.time) {
        layer.push({
          x: settings.startTime + count * settings.interval,
          y: Math.floor(Math.random() * 100),
          label: stackCount
        });
      } else {
        layer.push({
          x: stackCount > 0 ? getPreviousValues(data, count) : makeString(),
          y: Math.floor(Math.random() * 100),
          label: stackCount
        });
      }
      ++count;
    }

    data.push(layer);
    ++stackCount;
  }

  return data.length > 1 ? data : data.reduce(merge, []);
}

module.exports = fakeData;
