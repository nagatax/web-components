import { ENCTYPE, REQUEST_METHOD, RESPONSE_STATUS_CODE } from '../Value/Http';

export default class Ajax {
  /**
   * リソースを取得する。
   * @param {String} url
   * @param {Array} headers
   */
  get(url, headers = undefined) {
    this.send(REQUEST_METHOD.GET, url, headers);
  }

  /**
   * リソースを作成する。
   * @param {String} url
   * @param {Object|String} body
   * @param {Array} headers
   */
  post(url, body, headers = undefined) {
    // HTTPヘッダ情報を設定する
    const header = headers || [
      { name: 'Content-Type', value: ENCTYPE.URLENCODED },
    ];
    this.send(REQUEST_METHOD.POST, url, header, body);
  }

  /**
   * リクエストの送信
   * @param {String} method
   * @param {String} url
   * @param {Array} headers
   * @param {Object|String} body
   */
  send(method, url, headers = undefined, body = undefined) {
    const xhr = new XMLHttpRequest();

    // イベントの登録
    // (open関数の前に記載すること)
    xhr.addEventListener('load', this.success);
    xhr.addEventListener('error', this.error);

    // 接続を開く
    xhr.open(method, url);

    // リクエストヘッダを設定する
    // (open関数の後に記載すること)
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(headers[key].name, headers[key].value);
    });

    // リクエストを送信する
    if (method === REQUEST_METHOD.GET) {
      xhr.send();
    } else if (method === REQUEST_METHOD.POST) {
      xhr.send(body);
    } else {
      xhr.send();
    }
  }

  /**
   * 成功時の処理
   *
   * @returns {Ajax}
   */
  success() {
    if (this.status === RESPONSE_STATUS_CODE.OK) {
      console.log(this.status);
    }
    return this;
  }

  /**
   * 失敗時の処理
   *
   * @returns {Ajax}
   */
  error() {
    return this;
  }
}
