#!/usr/bin/env node
const args = process.argv.slice(2);
const {Plop, run, minimist} = require('../dist/bundle');
const argv = minimist(args);

Plop.launch({
	cwd: argv.cwd,
	configPath: argv.plopfile,
	require: argv.require,
	completion: argv.completion
}, run);