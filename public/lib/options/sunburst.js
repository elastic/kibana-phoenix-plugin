var d3 = require('d3');
var color = d3.scale.category20();

var sunburstOptions = {
  type: 'multi-pie',
  layout: 'grid',
  margin: {top: 20, right: 20, bottom: 20, left: 20},
  children: 'values',
  donut: false,
  fill: function (d) {
    if (d.depth === 0) return 'none';
    return d.key ? color(d.key) : color(d.winner);
  }
};

module.exports = sunburstOptions;
