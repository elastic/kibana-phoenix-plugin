var _ = require('lodash');
var defaultOptions = {
  size: 50,
  startTime: (new Date()).getTime(), // in ms format
  label: 'Label 1',
  interval: 1000 * 30 // 30 seconds
};

function fakeData(pref) {
  var settings = _.assign({}, defaultOptions, pref);

  var data = [];
  var count = 0;

  while(count < settings.size) {
    data.push({
      x: settings.startTime + count * settings.interval,
      y: Math.floor(Math.random() * 100)
    });
    ++count;
  }

  return data;
}

module.exports = fakeData;
