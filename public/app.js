require('ui/chrome')
.setTabs([{
  id: '',
  title: 'Phoenix'
}])
.setRootTemplate(require('plugins/phoenix/index.html'));

require('plugins/phoenix/lib/directives/dataStructure.js');
require('plugins/phoenix/lib/filters/getOptions.js');
require('plugins/phoenix/lib/filters/getData.js');
require('plugins/phoenix/lib/chart/ChartCtrl.js');
require('plugins/phoenix/lib/chart/chart.js');
require('plugins/phoenix/main.less');
