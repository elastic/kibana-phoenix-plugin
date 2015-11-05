var areaOptions = {
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
  area: {
    show: true,
    interpolate: 'linear',
    tension: 0.7,
    fill: 'blue',
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1
  }
};

module.exports = areaOptions;
