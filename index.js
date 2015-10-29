module.exports = function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      app: {
        title: 'Phoenix',
        description: 'Drawing your data',
        main: 'plugins/phoenix/app',
        autoload: kibana.autoload.styles
      }
    }
  });
};
