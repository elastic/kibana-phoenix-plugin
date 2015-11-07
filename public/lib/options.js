var _ = require('lodash');
var options = {};

function assignOptions(pref) {
  var defaultOptions = {
    type: 'series',
    layout: 'grid',
    xAxis: {
      position: 'bottom',
      type: 'datetime'
    },
    yAxis: {
      position: 'left',
      type: 'linear'
    }
  };

  return _.assign({}, defaultOptions, pref);
}

function getColor(name) {
  var colors = { 0: 'green', 1: 'blue', 2: 'purple' };
  return colors[name];
}

options.bar = assignOptions({
  timeInterval: '30s',
  yAxis: {
    y: function (d) { return d.y0 + d.y; }
  },
  bar: {
    show: true,
    timePadding: 0.2,
    orientation: 'vertical',
    fill: 'blue',
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1
  }
});

options.categoricalBar = assignOptions({
  xAxis: {
    position: 'bottom',
    type: 'linear'
  },
  yAxis: {
    position: 'left',
    categories: function (d) { return d.x; },
    sort: function (a, b) { return a.y < b.y; }
  },
  bar: {
    show: true,
    orientation: 'horizontal',
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1
  }
});

options.area = assignOptions({
  yAxis: {
    accessor: function (d) { return d.y0 + d.y; }
  },
  area: {
    show: true,
    interpolate: 'basis',
    tension: 0.7,
    fill: function (d) {
      return colors[d.label];
    },
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1
  }
});

module.exports = options;
