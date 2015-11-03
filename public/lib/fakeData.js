var _ = require('lodash');
var defaultOptions = {
  size: 50,
  type: 'series',
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

function fakeData(pref) {
  var settings = _.assign({}, defaultOptions, pref);

  var data = [];
  var count = 0;

  while(count < settings.size) {
    if (settings.type === 'series') {
      data.push({
        x: settings.startTime + count * settings.interval,
        y: Math.floor(Math.random() * 100)
      });
    } else {
      data.push({
        x: makeString(),
        y: Math.floor(Math.random() * 100)
      });
    }
    ++count;
  }

  return data;
}

module.exports = fakeData;
