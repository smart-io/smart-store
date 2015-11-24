export default class Config {
  static _url;

  static set url(value) {
    Config._url = value;
  }

  static get url() {
    return Config._url;
  }
}
