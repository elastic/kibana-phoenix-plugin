var colors = {
  0: 'green',
  1: 'blue',
  2: 'purple'
};

var areaOptions = {
  type: 'series',
  layout: 'grid',
  stack: {
    offset: 'overlap',
  },
  xAxis: {
    position: 'bottom',
    type: 'datetime'
  },
  yAxis: {
    position: 'left',
    type: 'linear',
  },
  area: {
    show: true,
    interpolate: 'basis',
    tension: 0.7,
    fill: function (d) { return colors[d.label]; },
    stroke: 'none',
    strokeWidth: 0,
    opacity: 0.6
  }
};

module.exports = areaOptions;
