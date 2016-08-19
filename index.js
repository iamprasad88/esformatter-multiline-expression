#!/usr/bin/env node
'use strict';

const tk = require('rocambole-token'),
  plugin = {},
  indent = require('rocambole-indent');
let indentAdd;

plugin.nodeAfter = function(node) {
  if (node.type === 'LogicalExpression' ||
        node.type === 'BinaryExpression') {
    indent.inBetween(node.startToken, node.endToken, 2);
  }
};

module.exports = plugin;
