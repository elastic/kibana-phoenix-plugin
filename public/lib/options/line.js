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
    stroke: '#000000',
    strokeWidth: 3,
    opacity: 1
  },
  points: {
    show: true,
    radius: 5,
    fill: '#000000',
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1
  }
};

module.exports = lineOptions;
