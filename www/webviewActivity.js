var exec = require('cordova/exec');

var webviewActivity = {
  show: function (url, ShowLoading, title) {
    exec(
      function () {},
      function () {},
      'webView',
      'show',
      [url, ShowLoading, title]
    );
  },
  close: function (url, ShowLoading, title) {
    exec(
      function () {},
      function () {},
      'webView',
      'close',
      []
    );
  }
};

module.exports = webviewActivity;
