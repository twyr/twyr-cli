/**
 * @file      src/commands/hello.js
 * @author    Vish Desai <shadyvd@hotmail.com>
 * @version   0.7.1
 * @copyright Copyright&copy; 2014 - 2018 {@link https://twyr.github.io|Twy'r Project}
 * @license   {@link https://spdx.org/licenses/MITNFA.html|MIT +no-false-attribs}
 * @summary   The "hello" command
 *
 */

'use strict';
const {
	Command,
	flags
} = require('@oclif/command');

class HelloCommand extends Command {
	async run() {
		const commandFlags = this.parse(HelloCommand).flags,
			name = commandFlags.name || 'world';

		this.log(`hello ${name} from ${__filename}!`);
	}
}

HelloCommand.description = `
Describe the command here
...
Extra documentation goes here
`;

HelloCommand.flags = {
	'name': flags.string({
		'char': 'n',
		'description': 'name to print'
	})
};

module.exports = HelloCommand;
