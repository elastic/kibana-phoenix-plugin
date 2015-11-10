var module = require('ui/modules').get('apps/phoenix', []);

module.controller('ViewCtrl', function ($scope, $location, $anchorScroll) {
  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  };

  $scope.categories= [
    {title: 'Getting Started', link: 'start'},
    {title: 'Creating a Chart', link: 'create'},
    {title: 'Bar Charts', link: 'bars'},
    {title: 'Area Charts', link: 'areas'},
    {title: 'Line Charts', link: 'lines'},
    {title: 'Scatterplot', link: 'scatter'},
    {title: 'Pie Charts', link: 'pie'},
    {title: 'Combo Charts', link: 'combo'}
  ];

  $scope.charts = [
    {
      id: 'bars',
      header: 'Bar Charts',
      description: 'A bar chart is a chart that uses either horizontal or ' +
      'vertical bars to show comparisons among categories or for time series.',
      graphs: [
        {type: 'bar', title: 'Time Series Chart'},
        {type: 'horizontalBar', title: 'Horizontal Time Series Chart'},
        {type: 'stackedBar', stack: 2, title: 'Stacked Bar Chart'},
        {type: 'percentageBar', stack: 2, title: 'Percentage Bar Chart'},
        {type: 'groupBar', stack: 2, title: 'Grouped Bar Chart'},
        {type: 'categoricalBar', time: 'false', title: 'Categorical Bar Chart'},
        {type: 'column', time: 'false', title: 'Column Chart'},
        {type: 'stackedCategoricalBar', stack: 2, time: 'false', title: 'Stacked Categorical Bar Chart'},
        {type: 'groupCategoricalBar', stack: 2, time: 'false', title: 'Grouped Categorical Bar Chart'}
      ]
    },
    {
      id: 'areas',
      header: 'Area Charts',
      description: 'Area charts are used to represent cumulated totals using numbers or' +
      ' percentages (stacked area charts in this case) over time.',
      graphs: [
        {type: 'area', title: 'Time Series Chart'},
        {type: 'area', stack: 3, title: 'Stacked Time Series Chart'},
        {type: 'overlap', stack: 3, title: 'Overlapping Area Chart'},
        {type: 'percentageArea', stack: 3, title: 'Percentage Area Chart'},
        {type: 'stream', stack: 3, title: 'Stream Graph'}
      ]
    },
    {
      id: 'lines',
      header: 'Line Charts',
      description: '',
      graphs: [
        {type: 'line', title: 'Single Line Chart'},
        {type: 'line', stack: 3, title: 'Multiple Line Chart'}
      ]
    },
    {
      id: 'scatter',
      header: 'Scatterplot',
      description: '',
      graphs: [
        {type: 'scatter', title: 'Scatter Plot'}
      ]
    },
    //{
    //  header: 'Combo Charts',
    //  description: '',
    //  graphs: [
    //    {type: 'barLine', title: 'Combo Bar Line Chart'}
    //  ]
    //}
  ];
});
