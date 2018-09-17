# [Hugo-Lunr-Indexer (HLI)](https://blog.travismclarke.com/project/hugo-lunr-indexer/)

[![NPM release](https://img.shields.io/npm/v/hugo-lunr-indexer.svg)](https://www.npmjs.com/package/hugo-lunr-indexer)
[![Build Status](https://circleci.com/gh/clarketm/hugo-lunr-indexer.svg?style=shield)](https://circleci.com/gh/clarketm/hugo-lunr-indexer)
[![License](https://img.shields.io/npm/l/hugo-lunr-indexer.svg)](LICENSE.md)

Generate [Lunr](https://lunrjs.com/) indexes for [Hugo](https://gohugo.io/) static sites by parsing front matter.

<br>
<br>
<a href="https://blog.travismclarke.com/project/hugo-lunr-indexer/">
  <p align="center"><img width="40%" src="/hero.png" /></p>
</a>

## Installation

#### Install with npm

```shell
$ npm install hugo-lunr-indexer
```

## Usage

#### CLI

```shell
###################
# Default options #
###################

$ hli \                      # hli -> hugo-lunr-indexer
  -i "content/**" \          # input (path)
  -o "public/lunr.json" \    # output (path)
  -l "toml"                  # language (toml | yaml)
  -d "+++"                   # delimiter (toml: +++ | yaml: ---)
```

#### NPM Scripts

```javascript
...
"scripts": {
  "index": "hli -i 'content/posts/**' -o 'public/indices/lunr.json' -l 'yaml' -d '---'"
},
...
```

```shell
$ npm run index
```

#### API

```javascript
var hli = require('hugo-lunr-indexer');
var Indexer = new hli();
Indexer.setInput('content/blog/**');
Indexer.setOutput('public/static/index.json');
Indexer.setLanguage('toml');
Indexer.setDelimiter('---');
Indexer.index();
```

## Sites using hugo-lunr-indexer
* https://blog.travismclarke.com/

## License
Apache-2.0 © [Travis Clarke](https://www.travismclarke.com/)
