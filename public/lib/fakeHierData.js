var d3 = require('d3');

var state = ['California', 'Alaska', 'Georgia', 'Arizona', 'Alabama'];
var city = {
  California: ['LA', 'SF', 'Sacramento'],
  Alaska: ['Fairbanks', 'Anchorage', 'Nome'],
  Georgia: ['Atlanta', 'Athens', 'Macon'],
  Arizona: ['Phoenix', 'Tucson', 'Flagstaff'],
  Alabama: ['Huntsville', 'Birmingham', 'Montgomery']
};
var winner = {
  LA: 'D',
  SF: 'D',
  Sacramento: 'D',
  Fairbanks: 'R',
  Anchorage: 'R',
  Atlanta: 'D',
  Athens: 'R',
  Macon: 'D',
  Nome: 'R',
  Phoenix: 'D',
  Tucson: 'R',
  Flagstaff: 'R',
  Huntsville: 'R',
  Birmingham: 'R',
  Montgomery: 'R'
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fakeHierData(num) {
  num = num || 50;

  var data = Array.apply(null, new Array(num))
  .map(function () {
    var usState = state[getRandomInt(0, 4)];
    var usCity = city[usState][getRandomInt(0, 2)];
    var affiliation = winner[usCity];

    return {
      state: usState,
      city: usCity,
      winner: affiliation,
      size: +(Math.random() * 100).toFixed(0)
    };
  })
  .filter(function (item, index, array) {
    return array.map(function (d) {
        return d.city
      }).indexOf(item.city) === index;
  });

  return {
    values: d3.nest()
    .key(function (d) { return d.state; })
    .key(function (d) { return d.city; })
    .entries(data)
  };
}

module.exports = fakeHierData;
