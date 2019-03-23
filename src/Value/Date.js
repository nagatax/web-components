/**
 * @namespace
 */
var Value = Value || {};

/**
 * @constructor
 * @classdesc 日付/時刻関連の処理
 */
Value.Date = function () {
};

/**
 * 曜日
 */
Value.Date.WEEK = {
  SUNDAY: Symbol('sunday'),
  MONDAY: Symbol('monday'),
  TUESDAY: Symbol('tuesday'),
  WEDNESDAY: Symbol('wednesday'),
  THURSDAY: Symbol('thursday'),
  FRIDAY: Symbol('friday'),
  SATURDAY: Symbol('saturday'),
};

// エクスポート
module.exports = Value.Date;
