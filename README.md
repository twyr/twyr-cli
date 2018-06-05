twyr-cli
========

Generate services, middlewares, components, templates, tenant-specific scaffolding, and whole new servers confirming to the Twy&#39;r specifications

[![Version](https://img.shields.io/npm/v/twyr-cli.svg)](https://npmjs.org/package/twyr-cli)
[![Downloads/week](https://img.shields.io/npm/dw/twyr-cli.svg)](https://npmjs.org/package/twyr-cli)
[![License](https://img.shields.io/npm/l/twyr-cli.svg)](https://github.com/twyr/twyr-cli/blob/master/package.json)
[![Greenkeeper badge](https://badges.greenkeeper.io/twyr/twyr-cli.svg)](https://greenkeeper.io/)
[![CircleCI](https://circleci.com/gh/twyr/twyr-cli.svg?style=shield)](https://circleci.com/gh/twyr/twyr-cli)
<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
<!-- usage -->
# Usage

```sh-session
$ npm install -g twyr-cli
$ twyr-cli COMMAND
running command...
$ twyr-cli (-v|--version|version)
twyr-cli/0.7.1 linux-x64 node-v8.10.0
$ twyr-cli --help [COMMAND]
USAGE
  $ twyr-cli COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
# Commands

* [twyr-cli hello](#hello)
* [twyr-cli help [COMMAND]](#help-command)
## hello

Describe the command here

```
USAGE
  $ twyr-cli hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  Describe the command here
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/twyr/twyr-cli/blob/v0.7.1/src/commands/hello.js)_

## help [COMMAND]

display help for twyr-cli

```
USAGE
  $ twyr-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.1.6/src/commands/help.ts)_
<!-- commandsstop -->
