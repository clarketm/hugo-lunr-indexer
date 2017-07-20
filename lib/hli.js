var fs = require('fs');
var glob = require('glob');
var matter = require('gray-matter');
var toml = require('toml');
var removeMd = require('remove-markdown');
var striptags = require('striptags');
var path = require('path');


function HugoLunrIndexer(input, output, language) {
  var self = this;
  var stream;
  this.list = [];

  // DEFAULTS
  this.input = 'content/**';
  this.output = 'public/lunr.json';
  this.language = 'toml';
  // delimiter:
  //   yaml -> '---'
  //   toml -> '+++'

  // Input
  if (~process.argv.indexOf("-i")) {
    this.setInput(process.argv[process.argv.indexOf("-i") + 1]);
  }
  // Output
  if (~process.argv.indexOf("-o")) {
    this.setOutput(process.argv[process.argv.indexOf("-o") + 1]);
  }
  // Language
  if (~process.argv.indexOf("-l")) {
    this.setLanguage(process.argv[process.argv.indexOf("-l") + 1]);
  }
  // Delimiter
  if (~process.argv.indexOf("-d")) {
    this.setDelimiter(process.argv[process.argv.indexOf("-d") + 1]);
  }

  this.baseDir = path.dirname(this.input);
}

HugoLunrIndexer.prototype.setInput = function(input) {
  this.input = input;
}

HugoLunrIndexer.prototype.setOutput = function(output) {
  this.output = output;
}

HugoLunrIndexer.prototype.setLanguage = function(language) {
  this.language = language;
}

HugoLunrIndexer.prototype.setDelimiter = function(delimiter) {
  this.delimiter = delimiter;
}

HugoLunrIndexer.prototype.setLanguageConfig = function(language, delimiter) {
  switch (true) {
    case language.toLowerCase() === 'yaml':
      this.languageConfig = {
        delims: delimiter || '---',
        lang: 'yaml'
      };
      break;
    default:
    case language.toLowerCase() === 'toml':
      this.languageConfig = {
        delims: delimiter || '+++',
        lang: 'toml',
        engines: {
          toml: toml.parse.bind(toml),
        }
      };
      break;
  }
}

HugoLunrIndexer.prototype.index = function(input, output, language, delimiter) {
  var self = this;

  if (input) {
    self.input = input;
  }

  if (output) {
    self.output = output;
  }

  if (language) {
    self.language = language;
  }

  if (delimiter) {
    self.delimiter = delimiter;
  }

  self.setLanguageConfig(self.language, self.delimiter)
  self.list = [];
  self.stream = fs.createWriteStream(self.output);
  self.readDirectory(self.input);
  self.stream.write(JSON.stringify(self.list, null, 4));
  self.stream.end();
}

HugoLunrIndexer.prototype.readDirectory = function(path) {
  var self = this;
  var files = glob.sync(path);
  var len = files.length;
  for (var i = 0; i < len; i++) {
    var stats = fs.lstatSync(files[i]);
    if (!stats.isDirectory()) {
      self.readFile(files[i]);
    }
  }
  return true;
}

HugoLunrIndexer.prototype.readFile = function(filePath) {
  var self = this;
  var ext = path.extname(filePath);
  var meta = matter.read(filePath, self.languageConfig);
  if (meta.data.draft === true) {
    return;
  }

  if (ext == '.md') {
    var plainText = removeMd(meta.content);
  } else {
    var plainText = striptags(meta.content);
  }

  var uri = '/' + filePath.substring(0, filePath.lastIndexOf('.'));
  uri = uri.replace(self.baseDir + '/', '');

  if (meta.data.slug != undefined) {
    uri = path.dirname(uri) + meta.data.slug;
  }

  if (meta.data.url != undefined) {
    uri = meta.data.url
  }

  var tags = [];

  if (meta.data.tags != undefined) {
    tags = meta.data.tags;
  }

  var item = {
    'uri': uri,
    'title': meta.data.title,
    'content': plainText,
    'tags': tags
  };

  self.list.push(item);
}

module.exports = HugoLunrIndexer;
