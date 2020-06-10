const merge = require('webpack-merge');
const path = require('path');

const prod = require('./prod');

module.exports = merge(prod, {});