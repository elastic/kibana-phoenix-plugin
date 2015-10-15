module.exports = function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      app: {
        title: 'Jubilee',
        description: 'Drawing your data',
        main: 'plugins/jubilee/app',
        autoload: kibana.autoload.styles
      }
    }
  });
};
