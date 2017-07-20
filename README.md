# Hugo-Lunr-Indexer (HLI)

Generate [Lunr](https://lunrjs.com/) indexes for [Hugo](https://gohugo.io/) static sites by parsing front matter (TOML or YAML).

## Installation

### Install with npm

```shell
$ npm install hli
```

## Usage

### CLI

```shell
# Options
$ hli \
> -i 'content/**' \          # input (path)
> -o 'public/lunr.json' \    # output (path)
> -l 'toml'                  # language (toml|yaml)
```

### NPM Scripts

```javascript
...
"scripts": {
  "index": "hli -i 'content/posts/**' -o 'public/indices/lunr.json' -l 'yaml'"
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
indexer.setLanguage('toml');
Indexer.index();
```
