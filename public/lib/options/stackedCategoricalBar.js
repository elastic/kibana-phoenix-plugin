var colors = {
  0: "green",
  1: "blue"
};

var barOptions = {
  type: 'series',
  layout: 'grid',
  stack: {
    out: function (d, y0, y) {
      d.y0 = y0;
      d.y = y;
    }
  },
  xAxis: {
    position: 'bottom',
    type: 'linear',
    accessor: function (d) { return d.y0 + d.y; }
  },
  yAxis: {
    position: 'left',
    categories: function (d) { return d.x; },
    sort: function (a, b) { return a.y < b.y; }
  },
  bar: {
    show: true,
    orientation: 'horizontal',
    fill: function (d) { return colors[d.label]; },
    stroke: 'none',
    strokeWidth: 0,
    opacity: 1
  }
};

module.exports = barOptions;
