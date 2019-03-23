/**
 * @namespace
 */
var Util = Util || {};

/**
 * @constructor
 */
Util.Ajax = function (url, method) {
  if (method === undefined) { method = 'GET'; }

  this.xhr = new XMLHttpRequest();
  this.url = url;
  this.method = method;
};

Util.Ajax.prototype = {
  /**
   * リクエストの送信
   */
  send() {
    this.xhr.open(this.method, this.url);
    this.xhr.send();
    this.xhr.addEventListener('load', this.success);
    this.xhr.addEventListener('error', this.error);
  },

  /**
   * 成功時の処理
   */
  success() {
    console.log(this);
  },
  /**
   * 失敗時の処理
   */
  error() {
    console.log(this);
  },
};
