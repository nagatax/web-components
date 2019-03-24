export default class Ajax {
  constructor(url, method = 'GET') {
    this.xhr = new XMLHttpRequest();
    this.url = url;
    this.method = method;
  }

  /**
   * リクエストの送信
   */
  send() {
    // イベントの登録
    // (open関数の前に記載すること)
    this.xhr.addEventListener('load', this.success);
    this.xhr.addEventListener('error', this.error);

    // 接続を開く
    this.xhr.open(this.method, this.url);
    this.xhr.send();
  }

  /**
   * 成功時の処理
   */
  success() {
    if (this.status === 200) {
      console.log(this.status);
    }
    console.log(this);
  }

  /**
   * 失敗時の処理
   */
  error() {
    console.log(this);
  }
}
