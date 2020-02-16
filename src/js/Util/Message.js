import { Ajax } from 'src/js/Util/Ajax';

module.exports = class Message {
  /**
   * @constructor
   */
  constructor() {
    this.message = {};
  }

  /**
   * メッセージの取得
   * @param id
   * @returns {string|*}
   */
  getMessage(id) {
    return this.message[id];
  }

  /**
   * メッセージリストの取得
   * @returns {{[p: string]: string}|*}
   */
  getMessageList() {
    return this.message;
  }

  /**
   * メッセージの設定
   * @param id
   * @param message
   */
  setMessage(id, message) {
    this.message[id] = message;
  }

  /**
   * メッセージをファイルから取得
   * @param url
   */
  setMessageFromFile(url) {
    const ajax = new Ajax(url);

    ajax.success = function () {
      this.message = JSON.parse(this.responseText);
    };

    ajax.error = function () {
      this.message = {};
    };

    ajax.send();
  }
};
