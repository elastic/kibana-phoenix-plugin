var colors = {
  0: "blue",
  1: "orange"
};

var barOptions = {
  type: 'series',
  layout: 'grid',
  timeInterval: '30s',
  stack: {
    offset: 'expand'
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
  bar: {
    show: true,
    timePadding: 0.2,
    orientation: 'vertical',
    fill: function (d) { return colors[d.label]; },
    stroke: 'none',
    strokeWidth: 0,
    fillOpacity: 1
  }
};

module.exports = barOptions;