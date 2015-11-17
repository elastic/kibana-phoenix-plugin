var colors = {
  0: 'green',
  1: 'blue',
  2: 'purple'
};

var lineOptions = {
  type: 'series',
  layout: 'grid',
  xAxis: {
    position: 'bottom',
    type: 'datetime'
  },
  yAxis: {
    position: 'left',
    type: 'linear'
  },
  line: {
    show: true,
    interpolate: 'linear',
    tension: 0.7,
    stroke: function (d) { return colors[d.label]; },
    strokeWidth: 3,
    opacity: 1
  },
  points: {
    show: true,
    radius: 5,
    fill: function (d) { return colors[d.label]; },
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1
  }
};

module.exports = lineOptions;
