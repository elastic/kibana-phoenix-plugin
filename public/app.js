require('ui/chrome')
.setTabs([{
  id: '',
  title: 'Phoenix'
}])
.setRootTemplate(require('plugins/phoenix/index.html'));

require('plugins/phoenix/lib/ViewCtrl.js');
require('plugins/phoenix/lib/chart/ChartCtrl.js');
require('plugins/phoenix/lib/chart/chart.js');
require('plugins/phoenix/main.less');
