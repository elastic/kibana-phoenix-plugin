require('ui/chrome')
.setTabs([{
  id: '',
  title: 'Phoenix'
}])
.setRootTemplate(require('plugins/phoenix/index.html'));

require('plugins/phoenix/lib/controllers/ViewCtrl.js');
require('plugins/phoenix/lib/controllers/ChartCtrl.js');
require('plugins/phoenix/lib/directives/chart.js');
require('plugins/phoenix/main.less');
