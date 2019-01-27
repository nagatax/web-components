/**
 * @namespace
 */
let Value = Value || {};

/**
 * @constructor
 * @classdesc 日付/時刻関連の
 */
Value.Date.prototype = {
  WEEK: {
    SUNDAY: Symbol(),
    MONDAY: Symbol(),
    TUESDAY: Symbol(),
    WEDNESDAY: Symbol(),
    THURSDAY: Symbol(),
    FRIDAY: Symbol(),
    SATURDAY: Symbol(),
  },
};

module.exports = Value;
