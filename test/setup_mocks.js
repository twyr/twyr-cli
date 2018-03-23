/**
 * @file      tests/setup_mocks.js
 * @author    Vish Desai <shadyvd@hotmail.com>
 * @version   0.7.1
 * @copyright Copyright&copy; 2014 - 2018 {@link https://twyr.github.io|Twy'r Project}
 * @license   {@link https://spdx.org/licenses/MITNFA.html|MIT +no-false-attribs}
 * @summary   Mocking up what we need before running any tests
 *
 */

'use strict';

const _setupFn = function(callback) {
	if(callback) callback();
};

const _teardownFn = function(callback) {
	if(callback) callback();
};

const prepare = require('mocha-prepare');
prepare(_setupFn, _teardownFn);
