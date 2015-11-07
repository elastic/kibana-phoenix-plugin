var colors = {
  0: 'green',
  1: 'blue',
  2: 'purple'
};

var areaOptions = {
  type: 'series',
  layout: 'grid',
  stack: {
    offset: 'wiggle',
    order: 'inside-out'
  },
  xAxis: {
    position: 'bottom',
    type: 'datetime'
  },
  yAxis: {
    position: 'left',
    type: 'linear',
    accessor: function (d) { return d.y0 + d.y; }
  },
  area: {
    show: true,
    interpolate: 'basis',
    tension: 0.7,
    fill: function (d) { return colors[d.label]; },
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1
  }
};

module.exports = areaOptions;
