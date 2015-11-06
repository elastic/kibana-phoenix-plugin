var barOptions = {
  type: 'series',
  layout: 'grid',
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
};

module.exports = barOptions;
