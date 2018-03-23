/**
 * @file      test/commands/hello.test.js
 * @author    Vish Desai <shadyvd@hotmail.com>
 * @version   0.7.1
 * @copyright Copyright&copy; 2014 - 2018 {@link https://twyr.github.io|Twy'r Project}
 * @license   {@link https://spdx.org/licenses/MITNFA.html|MIT +no-false-attribs}
 * @summary   The "hello" command test
 *
 */

'use strict';

const {expect, test} = require('@oclif/test');

describe('hello', () => {
  test
  .stdout()
  .command(['hello'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world');
  });

  test
  .stdout()
  .command(['hello', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff');
  });
});
