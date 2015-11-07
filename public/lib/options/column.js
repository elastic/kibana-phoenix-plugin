var barOptions = {
  type: 'series',
  layout: 'grid',
  xAxis: {
    position: 'bottom',
    categories: function (d) { return d.x; },
    sort: function (a, b) { return a.y < b.y; }
  },
  yAxis: {
    position: 'left',
    type: 'linear'
  },
  bar: {
    show: true,
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1
  }
};

module.exports = barOptions;
