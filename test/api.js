#!/usr/bin/env node

var hli = require('../');
var Indexer = new hli();
Indexer.setInput('content/**');
Indexer.setOutput('public/lunr.json');
Indexer.setLanguage('toml');
Indexer.index();
