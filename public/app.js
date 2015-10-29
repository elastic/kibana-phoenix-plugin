require('ui/chrome')
.setTabs([{
  id: '',
  title: 'Phoenix'
}])
.setRootTemplate(require('plugins/phoenix/index.html'));

require('ui/modules').get('apps/phoenix', [])
.controller('phoenix', function($scope) {
  var faker = require('plugins/phoenix/lib/fakeData.js');
  $scope.ui = {
    data: faker()
  };
});
