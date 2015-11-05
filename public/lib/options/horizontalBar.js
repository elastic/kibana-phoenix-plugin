var barOptions = {
  type: 'series',
  layout: 'grid',
  timeInterval: '30s',
  xAxis: {
    position: 'bottom',
    type: 'linear'
  },
  yAxis: {
    position: 'left',
    type: 'datetime'
  },
  bar: {
    show: true,
    timePadding: 0.1,
    orientation: 'horizontal',
    fill: 'blue',
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1
  }
};

module.exports = barOptions;
