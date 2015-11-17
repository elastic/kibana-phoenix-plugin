var barOptions = {
  type: 'series',
  layout: 'grid',
  timeInterval: '30s',
  xAxis: {
    position: 'bottom',
    type: 'datetime'
  },
  yAxis: {
    position: 'left',
    type: 'linear',
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
};

module.exports = barOptions;