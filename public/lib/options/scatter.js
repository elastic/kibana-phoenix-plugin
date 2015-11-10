var colors = {
  0: 'green',
  1: 'blue',
  2: 'purple'
};

var pointOptions = {
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
  points: {
    show: true,
    radius: 5,
    fill: function (d) { return colors[d.label]; },
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1
  }
};

module.exports = pointOptions;
