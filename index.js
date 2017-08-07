var sha256 = require('sha256');
var fs = require('fs');

var NEW_LINE = '\r\n';
var FILE_ENCODING = 'utf8'; 
var DEFAULT_INPUT_FILENAME = 'input.csv';
var DEFAULT_OUTPUT_FILENAME = 'encryptFile.csv'

var inputFilename = DEFAULT_INPUT_FILENAME;
var outFilename = DEFAULT_OUTPUT_FILENAME;
var includeHeader = false;

if (process.argv.length > 2) {
  inputFilename = process.argv[2];
}
if (process.argv.length > 3) {
  outFilename = process.argv[3];
}
if (process.argv.length > 4) {
  includeHeader = process.argv[4].toUpperCase() === 'Y';
}

var logger = fs.createWriteStream(outFilename, {
  flags: 'w' 
});

function addNewMessageWithNewLine(logger, message) {
  logger.write(message + NEW_LINE);
}

fs.readFile('./' +inputFilename, FILE_ENCODING, function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
    var content = data.split("\r\n");
    for(var i=0;i<content.length;i++) {
      if(includeHeader && i===0)
      {
        addNewMessageWithNewLine(logger,content[i]);
        continue;
      }
      addNewMessageWithNewLine(logger,sha256(content[i]));
    }
    console.log('Complete !!');
});

