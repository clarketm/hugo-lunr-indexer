#!/usr/bin/env node

var hli = require('../');
var Indexer = new hli();

// DEFAULTS
// 1: content/**
// 2: public/lunr.json
// 3: toml
// 4: +++ (toml) --- (yaml)
// Indexer.index();

// PARAMS
// 1: input
// 2: output
// 3: language
// 4: delimiter
Indexer.index('content/test-yaml.md', 'public/lunr-api-params.json', 'yaml', '---');

// YAML
Indexer.setInput('content/test-yaml.md');
Indexer.setOutput('public/lunr-api-yaml.json');
Indexer.setLanguage('yaml');
Indexer.setDelimiter('+++');
Indexer.index();

// TOML
Indexer.setInput('content/test-toml.md');
Indexer.setOutput('public/lunr-api-toml.json');
Indexer.setLanguage('toml');
Indexer.setDelimiter('+++');
Indexer.index();
