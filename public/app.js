require('ui/chrome')
.setTabs([{
  id: '',
  title: 'Jubilee'
}])
.setRootTemplate(require('plugins/jubilee/index.html'));

require('ui/modules').get('apps/jubilee', [])
.controller('jubilee', function($scope) {
  var faker = require('plugins/jubilee/lib/fakeData.js');
  $scope.ui = {
    data: faker()
  };
});
