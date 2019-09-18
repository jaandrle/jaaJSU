/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* global $time */
/**
 * Function returns timestamp in the form of "YYYY-MM-DD HH:MM:SS".
 * @method getTimeStamp
 * @memberof $time
 * @public
 * @param {Number|Boolean} [time=undefined]
 *  * Uses as argument for `new Date(*)`
 * @return {String}
 *  * Timestamp
 */
$time.getTimeStamp= t=> $time.toString($time.formats.SQL)($time.fromDateArguments(t));
/**
 * Function returns timestamp in the form of "YYYY-MM-DD".
 * @method getDateStamp
 * @memberof $time
 * @public
 * @param {Number|Boolean} [time=undefined]
 *  * Uses as argument for `new Date(*)`
 * @return {String}
 *  * Datestamp
 */
$time.getDateStamp= t=> $time.toString($time.formats.SQL_DATE)($time.fromDateArguments(t));