#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');

var cartocss2leaflet = require('../index').cartocss2leaflet;

program
    .version('0.0.1')
    .usage('< <input_file>')
    .parse(process.argv);

fs.readFile('/dev/stdin', 'utf8', function (error, contents) {
    console.log(JSON.stringify(cartocss2leaflet(contents)));
});
