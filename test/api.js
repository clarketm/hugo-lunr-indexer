#!/usr/bin/env node

var hli = require('../');
var Indexer = new hli();

// YAML
Indexer.setInput('content/test-yaml.md');
Indexer.setOutput('public/lunr-api-yaml.json');
Indexer.setLanguage('yaml');
Indexer.index();

// TOML
Indexer.setInput('content/test-toml.md');
Indexer.setOutput('public/lunr-api-toml.json');
Indexer.setLanguage('toml');
Indexer.index();
