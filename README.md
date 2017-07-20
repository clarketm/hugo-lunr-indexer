# Hugo-Lunr-Indexer (HLI)

Generate [Lunr](https://lunrjs.com/) indexes for [Hugo](https://gohugo.io/) static sites by parsing front matter.

## Installation

### Install with npm

```shell
$ npm install hugo-lunr-indexer
```

## Usage

### CLI

```shell
###################
# Default options #
###################

$ hli \                      # hli -> hugo-lunr-indexer
> -i "content/**" \          # input (path)
> -o "public/lunr.json" \    # output (path)
> -l "toml"                  # language (toml | yaml)
> -d "+++"                   # delimiter (toml: +++ | yaml: ---)
```

### NPM Scripts

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

### API

```javascript
var hli = require('hugo-lunr-indexer');
var Indexer = new hli();
Indexer.setInput('content/blog/**');
Indexer.setOutput('public/static/index.json');
Indexer.setLanguage('toml');
Indexer.setDelimiter('---');
Indexer.index();
```
